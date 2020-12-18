import { routes } from '../app/crawler/routes';

export const defaultLocale = 'en';

export const locales = [{ code: 'en', iso: 'en', name: 'english' }];

// 🚦 Specific routes
// NOTE: You can use isProdEnv to set conditionnal routes (not showing on prod for example)
export const getPagesList = () => ({
    [routes.home.i18nFormat]: {
        en: '/'
    },
    [routes.page.i18nFormat]: {
        en: '/:slug?'
    }
});
