<template>
  <div class="about grid grid--gapped grid--centered">
    <h1 class="heading heading--1 grid__column--4 grid__column--8--sm grid__column--4--lg mb-1 heading--stripped">A propos</h1>
    <section class="about__body grid__column--4 grid__column--8--sm grid__column--7--lg">
      <p class="text mb-2">Je suis actuellement étudiant en licence professionnelle Développeur Web / Designer Web à l'IUT de Mulhouse. J'ai commencé le développement en m'intéressant au développement logiciel et plus particulièrement le développement de jeux. Cette passion s'est ensuite développé pour atteindre le développement Web.</p>
      <p class="text mb-2">Cette formation et ma curiosité naturelle me pousse également a essayé de comprendre comment les outils que j'utilise fonctionnent en arrière-plan afin de proposé le meilleur service possible.</p>
      <p class="text">Lors ce que je développe une application, tous les aspects de la création m'intéresse que ce soit le design ou le développement. Venant d'une formation de développeur logiciel (BTS Systèmes numériques), je suis à l'aise que ce soit avec les outils côté serveur ou côté client. </p>
    </section>
  </div>
</template>

<style lang="scss">
  @import "../assets/styles/_functions.scss";

  .about {
    margin-top: var(--margin-2);
    margin-bottom: var(--margin-2);
  }

  @media screen and (min-width: get-breakpoint(lg)) {
    .about {
      &__body {
        grid-column-start: 6;
        grid-column-end: 12;
      }
    }
  }

  @media screen and (min-width: get-breakpoint(xl)){
    .about {
      &__body {
        grid-column-start: 8;
        grid-column-end: 12;
      }
    }
  }
</style>
