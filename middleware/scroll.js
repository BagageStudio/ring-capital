export default function (context) {
    if (process.client) {
        if (context.route.path !== context.from.path) {
            // Maybe we'll need this later
            // context.$lenis.scrollTo(0, { offset: 0, duration: 0, easing: () => {}, immediate: true });
            // window.scrollTo(0, 0);
        }
    }
}
