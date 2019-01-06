<template>
    <div class="projects grid grid--gapped grid__column--4 grid__column--8--sm grid__column--12--lg">
        <h1 class="heading heading--1 heading--stripped grid__column--4 grid__column--8--sm grid__column--4--lg mb-1">Projets</h1>
        <pulse-loader class="projects__loader grid__column--4 grid__column--8--sm grid__column--12--lg" color="#000000" v-if="$apollo.loading" ></pulse-loader>
        <section class="grid grid__column--4 grid__column--8--sm grid__column--12--lg" v-show="!$apollo.loading">
            <project-element class="grid__column--4 grid__column--8--sm grid__column--12--lg mb-1" v-for="project in projects" :key="project.id" :id="project.id" :title="project.title" :description="project.description" :filename="project.filename"></project-element>
        </section>
    </div>
</template>

<script>
//import gql from 'graphql-tag'
import ProjectElement from '../components/ProjectElement'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import api from '../api/projects.js'

export default {
    mounted () {
        this.projects = api.getProjects()
    },
    components: {
        ProjectElement,
        PulseLoader
    },
    /*
    apollo: {
        projects: gql`
            query {
                projects {
                edges {
                    node {
                        id
                        filename
                        title
                        description
                        _id
                    }
                }
            }
        }
        `
    },*/
    data () {
        return {
            projects: {}
        }
    },
    methods: {
        getProjectImage (filename) {
            const path = `http://localhost:8000/images/projects/`
            if (filename === undefined || filename === null) {
                return `${path}no.jpg`
            }

            return `${path}${filename}`
        }
    }
}
</script>


<style lang="scss">
    .projects {
        width: 100%;

        &__loader {
            margin: 0 auto;
        }
    }
</style>
