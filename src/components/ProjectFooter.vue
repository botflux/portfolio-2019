<template>
    <app-footer>
        <router-link :to="{ 'name': 'projects' }" class="link-action">Retour</router-link>
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

