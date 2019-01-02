<template>
  <div id="app">
    <app-header class="app__header"></app-header>
    <app-navigation class="app__nav"></app-navigation>
    <main class="app__content">
      <aside class="app__content__side app__content__side--left">
        <router-view name="left-sidebar" />
      </aside>
      <router-view/>
      <aside class="app__content__side app__content__side--right">
        <router-view name="right-sidebar" />
      </aside>
    </main>
    <footer class="app__footer">
      <router-view name="footer" />
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNavigation from './components/AppNavigation'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavigation
  },
}
</script>


<style lang="scss">
  @import "./assets/styles/app.scss";
  @import "./assets/styles/_mixins.scss";

  html {
    font-size: 14px;
  }

  body {
    min-height: 100vh;
    margin: 0;

    background: var(--background);

    display: grid;
    box-sizing: border-box;

    @include font-primary();
  }



  h1,h2,h3,h4,h5,h6,p { margin: 0; }

  #app {
    margin: var(--margin-body);

    background: var(--foreground);

    position: relative;
  }

  .app {
    &__header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &__content {

      display: grid;
      grid-template-columns: var(--side-gutter) 1fr var(--side-gutter);
      margin: 60px 0;

      min-height: calc(100vh - 120px - var(--margin-body) * 2);
    }

    &__nav {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;

      background: var(--foreground);

      z-index: 4;
    }
  }

  .heading {
    font-weight: 700;
    color: var(--text-primary);

    &--1 {
      font-size: var(--h1-font-size);
    }

    &--2 {
      font-size: var(--h2-font-size);
    }

    &--3 {
      font-size: var(--h3-font-size);
    }

    &--4 {
      font-size: var(--h4-font-size);
    }
  }

  .text {
    line-height: 1.7rem;
    text-align: justify;
    letter-spacing: .02rem;
  }

  .mb {
    &-1 {
      margin-bottom: var(--margin-1);
    }
    &-2 {
      margin-bottom: var(--margin-2);
    }
    &-3 {
      margin-bottom: var(--margin-3);
    }
  }

  .link-action {
    @include font-monospace();
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    color: var(--text-primary);
    display: flex;
    margin-right: auto;

    &::after {
      content: " ";
      margin: auto 8px;
      background: var(--text-primary);
      height: 1px;
      width: 100px;
    }
    
    &--reverse {
      flex-direction: row-reverse;
      margin-right: 0;
      margin-left: auto;
    }
  }

  [role="button"] {
    cursor: pointer;
  }

  [aria-hidden="true"] {
    display: none;
  }

  @media screen and (min-width: get-breakpoint(sm)) {
    html {
      font-size: 16px !important;
    }

    .heading--stripped {
      display: flex;

      &::after {
        content: " ";
        width: 30%;
        background: rgba(0,0,0,0.87);
        margin: auto 0;
        margin-left: 16px;
        height: 2px;
      }
    }
  }

  @media screen and (min-width: get-breakpoint(lg)) {
    .heading--stripped {
      flex-direction: column;

      &::after {
        width: 100%;
        margin: 0;
        margin-top: 16px;
      }
    }
  }
</style>
