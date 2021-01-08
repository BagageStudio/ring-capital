<template>
    <div class="menu-item">
        <span class="label">{{ data.title }}</span>
        <div class="menu-item-content">
            <div v-for="submenu in data.submenus" :key="submenu.id" class="menu-submenu">
                <span v-if="submenu.title" class="submenu-title"> - {{ submenu.title }} </span>
                <div class="submenu-links">
                    <div v-for="link in submenu.links" :key="link.label" class="submenu-link">--- {{ link.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
};
</script>
