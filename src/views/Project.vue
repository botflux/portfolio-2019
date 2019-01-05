<template>
    <section class="project" v-if="!$apollo.loading">
        <header class="project__header mb-1">
            <h2 class="heading heading--1 grid__column">Projets</h2>
            <h1 class="heading heading--3">{{ project.title }}</h1>
        </header>
        <p class="text mb-1">{{ project.description }}</p>
        <img :src="`http://localhost:8000/images/projects/${(project.filename !== undefined && project.filename !== null) ? project.filename : 'no.jpg'}`" :alt="project.title" class="project__img mb-1">
        <div class="project__body grid grid--gapped">
            <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
                <h2 class="heading--2 heading mb-2">Difficultés</h2>
                <p class="text">{{ project.difficulties }}</p>
            </div>
            <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
                <h2 class="heading heading--2 grid__column--4 mb-2">Équipe</h2>
                <p class="text">{{ project.team }}</p>
            </div>
            <div class="project__body__element grid__column--4 grid__column--8--sm grid__column--6--lg mb-1">
                <h2 class="heading heading--2 grid__column--4 mb-2">Mon rôle</h2>
                <p class="text">{{ project.role }}</p>
            </div>
        </div>
    </section>
    <pulse-loader color="#000000" v-else class="project__loader"></pulse-loader>
</template>

<script>
import gql from 'graphql-tag'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    data () {
        return {
            project: {}
        }
    },
    components: {
        PulseLoader
    },
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
    }
}
</script>


<style lang="scss">
    @import "../assets/styles/_functions.scss";
    
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

