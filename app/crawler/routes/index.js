// 🚦Routing constants
export const routes = {
    home: {
        i18nFormat: 'index',
        routerFormat: 'index'
    },
    page: {
        i18nFormat: '_slug',
        routerFormat: 'slug'
    }
};

export const routeByApiModels = {
    home: routes.home,
    page: routes.page
};

// You can pass an array of regular expressions to exclude dynamic routes.
export const excludedDynamicRoutes = () => (process.env.NETLIFY_ENV === 'production' ? [] : []);
