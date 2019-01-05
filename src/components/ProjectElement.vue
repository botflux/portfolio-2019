<template>
    <article class="project__element grid grid--gapped">
        <img :src="filename" :alt="title" class="project__element__img mb-2 grid__column--4 grid__column--8--sm grid__column--4--md grid__column--6--lg">
        <div class="project__element__body grid__column--4 grid__column--8--sm grid__column--4--md grid__column--6--lg">
            <h2 class="heading heading--3 mb-2">{{ title }}</h2>
            <p class="text">{{ description }}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        id: String,
        filename: String,
        title: String,
        description: String
    }
}
</script>

<style lang="scss">
    @import "../assets/styles/_functions.scss";
    
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
