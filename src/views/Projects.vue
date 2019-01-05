<template>
    <div class="projects grid grid--gapped grid__column--4 grid__column--8--sm grid__column--12--lg">
        <h1 class="heading heading--1 heading--stripped grid__column--4 grid__column--8--sm grid__column--4--lg mb-1">Projets</h1>
        <section class="grid grid__column--4 grid__column--8--sm grid__column--12--lg">
            <project-element class="grid__column--4 grid__column--8--sm grid__column--12--lg mb-1" v-for="project in projects.edges" :key="project.node.id" :id="project.node.id" :title="project.node.title" :description="project.node.description" :filename="getProjectImage(project.node.filename)" :_id="project.node._id"></project-element>
        </section>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import ProjectElement from '../components/ProjectElement'

export default {
    components: {
        ProjectElement
    },
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
    },
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
    }
</style>
