<template>
    <div class="wrapper">
        <svg width="1653" height="1104" viewBox="0 0 1653 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="test">
                <rect width="1653" height="1104" fill="#657DA2" />
                <path
                    id="model"
                    opacity="0.4"
                    d="M868.251 694.242C1024.97 644.983 1160.9 581.382 1253.98 518.362C1300.52 486.854 1336.37 455.475 1358.75 426.086C1381.11 396.71 1390.09 369.223 1382.65 345.559C1375.22 321.895 1352.13 304.487 1316.98 293.19C1281.81 281.888 1234.45 276.662 1178.26 277.443C1065.86 279.008 917.989 304.611 761.268 353.87C604.547 403.13 468.616 466.731 375.536 529.751C328.999 561.259 293.149 592.638 270.771 622.027C248.404 651.403 239.427 678.89 246.865 702.554C254.303 726.217 277.391 743.626 312.542 754.923C347.71 766.225 395.065 771.451 451.26 770.669C563.656 769.105 711.53 743.502 868.251 694.242Z"
                    stroke="transparent"
                />
                <path
                    v-for="planet in planets"
                    :id="`trail_${planet.id}`"
                    :key="`trail_${planet.id}`"
                    d="M553 491H220V103H553V491Z"
                    :fill="`url(#paint${planet.id}_radial)`"
                />
                <path
                    id="defonce"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1653 0H0V1104H1653V0ZM761.642 355.063C918.281 305.829 1066.03 280.255 1178.28 278.693C1234.4 277.912 1281.61 283.136 1316.59 294.38C1351.6 305.632 1374.21 322.85 1381.46 345.934C1388.72 369.018 1380.03 396.071 1357.75 425.329C1335.49 454.566 1299.76 485.857 1253.28 517.327C1160.33 580.262 1024.52 643.816 867.876 693.05C711.238 742.284 563.487 767.857 451.243 769.419C395.116 770.2 347.911 764.977 312.925 753.733C277.916 742.481 255.313 725.263 248.057 702.179C240.802 679.095 249.489 652.041 271.766 622.784C294.028 593.546 329.756 562.256 376.237 530.786C469.191 467.851 605.004 404.297 761.642 355.063ZM1382.89 345.484C1375.42 321.704 1352.23 304.258 1317.05 292.952C1281.85 281.638 1234.46 276.411 1178.26 277.194C1065.83 278.758 917.93 304.367 761.193 353.632C604.455 402.897 468.501 466.507 375.396 529.544C328.847 561.059 292.973 592.456 270.573 621.875C248.187 651.275 239.152 678.849 246.626 702.629C254.101 726.408 277.286 743.854 312.466 755.161C347.669 766.474 395.055 771.701 451.263 770.919C563.69 769.355 711.589 743.746 868.326 694.481C1025.06 645.216 1161.02 581.606 1254.12 518.569C1300.67 487.054 1336.55 455.657 1358.95 426.237C1381.33 396.837 1390.37 369.264 1382.89 345.484Z"
                    fill="#19232F"
                />
                <g v-for="planet in planets" :id="`circle_wrapper_${planet.id}`" :key="`circle_wrapper_${planet.id}`">
                    <circle :id="`circle_${planet.id}`" cx="876" cy="297" r="11" :fill="planet.color" />
                </g>

                <g v-for="planet in planets" :id="`circle_proxy_${planet.id}`" :key="`circle_proxy_${planet.id}`">
                    <circle :id="`circle_${planet.id}`" cx="876" cy="297" r="11" fill="transparent" />
                </g>

                <g v-for="planet in planets" :id="`border_wrapper_${planet.id}`" :key="`border_wrapper_${planet.id}`">
                    <path
                        :id="`border_${planet.id}`"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M220 257.75C198.323 257.75 180.75 275.323 180.75 297C180.75 318.677 198.323 336.25 220 336.25C241.677 336.25 259.25 318.677 259.25 297C259.25 275.323 241.677 257.75 220 257.75ZM179.25 297C179.25 274.494 197.494 256.25 220 256.25C242.506 256.25 260.75 274.494 260.75 297C260.75 319.506 242.506 337.75 220 337.75C197.494 337.75 179.25 319.506 179.25 297Z"
                        :fill="planet.color"
                    />
                </g>
            </g>
            <defs>
                <radialGradient
                    v-for="planet in planets"
                    :id="`paint${planet.id}_radial`"
                    :key="`paint${planet.id}_radial`"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(553 297) rotate(-180) scale(333 194)"
                >
                    <stop :stop-color="planet.color" />
                    <stop offset="1" :stop-color="planet.color" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

        <div class="buttons">
            <button
                v-for="link in links"
                :key="link.id"
                :style="{ color: link.color }"
                @mouseover="slowMo(link.id)"
                @mouseleave="resetSpeed(link.id)"
            >
                {{ link.name }}
            </button>
        </div>
    </div>
</template>
<script>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default {
    data: () => ({
        tweens: [],
        planetInFront: null,
        planets: [],
        links: [
            {
                id: '1',
                name: 'Ring Mission',
                color: '#F4F928'
            },
            {
                id: '2',
                name: 'Ring Altitude',
                color: '#90F5CA'
            },
            {
                id: '3',
                name: 'Ring Fundation',
                color: '#fff'
            }
        ]
    }),
    mounted() {
        this.planets = [...this.links];
        this.$nextTick(() => {
            this.initPlanets();
        });
    },
    methods: {
        initPlanets() {
            this.planets.forEach((planet, index) => {
                const star = [];
                const id = planet.id;
                gsap.set(`#border_${id}`, {
                    scale: 0.25,
                    opacity: 0
                });
                star[0] = gsap.to(`#circle_proxy_${id}`, {
                    motionPath: {
                        path: '#model',
                        align: '#model',
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                        start: 0 + 0.3 * index,
                        end: 1 + 0.3 * index
                    },
                    duration: 8,
                    repeat: -1,
                    ease: 'none',
                    onUpdate() {
                        const x = gsap.getProperty(this.targets()[0], 'x');
                        const y = gsap.getProperty(this.targets()[0], 'y');
                        gsap.set(`#circle_wrapper_${id}`, {
                            x,
                            y
                        });
                    }
                });
                star[1] = gsap.to(`#trail_${id}`, {
                    motionPath: {
                        path: '#model',
                        align: '#model',
                        alignOrigin: [1, 0.5],
                        autoRotate: true,
                        start: 0 + 0.3 * index,
                        end: 1 + 0.3 * index
                    },
                    duration: 8,
                    repeat: -1,
                    ease: 'none'
                });
                star[2] = gsap.to(`#border_wrapper_${id}`, {
                    motionPath: {
                        path: '#model',
                        align: '#model',
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                        start: 0 + 0.3 * index,
                        end: 1 + 0.3 * index
                    },
                    duration: 8,
                    repeat: -1,
                    ease: 'none'
                });
                this.tweens[id] = star;
            });
        },
        slowMo(id, index) {
            // const newArray = [...this.planets];

            const p = this.planets.splice(index, 1)[0];
            this.planets.push(p);

            const planet = this.tweens[id];

            gsap.killTweensOf([planet, `#border_${id}`, `#circle_${id}`]);
            gsap.to(planet, {
                duration: 1,
                timeScale: 0.2
            });
            gsap.to(`#circle_${id}`, {
                duration: 0.8,
                scale: 1.8,
                transformOrigin: '50% 50%'
            });
            gsap.to(`#border_${id}`, {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                transformOrigin: '50% 50%',
                delay: 0.2
            });
        },
        resetSpeed(id, index) {
            const planet = this.tweens[id];

            gsap.killTweensOf([planet, `#border_${id}`, `#circle_${id}`]);
            gsap.to(planet, {
                duration: 1,
                timeScale: 1
            });
            gsap.to(`#circle_${id}`, {
                duration: 1,
                scale: 1,
                transformOrigin: '50% 50%'
            });
            gsap.to(`#border_${id}`, {
                duration: 0.5,
                scale: 0.25,
                transformOrigin: '50% 50%',
                opacity: 0
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
    position: relative;
}
.buttons {
    position: absolute;
    top: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        // color: $titan;
        margin: 0 50px;
        font-size: 3rem;
        //     &:nth-child(2) {
        //         color: $saturn;
        //     }
        //     &:nth-child(3) {
        //         color: white;
        //     }
    }
}
</style>
