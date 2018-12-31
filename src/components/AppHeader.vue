<template>
    <header class="header">
        <img src="../assets/img/menu.svg" alt="Menu icon">
        <router-link :to="{ 'name': 'home' }" class="header__brand">Victor Mendele</router-link>
    </header>
</template>

<style lang="scss">
    @import "../assets/styles/_mixins.scss";

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-left: var(--padding-overlay);
        padding-right: var(--padding-overlay);

        padding-top: var(--padding-overlay-vertical);

        &__brand {
            text-decoration: none;
            color: var(--color-primary);

            @include font-monospace();
        }
    }


</style>


