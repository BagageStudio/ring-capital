<template>
    <!-- <div class="crew-member" :class="{ 'has-bio': content.bio }"> -->
    <component
        :is="content.link && !content.bio ? 'LinkTo' : 'div'"
        :link="content.link"
        :hide-label="true"
        class="crew-member"
        :class="{ 'has-bio': content.bio, 'has-link': content.link }"
    >
        <div class="crew-member-content" @click="showModal = true">
            <span class="crew-member-img">
                <FastImage v-if="content.image" class="bg-img" :image="content.image" cover />
                <span v-if="content.link || content.bio" class="pin-over">
                    <Icon :name="content.bio ? 'modal' : 'linkedin'" />
                    <span class="bg"></span>
                </span>
            </span>
            <span class="crew-member-txt">
                <span class="crew-member-title">{{ content.name }}</span>
                <span v-if="content.description" class="crew-member-description">
                    {{ content.description }}
                </span>
            </span>
        </div>

        <div v-if="showModal && content.bio" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn-close" type="button" @click="showModal = false">
                        <span></span><span></span>
                    </button>
                </div>
                <div v-if="content.bio" class="crew-member-bio" v-html="content.bio" />
                <LinkTo v-if="content.link" :link="content.link" :hide-label="true" class="linkedin-pin">
                    <Icon name="linkedin" />
                    <span class="bg"></span>
                </LinkTo>
            </div>
        </div>
    </component>
    <!-- </div> -->
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true }
    },
    data: () => ({
        showModal: false
    })
};
</script>

<style lang="scss" scoped>
.crew-member {
    &.has-bio,
    &.has-link {
        .crew-member-content {
            display: flex;
            align-items: center;
            text-decoration: none;
            &:hover {
                .crew-member-img {
                    .bg-img {
                        transform: scale(1.05);
                    }
                    .pin-over {
                        .bg {
                            &::before {
                                clip-path: ellipse(80% 130% at 50% 100%);
                            }
                        }
                    }
                }
            }
        }
    }
    &.has-bio {
        .crew-member-content {
            cursor: pointer;
        }
    }
    text-decoration: none;
}
.crew-member-content {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.linkedin-pin {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: $orbit;
    fill: $white;
    z-index: 1;
    .bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: $neptune;
            clip-path: ellipse(50% 0% at 50% 100%);
            transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.05s;
        }
    }
    .icon {
        position: relative;
        width: 14px;
        height: 14px;
    }
    &:hover {
        .bg::before {
            clip-path: ellipse(80% 130% at 50% 100%);
        }
    }
}
.crew-member-img {
    flex: 0 0 auto;
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(1.002);
        transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }
    .pin-over {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 10px;
        width: 28px;
        height: 28px;
        background-color: $orbit;
        fill: $white;
        z-index: 1;
        .bg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
            &::before {
                content: '';
                position: absolute;
                z-index: -1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: $neptune;
                clip-path: ellipse(50% 0% at 50% 100%);
                transition: clip-path 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0.05s;
            }
        }
        .icon {
            position: relative;
            width: 12px;
            height: 12px;
        }
    }
}
.crew-member-txt {
    position: relative;
    padding: 0 30px;
    > span {
        display: block;
    }
    .crew-member-title {
        line-height: 19px;
    }
    .crew-member-description {
        font-size: 1.4rem;
        line-height: 18px;
        margin-top: 3px;
        color: $neptune;
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($orbit, 0.85);
    z-index: 10;
}
.modal-content {
    width: 500px;
    max-width: 80%;
    max-height: 100vh;
    padding: 30px;
    border-radius: 20px;
    color: $black;
    background: $white;
    overflow: auto;
}
.modal-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}
.btn-close {
    position: relative;
    width: 22px;
    height: 22px;
    border: 0;
    &:hover {
        opacity: 0.9;
    }
    span {
        display: block;
        position: absolute;
        left: 0;
        transform-origin: 0% 50%;
        width: 30px;
        height: 1px;
        background: $orbit;
        &:first-child {
            top: 0;
            transform: rotate(45deg);
        }
        &:last-child {
            bottom: 0;
            transform: rotate(-45deg);
        }
    }
}
.crew-member-bio {
    margin-bottom: 20px;
    padding-bottom: 20px;
    font-size: 1.4rem;
    line-height: 18px;
    border-bottom: 1px solid $neptune;
    color: $neptune;
}

@media (min-width: $phone) {
    .crew-member-txt {
        padding: 0 15px;
    }
}
@media (min-width: $desktop-small) {
    .crew-member-txt {
        padding: 0 30px;
    }
}
@media (min-width: $desktop-large) {
    .crew-member-txt {
        padding: 0 15px;
    }
}
@media (min-width: $desktop-xxl) {
    .crew-member-txt {
        padding: 0 30px;
    }
}
</style>
