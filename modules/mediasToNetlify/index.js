import { join, extname } from 'path';
import fs from 'fs-extra';
import logger from 'consola';
import fetch from 'node-fetch';

const CACHE_FOLDER = './node_modules/.cache/website-media';
const WEBSITE_MEDIA_FOLDER = '/medias';
const IMAGE_URL_REGEX = /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|jpeg|png|svg|gif)/g;
const CONCURRENCY = 10;

// https://gist.github.com/codeguy/6684588
const slugify = text => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .trim()
        .replace('/', '')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '-')
        .replace(/--+/g, '-');
};

export default function () {
    const baseDir = join(this.options.generate.dir, WEBSITE_MEDIA_FOLDER);
    const images = [];
    const newImagesSaved = [];

    this.nuxt.hook('generate:distCopied', generator => {
        // Pour etre sur que le dossier existe bien
        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir);
        }
    });

    this.nuxt.hook('generate:routeCreated', async ({ route, path, errors }) => {
        // Ici pour replacer les url des images dans les fichier de payload (utilisés au moment d'un changement de page via nuxt-link)
        const routePath = join(this.options.generate.dir, this.options.generate.staticAssets.versionBase, route);
        const payloadPath = join(routePath, 'payload.js');
        const statePath = join(routePath, 'state.js');
        const promises = [];
        if (fs.existsSync(payloadPath)) {
            promises.push(replaceImagesInFile(payloadPath, true));
        }
        if (fs.existsSync(statePath)) {
            promises.push(replaceImagesInFile(statePath, true));
        }
        // logger.info('Replacing images from payload.js files');
        return await Promise.all(promises);
    });

    this.nuxt.hook('generate:page', page => {
        // A la generation de la page on remplace les url des images
        page.html = replaceImagesInString(page.html);
    });

    this.nuxt.hook('generate:done', async () => {
        // Quand le generate est fini
        const baseBuildPath = join(this.options.generate.dir, this.options.build.publicPath);

        // On remplace les path dans les chunks js
        await replaceImagesInChunks(baseBuildPath);

        // On DL les images dans le doss de cache
        await saveRemoteImagesToCache();

        // On copy les images du cache dans le doss de build
        return await copyCacheToBuild();
    });

    // See ./middleware.js file
    // --------
    // this.addPlugin({
    //     src: resolve(__dirname, 'middleware.js')
    // });
    // this.nuxt.options.router.middleware.push('mediasToNetlify');

    const saveRemoteImagesToCache = async () => {
        const imageList = images.filter((img, i) => images.findIndex(u => u.url === img.url) === i);
        const total = imageList.length;

        while (imageList.length) {
            await Promise.all(
                imageList.splice(0, CONCURRENCY).map(async img => {
                    return await saveRemoteImage(img);
                })
            );
        }

        logger.info(`saved ${newImagesSaved.length} new remote images from ${total} total website images`);
    };

    const saveRemoteImage = async ({ url, path, name }) => {
        const cacheFilePath = join(CACHE_FOLDER, name);
        let existingMedia = null;
        try {
            existingMedia = await fs.readFile(cacheFilePath);
            // The file already exist so we don't write it again
        } catch (e) {
            // The file don't exist let's continue to write it
        }
        if (existingMedia) {
            // logger.info(filePath, ' already exist');
            return;
        }

        newImagesSaved.push(name);

        try {
            const data = await getRemoteImage(url);

            fs.ensureFileSync(cacheFilePath);
            // logger.info(`Media: ${url.split('/').pop()}`);

            // Opening stream to write the fetched data
            const fileStream = fs.createWriteStream(cacheFilePath);

            await new Promise(resolve => {
                data.pipe(fileStream);
                data.on('error', err => {
                    logger.error(err);
                });

                // Resolving the promise if no error thrown
                fileStream.on('finish', () => {
                    // logger.success('Successfully downloaded!');
                    resolve();
                });
            });
        } catch (e) {
            logger.error(`image fetch failed: ${url} (${e})`);
        }
    };

    const getRemoteImage = async href => {
        return await fetch(href)
            .then(response => response.body)
            .catch(err => {
                logger.error(err);
            });
    };

    const getImageUrls = string => {
        const urls = [];

        // const test = new RegExp('(http(s?):)([/|.|w|s|-])*.+(' + EXTENSIONS.join('|') + ')+', 'g');
        const matches = string.match(IMAGE_URL_REGEX);
        if (!matches) return urls;
        matches.forEach(match => {
            const matchBaseUrl = true;
            let url;
            try {
                url = new URL(match);
            } catch (e) {
                console.log(e);
                return;
            }
            if (matchBaseUrl && !urls.find(u => u.href === url.href)) {
                urls.push(url);
            }
        });
        return urls;
    };

    const replaceRemoteImages = (html, urls) => {
        urls = urls.forEach(url => {
            const ext = '.' + url.pathname.split('.').pop();
            const name = slugify(url.pathname.split(ext).join('')) + ext;
            const imgPath = join(baseDir, name);
            const URL = process.env.NETLIFY_ENV === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL;
            const replacedPath = URL + WEBSITE_MEDIA_FOLDER + '/' + name;

            const img = { url: url.href, path: imgPath, name };
            images.push(img);
            html = html.split(url.href).join(replacedPath);
        });
        return html;
    };

    const replaceImagesInString = string => {
        const urls = getImageUrls(string);
        if (!urls.length) {
            return string;
        }
        return replaceRemoteImages(string, urls);
    };

    const replaceImagesInFile = async (path, encoded = true) => {
        return await fs.readFile(path, 'utf8', async (err, data) => {
            if (err) {
                return logger.error(err);
            }
            let payload = data;
            if (encoded) payload = data.split('\\u002F').join('/');
            let replaced = replaceImagesInString(payload);
            if (!replaced) {
                return;
            }
            if (encoded) replaced = replaced.split('/').join('\\u002F');
            return await fs.writeFile(path, replaced, err => {
                if (err) {
                    logger.error(err);
                }
            });
        });
    };

    const readDirContents = async path => {
        return await new Promise((resolve, reject) => {
            fs.readdir(path, (err, files) => {
                if (err) return reject(err);
                resolve(files);
            });
        });
    };

    const replaceImagesInChunks = async path => {
        const files = await readDirContents(path);
        logger.info('Replacing images in chunks');
        return await Promise.all(
            files.map(async file => {
                const filePath = join(path, file);
                if (extname(filePath) !== '.js') return;
                return await replaceImagesInFile(filePath, false);
            })
        );
    };

    const copyCacheToBuild = async () => {
        logger.info('Copying images from cache to build folder');
        return await fs.copy(CACHE_FOLDER, baseDir, { overwrite: false });
    };
}
