<template>
  <div class="home">
    <p class="home__p mb-1">Hi, je m'appelle Victor Mendele et je suis</p>
    <h1 class="heading heading--1 mb-2">Développeur Web & Software</h1>
    <div>
      <a href="https://www.pinterest.fr/mendelevictor/" rel="noopener" target="_blank">
        <font-awesome-icon :icon="['fab', 'pinterest']" class="nav__icon"></font-awesome-icon>
      </a>
      
      <a href="https://codepen.io/botflux/" rel="noopener" target="_blank">
        <font-awesome-icon :icon="['fab', 'codepen']" class="nav__icon"></font-awesome-icon>
      </a>
      
      <a href="https://github.com/botflux" rel="noopener" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="nav__icon"></font-awesome-icon>
      </a>
      
      <a href="https://www.linkedin.com/in/victor-mendele-698517154/" rel="noopener" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="nav__icon"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '../components/FontAwesomeIcon'
export default {
  name: 'home',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">
  .home {
    &__p {
      font-size: var(--h3-font-size);
      color: var(--text-secondary);
    }
  }
</style>

