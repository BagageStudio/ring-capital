import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ({ app }, inject) {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ smooth: true });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    inject('lenis', lenis);
    inject('gsap', gsap);
}
