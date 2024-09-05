import { routes } from '../app/crawler/routes';

export const defaultLocale = 'en';

export const locales = [{ code: 'en', iso: 'en', name: 'english' }];

// 🚦 Specific routes
// NOTE: You can use isProdEnv to set conditionnal routes (not showing on prod for example)
export const getPagesList = () => ({
    [routes.homepage.i18nFormat]: {
        en: '/'
    },
    [routes.modular.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.team.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.fund.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.contact.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.portfolioList.i18nFormat]: {
        en: '/portfolio'
    },
    [routes.portfolioItem.i18nFormat]: {
        en: '/portfolio/:slug?'
    },
    [routes.mediaList.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.home.i18nFormat]: {
        en: '/'
    },
    [routes.page.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.investorsPage.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.portfolio.i18nFormat]: {
        en: '/portfolio'
    },
    [routes.portfolioTech.i18nFormat]: {
        en: '/portfolio-tech'
    },
    [routes.portfolioSingle.i18nFormat]: {
        en: '/portfolio/:slug?'
    },
    [routes.useCasesPage.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.podcastsPage.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.pressRoom.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.sustainableEngagement.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.ring2success.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.jobsPage.i18nFormat]: {
        en: '/:slug?'
    },
    [routes.blog.i18nFormat]: {
        en: '/:slug?'
    }
});
