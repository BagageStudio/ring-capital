export const state = () => ({
    customers: null,
    demo: null,
    global: null,
    newsletter: null,
    steps: null,
    error404: null
});

export const mutations = {
    setCustomersData(state, data) {
        state.customers = data;
    },
    setDemoData(state, data) {
        state.demo = data;
    },
    setGlobalData(state, data) {
        state.global = data;
    },
    setNewsletterData(state, data) {
        state.newsletter = data;
    },
    setStepsData(state, data) {
        state.steps = data;
    },
    setError404Data(state, data) {
        state.error404 = data;
    }
};

export const actions = {};
