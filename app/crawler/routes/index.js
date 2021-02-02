export const routes = {
    // 🚦Routing constants
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
    },
    fund: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    }
};

export const routeByApiModels = {
    home: routes.home,
    page: routes.page,
    team: routes.team,
    portfolio: routes.portfolio,
    company: routes.portfolioSingle,
    fund: routes.fund
};

// You can pass an array of regular expressions to exclude dynamic routes.
export const excludedDynamicRoutes = () => (process.env.NETLIFY_ENV === 'production' ? [] : []);
