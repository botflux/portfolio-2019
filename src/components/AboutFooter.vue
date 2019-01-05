<template>
    <app-footer>
        <router-link :to="{ 'name': 'projects' }" class="link-action">Projets</router-link>
        <router-link :to="{ 'name': 'home' }" class="link-action link-action--reverse">Compétences</router-link>
    </app-footer>
</template>

<script>
import AppFooter from './AppFooter'

export default {
    name: 'AboutFooter',
    components: {
        AppFooter
    }
}
</script>

