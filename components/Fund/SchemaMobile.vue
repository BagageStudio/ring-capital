<template>
    <div class="fund-schema">
        <component :is="fundLogo" class="fund-logo" />
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 128">
            <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M351.288 73.1066c2.508 14.4392-3.756 31.2854-17.607 49.5124-1.354 1.782-2.78 3.576-4.276 5.381h1.198c16.54-20.142 24.441-39.0407 21.633-55.2125-10.338-59.5294-161.88-59.5713-338.4772-.0935A1072.5432 1072.5432 0 000 77.4319v1.0456a1072.9867 1072.9867 0 0113.9299-4.7983C102.157 43.9644 184.087 29.1318 245.215 29.1487c30.57.0085 55.881 3.7309 74.166 11.1223 18.3 7.3976 29.4 18.3965 31.907 32.8356zM0 83.5013a963.0428 963.0428 0 0114.7503-5.101C92.0863 52.3536 163.851 39.0844 217.349 38.6646c26.755-.2099 48.885 2.7947 64.848 8.9819 15.983 6.1947 25.606 15.503 27.735 27.7625 2.13 12.2595-3.376 26.663-15.56 42.344-2.617 3.369-5.536 6.788-8.743 10.247h1.262c17.826-19.425 26.641-37.6389 23.989-52.9102C302.048 24.234 169.39 25.275 14.5792 77.415A965.3625 965.3625 0 00.0001 82.4552v1.0461zm0 5.909a833.5733 833.5733 0 0115.7133-5.4671C80.6293 62.0796 140.818 50.6814 185.641 49.9064c22.417-.3876 40.935 1.8834 54.267 6.792 13.356 4.9176 21.314 12.4025 23.03 22.2846 1.716 9.8821-2.906 21.604-13.173 34.478-3.773 4.731-8.288 9.591-13.49 14.539h1.349c18.957-18.238 28.688-35.3621 26.261-49.3362-7.189-41.4009-118.376-39.4783-248.3428 4.2941A835.0404 835.0404 0 000 88.3634v1.0469z"
                fill="#657DA2"
            />
            <path d="M219.5 28.9156c35.896-2.151 66.321.0213 89 6.5163" stroke="url(#paint0_linear)" />
            <path
                d="M295.924 53.5c8.286 5.6729 13.442 12.8681 14.957 21.5897 2.156 12.4178-3.27 26.7813-14.957 42.1593"
                stroke="url(#paint1_linear)"
            />
            <path
                d="M262.235 94c1.89-5.4253 2.479-10.5644 1.65-15.3362-3.342-19.2455-29.157-29.1291-68.885-29.7989"
                stroke="url(#paint2_linear)"
            />
            <circle r="4.5" transform="scale(1 -1) rotate(45 245.0886 269.5182)" :fill="color" />
            <circle r="4.5" transform="scale(1 -1) rotate(45 212.0974 329.8526)" :fill="color" />
            <circle r="4.5" transform="scale(1 -1) rotate(45 145.1268 250.1125)" :fill="color" />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="220.707"
                    y1="29.038"
                    x2="249.07"
                    y2="-8.20908"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear"
                    x1="297.41"
                    y1="54.9763"
                    x2="280.357"
                    y2="108.005"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear"
                    x1="262.952"
                    y1="94.4989"
                    x2="201.315"
                    y2="83.7603"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop :stop-color="color" />
                    <stop offset="1" :stop-color="color" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    },
    computed: {
        fundLogo() {
            const mapping = {
                'ring-altitude': 'FundLogoAltitude',
                'ring-mission': 'FundLogoMission',
                'ring-foundation': 'FundLogoFoundation'
            };
            return mapping[this.logo];
        }
    }
};
</script>
<style lang="scss" scoped>
.fund-logo {
    position: absolute;
    top: 0;
    left: 15px;
    width: 34%;
}
</style>
