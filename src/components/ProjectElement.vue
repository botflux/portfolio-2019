<template>
    <article class="project__element grid grid--gapped" ref="project">
        <img :src="filename" :alt="title" class="project__element__img mb-2 grid__column--4 grid__column--8--sm grid__column--4--md grid__column--6--lg">
        <div class="project__element__body grid__column--4 grid__column--8--sm grid__column--4--md grid__column--6--lg">
            <h2 class="heading heading--3 mb-2">{{ title }}</h2>
            <p class="text mb-1">{{ description }}</p>
            <router-link :to="{ name: 'project', params: { id: _id } }" class="link">En savoir plus</router-link>
        </div>
    </article>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
    mounted () {
        const { project } = this.$refs
        this.timeline = new TimelineMax({paused: true})
        this.timeline.fromTo (project, .3, { opacity: 0 }, { opacity: 1})
        this.timeline.play()
    },
    data () {
        return {
            timeline: {}
        }
    },
    props: {
        id: String,
        filename: String,
        title: String,
        description: String,
        _id: Number
    }
}
</script>

<style lang="scss">
    @import "../assets/styles/_functions.scss";
    @import "../assets/styles/_mixins.scss";

    .link {
        @include font-monospace();
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        color: var(--text-primary);
    }

    .project__element {
        margin-top: var(--margin-2);
        margin-bottom: var(--margin-2);
        &__img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }

    @media screen and (min-width: get-breakpoint(md)) {
        .project__element {
            grid-auto-flow: column;
            &__img {
                height: 500px;
            }

            &__body {
                margin: auto 0;
            }
        }
    }
</style>
