import Sass from 'sass';
import { defaultLocale, locales, getPagesList } from './config/i18n';
import { layoutQuery } from './api/dato/index';
import { excludedDynamicRoutes } from './app/crawler/routes';

import enTranslation from './locales/en.json';

const customSass = {
    implementation: Sass
};

/*
 ** NOTE:
 ** The NODE_ENV will always be equal to 'production' when we generate
 ** the website. Thus, we don't have a dev/production env variable
 ** for the preproduction environnement.
 ** The NETLIFY_ENV variable allow us to set a dev/production variable
 ** totaly decorrelated from the NODE_ENV variable.
 ** SEE: https://www.netlify.com/docs/continuous-deployment/#environment-variables
 */
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const netlifyEnv = process.env.NETLIFY_ENV;
const isProdEnv = netlifyEnv === 'production';
const websiteUrl = process.env.URL || `http://${host}:${port}`;

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ring-capital',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png'
            },
            {
                rel: 'icon',
                sizes: '32x32',
                href: '/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png'
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#5bbad5'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap'
            }
        ],
        script: [
            {
                type: 'text/javascript',
                id: 'hs-script-loader',
                async: true,
                defer: true,
                src: '//js-eu1.hs-scripts.com/24964919.js'
            }
        ]
    },

    server: {
        host: '0.0.0.0' // pour accèder au site depuis le réseau lan
    },

    pageTransition: {
        appear: true,
        duration: 400
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~assets/scss/main.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/globals.js', '~/plugins/axios', '~/plugins/breakpoints', '~/plugins/stereorepo'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: ['~/components', { path: '~/components/Home/', prefix: 'Home' }],

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // Custom crawler to be sure that all urls are referenced
        '~/modules/crawler',
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/robots',
        ['nuxt-i18n'],
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxtjs/proxy',
        '~/modules/slugToModelApiKey',
        '~/modules/initLayoutData',
        '~/modules/mediasToNetlify'
    ],

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.URL || 'http://localhost:3000'
    },

    // Proxy config
    proxy: {
        '/.netlify': {
            target: 'http://localhost:9000',
            pathRewrite: {
                '^/.netlify/functions': ''
            }
        }
    },

    // i18n config
    i18n: {
        locales,
        defaultLocale,
        parsePages: false,
        pages: getPagesList(),
        vueI18n: {
            fallbackLocale: defaultLocale,
            messages: {
                en: enTranslation || {}
            }
        },
        vuex: { syncLocale: true }
    },

    // Style Resources module configuration
    styleResources: {
        scss: [
            '~/assets/scss/abstracts/_variables.scss',
            '~/assets/scss/abstracts/_animations.scss',
            '~/assets/scss/abstracts/_functions.scss',
            '~/assets/scss/abstracts/_mixins.scss',
            '~/assets/scss/abstracts/_placeholders.scss'
        ]
    },

    // Robots config
    robots: () => {
        return isProdEnv
            ? { UserAgent: '*', Disallow: ['/404'], Sitemap: `${websiteUrl}/sitemap.xml` }
            : { UserAgent: '*', Disallow: '/' };
    },

    /*
     ** Runtime configuration
     ** See https://fr.nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
     */
    publicRuntimeConfig: {
        isDevEnv: process.env.NETLIFY_ENV === 'development',
        // On met le token qui si on est en local (pour pas qu'il soit injecté dans le JS en prod)
        datoApiToken: process.env.DATOCMS_API_TOKEN,
        datoApiUrl: process.env.GRAPHQL_ENDPOINT
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        /*
         ** Transpiling es6 packages
         */
        transpile: [/@stereorepo/, 'gsap'],
        loaders: {
            scss: customSass
        }
    },
    /*
     ** Generate configuration
     ** See https://fr.nuxtjs.org/api/configuration-generate/
     */
    generate: {
        crawler: false,
        fallback: false,
        exclude: excludedDynamicRoutes(isProdEnv)
    },
    layoutData: {
        layoutQuery
    },
    vue: {
        config: {
            // Giving access to performances in the inspector
            devtools: process.env.NETLIFY_ENV === 'development',
            performance: process.env.NETLIFY_ENV === 'development'
        }
    }
};
