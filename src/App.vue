<template>
  <div id="app">
    <header class="app__header">
      <router-link to="/">Hello world</router-link>
    </header>
    <main class="app__content">
      <aside class="app__content__side app__content__side--left">
        <router-view name="left-sidebar" />
      </aside>
      <router-view/>
      <aside class="app__content__side app__content__side--right">
        <router-view name="right-sidebar" />
      </aside>
    </main>
    <footer class="app__footer">Je suis le footer</footer>
  </div>
</template>

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
      margin: 50px 0;

      &__side {
        &--left {

        }

        &--right {

        }
      }
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
</style>
