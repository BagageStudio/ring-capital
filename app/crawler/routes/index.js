export const routes = {
    // 🚦Routing constants
    homepage: {
        i18nFormat: 'index',
        routerFormat: 'index'
    },
    modular: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    team: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    fund: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    mediaList: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    portfolioList: {
        i18nFormat: 'portfolio/index',
        routerFormat: 'portfolio'
    },
    portfolioItem: {
        i18nFormat: 'portfolio/_slug',
        routerFormat: 'portfolio-slug'
    },
    contact: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    home: {
        i18nFormat: 'index',
        routerFormat: 'index'
    },
    page: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    portfolio: {
        i18nFormat: 'portfolio/index',
        routerFormat: 'portfolio'
    },
    portfolioTech: {
        i18nFormat: 'portfolio-tech/index',
        routerFormat: 'portfolio-tech'
    },
    portfolioSingle: {
        i18nFormat: 'portfolio/_slug',
        routerFormat: 'portfolio-slug'
    },
    investorsPage: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    useCasesPage: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    podcastsPage: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    pressRoom: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    sustainableEngagement: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    ring2success: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    jobsPage: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    },
    blog: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    }
};

export const routeByApiModels = {
    homepage: routes.home,
    modular: routes.modular,
    team: routes.team,
    media_list: routes.mediaList,
    portfolio_list: routes.portfolioList,
    portfolio_item: routes.portfolioItem,
    fund: routes.fund,
    contact: routes.contact
};

// You can pass an array of regular expressions to exclude dynamic routes.
export const excludedDynamicRoutes = () => (process.env.NETLIFY_ENV === 'production' ? [] : []);
