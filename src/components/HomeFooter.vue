<template>
    <app-footer>
        <router-link :to="{ 'name': 'about' }" class="link-action">Projets</router-link>
        <router-link :to="{ 'name': 'about' }" class="link-action link-action--reverse">A propos</router-link>
    </app-footer>
</template>

<script>
import AppFooter from './AppFooter'

export default {
    name: 'HomeFooter',
    components: {
        AppFooter
    }
}
</script>

