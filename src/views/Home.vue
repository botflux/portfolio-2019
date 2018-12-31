<template>
  <div class="home">
    <p class="home__p mb-1">Hi, je m'appelle Victor Mendele et je suis</p>
    <h1 class="heading heading--1">Développeur Web & Software</h1>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="scss">
  .home {
    margin: auto 0;

    &__p {
      font-size: var(--h3-font-size);
    }
  }
</style>

