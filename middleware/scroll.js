export default function (context) {
    if (process.client) {
        if (context.to.path !== context.from.path) {
            this.lenis.scrollTo(0, { offset: 0, duration: 0, easing: () => {}, immediate: true });
            window.scrollTo(0, 0);
        }
    }
}
