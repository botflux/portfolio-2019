<template>
    <footer class="footer">
        <slot></slot>
    </footer>
</template>

<style lang="scss">
    .footer {
        display: flex;
        padding-left: var(--padding-overlay);
        padding-right: var(--padding-overlay);

        padding-bottom: var(--padding-overlay);

        flex-wrap: wrap;
    }
</style>


