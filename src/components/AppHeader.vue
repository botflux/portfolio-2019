<template>
    <header class="header">
        <menu-icon></menu-icon>
        <router-link :to="{ 'name': 'home' }" class="header__brand">Victor Mendele</router-link>
    </header>
</template>

<script>
import MenuIcon from './MenuIcon'

export default {
    name: 'AppHeader',
    components: {
        MenuIcon
    }
}
</script>


<style lang="scss">
    @import "../assets/styles/_mixins.scss";

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-left: var(--padding-overlay);
        padding-right: var(--padding-overlay);

        padding-top: var(--padding-overlay-vertical);

        z-index: 5;

        &__brand {
            text-decoration: none;
            color: var(--color-primary);

            @include font-monospace();
        }
    }
</style>


