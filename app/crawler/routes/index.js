// 🚦Routing constants
export const routes = {
    home: {
        i18nFormat: 'index',
        routerFormat: 'index'
    },
    page: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    team: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    portfolio: {
        i18nFormat: 'portfolio/index',
        routerFormat: 'portfolio'
    },
    portfolioSingle: {
        i18nFormat: 'portfolio/_slug',
        routerFormat: 'portfolio-slug'
    }
};

export const routeByApiModels = {
    home: routes.home,
    page: routes.page,
    team: routes.team,
    portfolio: routes.portfolio,
    company: routes.portfolioSingle
};

// You can pass an array of regular expressions to exclude dynamic routes.
export const excludedDynamicRoutes = () => (process.env.NETLIFY_ENV === 'production' ? [] : []);
