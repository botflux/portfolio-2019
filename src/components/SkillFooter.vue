<template>
    <app-footer>
        <router-link :to="{ 'name': 'about' }" class="link-action">A propos</router-link>
        <router-link :to="{ 'name': 'projects' }" class="link-action link-action--reverse">Projets</router-link>
    </app-footer>
</template>

<script>
import AppFooter from './AppFooter'
export default {
    components: {
        AppFooter
    }
}
</script>

