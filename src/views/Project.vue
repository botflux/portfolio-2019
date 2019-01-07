<template>
    <section class="project" v-if="!$apollo.loading" v-html="project.body">
    </section>
    <pulse-loader color="#000000" v-else class="project__loader"></pulse-loader>
</template>

<script>
//import gql from 'graphql-tag'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import api from '../api/projects.js'

export default {
    mounted () {
        this.project = api.getProject(this.$route.params.id)
    },
    data () {
        return {
            project: {}
        }
    },
    components: {
        PulseLoader
    },/*
    apollo: {
        project: {
            query: gql`
            query getProject($id: ID!) {
                    project(id: $id) {
                        title
                        filename
                        difficulties
                        role
                        team
                        description
                    }
                }
            `,
            variables() {
                return {
                    id: `/api/projects/${this.$route.params.id}`
                }
            }
        }
    }*/
}
</script>


<style lang="scss">
    @import "../assets/styles/_functions.scss";
    .hashtag {
        color: rgba(0,0,0,.4);
    }

    .project {
        &__img {
            width: 100%;
            height: 350px;
            object-fit: cover;
        }

        &__body {
            grid-column-gap: 64px;
        }

        &__loader {
            margin: auto;
        }
    }

    @media screen and (min-width: get-breakpoint(sm)) {
        .project {
            &__img {
                height: 450px;
            }
        }
    }

    @media screen and (min-width: get-breakpoint(lg)) {
        .project {
            &__img {
                height: 550px;
            }
        }
    }
</style>

