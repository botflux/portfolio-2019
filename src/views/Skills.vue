<template>
    <section class="skill">
        <header class="mb-1">
            <h1 class="heading heading--1">Compétences</h1>
        </header>
        <div class="skill__body grid grid--gapped">
            <div class="grid__column--4 grid__column--4--sm grid__column--4--lg">
                <h2 class="skill__title mb-2">FRONT-END</h2>
                <ul class="skill__list">
                    <li class="skill__list__element">HTML</li>
                    <li class="skill__list__element">CSS</li>
                    <li class="skill__list__element">Javascript</li>
                    <li class="skill__list__element">Vue</li>
                    <li class="skill__list__element">Webpack</li>
                    <li class="skill__list__element">SASS</li>
                </ul>
            </div>
            <div class="grid__column--4 grid__column--4--sm grid__column--4--lg">
                <h2 class="skill__title mb-2">BACK-END</h2>
                <ul class="skill__list">
                    <li class="skill__list__element">PHP</li>
                    <li class="skill__list__element">Node.js</li>
                    <li class="skill__list__element">Symfony 4</li>
                    <li class="skill__list__element">MySQL</li>
                    <li class="skill__list__element">GraphQL</li>
                </ul>
            </div>
            <div class="grid__column--4 grid__column--4--sm grid__column--4--lg">
                <h2 class="skill__title mb-2">SOFTWARE</h2>
                <ul class="skill__list">
                    <li class="skill__list__element">C#</li>
                    <li class="skill__list__element">C++</li>
                    <li class="skill__list__element">Unity</li>
                    <li class="skill__list__element">Java</li>
                    <li class="skill__list__element">Android SDK</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .skill {
        width: 100%;

        &__list {
            display: grid;
            grid-gap: 10px;
            margin: 0;
            padding: 0;

            &__element {
                list-style-type: none;
            }
        }

        &__title {
            font-size: 2rem;
            font-weight: 400;
        }
    }
</style>

