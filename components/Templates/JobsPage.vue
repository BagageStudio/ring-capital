<template>
    <div class="wrapper-jobs">
        <div class="hero-jobs">
            <div class="container">
                <div class="hero-text">
                    <h1 class="basic-h1 underlined strong-saturn content-pad" v-html="data.title"></h1>
                    <p v-if="data.subtitle" class="basic-subtitle content-pad">{{ data.subtitle }}</p>
                </div>
                <div class="hero-schema">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 461">
                        <path
                            opacity=".4"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M385.849 1.448C226.75 93.808 92.133 197.078.322 291.861l-.664-.722C91.551 196.272 226.25 92.946 385.408.552l.441.896Zm215.072 395.099C824.142 269.889 1001.81 120.744 1085.23.707l.77.587c-83.54 120.225-261.365 269.462-484.646 396.155-40.805 23.153-81.307 44.52-121.099 64.016l-.38-.93c39.775-19.487 80.259-40.845 121.046-63.988ZM.276 145.449C62.616 97.016 130.824 48.631 203.824 1.436l-.483-.872C130.318 47.774 62.086 96.176-.279 144.63l.555.82ZM1267.46.659c-79.6 91.447-190.45 190.518-323.727 287.867-17.804 13.005-45.674 32.378-69.096 48.503a8848.266 8848.266 0 0 1-39.06 26.732l-2.469 1.679-.642.436-.163.111-.041.028-.003.002-.003.002-.005.003-.002.002-.005.002-.046.03-.186.118-.729.465-1.249.794-1.581 1.006c-2.471 1.57-6.074 3.858-10.608 6.728a9147.813 9147.813 0 0 1-36.732 23.129c-29.755 18.639-67.871 42.273-101.318 62.259l.452.89c33.456-19.991 71.579-43.629 101.337-62.27a9129.651 9129.651 0 0 0 47.345-29.861l2.83-1.8.73-.465.185-.118.047-.03.012-.007.003-.002c.001-.001.001-.001-.238-.438l.252.429.003-.002.01-.007.041-.028.164-.111.642-.437 2.469-1.678a8972.559 8972.559 0 0 0 39.065-26.736c23.421-16.124 51.302-35.505 69.12-48.52C1077.58 191.984 1188.5 92.861 1268.16 1.34l-.7-.68ZM832.498 366.455l.239.437.006-.004.006-.004-.251-.429ZM.253 21.153A3862.139 3862.139 0 0 1 28.75 1.487L28.246.63A3861.858 3861.858 0 0 0-.258 20.3l.511.853ZM1439.66 2.965c-141.63 148.104-340.67 307.938-576.4 457.554l.475.876C1099.51 311.747 1298.63 151.861 1440.33 3.682l-.67-.717Z"
                            fill="#657DA2"
                        />
                        <path d="M1016.5 86c-60.5 62.5-120 110.5-120 110.5" stroke="url(#a)" />
                        <path d="M831.5 367.5C872.667 339.667 956 282 962 276" stroke="url(#b)" />
                        <circle
                            cx="1017.74"
                            cy="83.745"
                            r="7.5"
                            transform="rotate(1.903 1017.74 83.745)"
                            fill="#F4F928"
                        />
                        <circle cx="831.5" cy="368.5" r="7.5" transform="rotate(-180 831.5 368.5)" fill="#90F5CA" />
                        <circle cx="1130.5" cy="276.5" r="7.5" transform="rotate(-180 1130.5 276.5)" fill="#fff" />
                        <path d="M1129.5 277c-50 38.5-132.5 96-132.5 96" stroke="url(#c)" />
                        <defs>
                            <linearGradient
                                id="a"
                                x1="1017"
                                y1="83.5"
                                x2="877.371"
                                y2="128.635"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F4F928" />
                                <stop offset="1" stop-color="#F4F928" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="b"
                                x1="832.134"
                                y1="366.978"
                                x2="821.61"
                                y2="307.088"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#90F5CA" />
                                <stop offset="1" stop-color="#90F5CA" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="c"
                                x1="1130"
                                y1="277"
                                x2="1002.83"
                                y2="269.813"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#fff" />
                                <stop offset="1" stop-color="#fff" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="jobs-container">
            <div class="container">
                <div class="filters content-pad">
                    <div class="selects">
                        <div class="select">
                            <select v-model="currentCompany" name="currentCompany">
                                <option value="all">All Companies</option>
                                <option v-for="company in companies" :key="company">{{ company }}</option>
                            </select>
                        </div>
                        <div class="select">
                            <select v-model="currentContractType" name="currentContractType">
                                <option value="all">All Contract Types</option>
                                <option v-for="contractType in contractTypes" :key="contractType">
                                    {{ contractType }}
                                </option>
                            </select>
                        </div>
                        <div class="select">
                            <select v-model="currentDepartment" name="currentDepartment">
                                <option value="all">All Departments</option>
                                <option v-for="department in departments" :key="department">{{ department }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="job-count">
                        {{ jobCount }}
                    </div>
                </div>
                <div class="jobs">
                    <a
                        v-for="job in filteredJobs.slice(0, 9 * loadMoreCount)"
                        :key="job.id"
                        :href="job.websites_urls.find(url => url.website_reference === 'wttj_fr').url"
                        class="job content-pad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="job-img">
                            <FastImage class="bg-img" :image="job.image" cover />
                            <span class="job-logo">
                                <span class="wrapper-img">
                                    <FastImage :image="job.logo" />
                                </span>
                            </span>
                        </div>
                        <div class="content">
                            <h4 class="basic-h4 orbit">{{ job.name }}</h4>
                            <div class="infos">
                                <div class="tags">
                                    <span class="tag">{{ job.contract_type.en }}</span>
                                    <span v-if="job.department" class="tag">{{ job.department.name }}</span>
                                </div>
                                <div class="location">
                                    <span class="neptune">Location</span>
                                    <span class="city">{{ job.office.city }}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div v-if="9 * loadMoreCount < filteredJobs.length" class="load-more content-pad">
                    <button class="btn-block secondary" @click="loadMoreCount++">
                        <span class="deco"></span>
                        <span>Load more</span>
                    </button>
                </div>
                <div v-if="!jobs.length" class="content-pad no-results">
                    <span>0 jobs opportunities at the moment</span>
                </div>
                <div v-if="!filteredJobs.length && jobs.length" class="content-pad no-results">
                    <span
                        >0 jobs opportunities matching your research :
                        {{
                            [currentCompany, currentContractType, currentDepartment]
                                .filter(el => el !== 'all')
                                .map(el => `"${el}"`)
                                .join(', ')
                        }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    data: () => ({
        jobs: [],
        currentCompany: 'all',
        currentContractType: 'all',
        currentDepartment: 'all',
        loadMoreCount: 1
    }),
    computed: {
        companies() {
            return [...new Set(this.data.jobs.map(j => j.companyName.trim()))];
        },
        contractTypes() {
            return [...new Set(this.data.jobs.map(j => j.contract_type.en))];
        },
        departments() {
            return [...new Set(this.data.jobs.filter(j => j.department).map(j => j.department.name))];
        },
        filteredJobs() {
            if (
                this.currentCompany === 'all' &&
                this.currentContractType === 'all' &&
                this.currentDepartment === 'all'
            ) {
                return this.jobs;
            } else {
                return this.jobs.filter(job => {
                    return (
                        (this.currentCompany === 'all' || job.companyName.trim() === this.currentCompany) &&
                        (this.currentContractType === 'all' || job.contract_type.en === this.currentContractType) &&
                        (this.currentDepartment === 'all' ||
                            (job.department && job.department.name.includes(this.currentDepartment)))
                    );
                });
            }
        },
        jobCount() {
            const count = this.filteredJobs.length;
            return count + ` job${count !== 1 ? 's' : ''}`;
        }
    },
    mounted() {
        this.jobs = this.data.jobs.sort(() => 0.5 - Math.random());
    }
};
</script>

<style lang="scss" scoped>
.hero-jobs {
    padding-top: 10px;
    padding-bottom: 70px;
    background-color: $black;
}

.jobs-container {
    color: $orbit;
    background-color: $white;
    padding-bottom: 70px;
}

.filters {
    padding-top: 32px;
    margin-bottom: 50px;
}

.hero-schema {
    display: none;
}

.select {
    position: relative;
    width: 100%;
    margin-top: 30px;
    color: $neptune;
    select {
        width: 100%;
        padding-bottom: 15px;
        border: 0;
        border-bottom: 1px solid $neptune;
        line-height: 26px;
        color: currentColor;
        appearance: none;
        transition: color 0.2s ease-out;
    }
    &::before {
        content: '';
        position: absolute;
        top: 8px;
        right: 1px;
        width: 6px;
        height: 6px;
        border-right: 1px solid currentColor;
        border-bottom: 1px solid currentColor;
        transform: rotate(45deg);
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: $black;
        transform-origin: 50% 50%;
        transform: scaleX(0);
        transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease-in-out;
    }
    &:first-child {
        margin-top: 0;
    }
    &:hover,
    &:focus {
        select {
            color: $black;
        }
        &::after {
            transform: scaleX(1);
        }
    }
}

.job-count {
    margin-top: 50px;
    font-size: 2.2rem;
    line-height: 26px;
}

.job-img {
    position: relative;
    overflow: hidden;
    height: 220px;
    width: 100%;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba($orbit, 0.85);
    }
    .bg-img {
        height: 100%;
        width: 100%;
        transform: scale(1.002);
        transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }
}

.job-logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .wrapper-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 157px;
        max-width: 80%;
        height: 100px;
    }
}

.job {
    position: relative;
    margin-bottom: 50px;
    padding-bottom: 50px;
    text-decoration: none;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: $gutter;
        right: $gutter;
        height: 1px;
        background-color: rgba($neptune, 0.4);
    }
    &::after {
        content: '';
        position: absolute;
        height: 1px;
        left: $gutter;
        right: $gutter;
        bottom: 0;
        background-color: $orbit;
        transform: scaleX(0);
        opacity: 0;
        transform-origin: 50% 0%;
        transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease-in-out 0.2s;
    }
    .basic-h4 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    &:hover,
    &:focus {
        .job-img .bg-img {
            transform: scale(1.05);
        }
        &::after {
            opacity: 1;
            transform: scaleX(1);
            transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.2s ease-in-out;
        }
    }
}

.tags {
    display: flex;
}

.tag {
    display: inline-block;
    padding: 3px 10px;
    margin-right: 10px;
    font-family: $space;
    background-color: #e9eef5;
    line-height: 24px;
    font-size: 1.6rem;
}

.location {
    display: flex;
    margin-top: 10px;
    font-family: $space;
    font-size: 1.6rem;
    line-height: 24px;
    .city {
        margin-left: 10px;
    }
}

.load-more {
    width: 100%;
    text-align: center;
}

.no-results {
    margin-top: 150px;
    margin-bottom: 175px;
    text-align: center;
    font-size: 2.6rem;
    line-height: 30px;
}

@media (min-width: $phone) {
    .selects {
        display: flex;
        justify-content: space-between;
    }
    .select {
        flex: 0 0 30%;
        width: 30%;
        margin-top: 0;
    }
}

@media (min-width: $tablet) {
    .hero-jobs {
        padding-top: 110px;
        padding-bottom: 110px;
    }
    .jobs {
        display: flex;
        flex-wrap: wrap;
    }
    .job {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 1 auto;
    }
    .job-img {
        flex: 0 0 auto;
    }
}

@media (min-width: $desktop-small) {
    .hero-jobs {
        position: relative;
        overflow: hidden;
        padding-bottom: 190px;
    }

    .hero-text {
        position: relative;
        z-index: 1;
        &::after {
            content: '';
            position: absolute;
            top: -25px;
            bottom: -25px;
            left: -25px;
            right: -25px;
            background-color: $black;
            z-index: -1;
        }
    }

    .hero-schema {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        svg {
            height: 100%;
            max-width: none;
        }
    }
    .job {
        width: 33.33%;
        margin-bottom: 100px;
    }
    .filters {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        padding-top: 80px;
        margin-bottom: 70px;
    }
    .job-count {
        margin-top: 0;
    }
    .selects {
        flex: 1 1 auto;
        justify-content: flex-end;
    }

    .select {
        max-width: 190px;
        margin-left: 70px;
    }
}

@media (min-width: $desktop) {
    .hero-text {
        width: 50%;
    }
    .hero-schema {
        svg {
            width: 100%;
            height: auto;
        }
    }
}
</style>
