<template>
    <nav class="nav" ref="nav" role="dialog" aria-label="Navigation modal">
        <ul class="nav__list">
            <li class="nav__list__item" ref="l1">
                <router-link class="nav__link" :to="{ 'name': 'home' }" @click.native="changeState()">Accueil</router-link>
            </li>
            <li class="nav__list__item" ref="l2">
                <router-link class="nav__link" :to="{ 'name': 'about' }" @click.native="changeState()">A propos</router-link>
            </li>
            <li class="nav__list__item" ref="l3">
                <router-link class="nav__link" :to="{ 'name': 'skill' }" @click.native="changeState()">Compétences</router-link>
            </li>
            <li class="nav__list__item" ref="l4">
                <router-link class="nav__link" :to="{ 'name': 'projects' }" @click.native="changeState()">Projets</router-link>
            </li>
            <li class="nav__list__item" ref="l5">
                <a class="nav__link" href="https://www.dropbox.com/s/b2aqhluhkwzl69b/CV.pdf?dl=0" target="_blank" rel="noopener">CV</a>
            </li>
        </ul>
        <p class="heading text" ref="mail">victor.mendele68[at]gmail[dot]com</p>
        <div class="nav__icons" ref="icons">
            <a href="https://www.pinterest.fr/mendelevictor/" rel="noopener" target="_blank" class="nav__icons__element">
                <font-awesome-icon :icon="['fab', 'pinterest']" class="nav__icon"></font-awesome-icon>
                <span class="nav__icons__element__text">Pinterest</span>
            </a>
            
            <a href="https://codepen.io/botflux/" rel="noopener" target="_blank" class="nav__icons__element">
                <font-awesome-icon :icon="['fab', 'codepen']" class="nav__icon"></font-awesome-icon>
                <span class="nav__icons__element__text">Codepen</span>
            </a>
            
            <a href="https://github.com/botflux" rel="noopener" target="_blank" class="nav__icons__element">
                <font-awesome-icon :icon="['fab', 'github']" class="nav__icon"></font-awesome-icon>
                <span class="nav__icons__element__text">Github</span>
            </a>
            
            <a href="https://www.linkedin.com/in/victor-mendele-698517154/" rel="noopener" target="_blank" class="nav__icons__element">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="nav__icon"></font-awesome-icon>
                <span class="nav__icons__element__text">Linkedin</span>
            </a>
        </div>
    </nav>    
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TimelineMax } from 'gsap'
import FontAwesomeIcon from './FontAwesomeIcon'

export default {
    name: 'AppNavigation',
    components: {
        FontAwesomeIcon
    },
    mounted () {
        let { nav, l1, l2, l3, l4, l5, icons, mail } = this.$refs
        let l = [l1, l2, l3, l4, l5]

        this.timeline = new TimelineMax({ paused: true })
            .fromTo (nav, .001, { display: 'none' }, { display: 'grid' })
            .fromTo (nav, .3, { transform: 'scale(.9)', opacity: 1 }, { transform: 'scale(1)', opacity: 1} )
            .staggerFromTo (l, .1, {transform: 'translate(-100px)', opacity: 0}, { transform: 'translate(0)', opacity: 1 }, .1)
            .fromTo(mail, .1, { transform: 'translate(-100px)', opacity:0 }, { transform: 'translate(0)', opacity: 1 })
            .fromTo (icons, .2, { opacity: 0 }, { opacity: 1 })
    },
    data() {
        return {
            timeline: null
        }
    },
    methods: {
        ...mapActions('navigation', [
            "changeState"
        ])
    },
    computed: {
        ...mapState('navigation', {
            navigationState: state => state.navState
        })
    },
    watch: {
        navigationState(newNavigationState) {
            if (newNavigationState) {
                this.timeline.play()
            } else {
                this.timeline.reverse()
            }
        }
    }
}
</script>


<style lang="scss">
    @import "../assets/styles/_mixins.scss";

    .nav {
        display: none;
        padding-left: 3rem;
        align-content: center;
        grid-gap: 3rem;

        &__icons {
            font-size: 2rem;
            color: var(--text-primary);
            display: flex;

            &__element {
                color: var(--text-primary);
                display: flex;
                align-items: center;
                text-decoration: none;

                &__text {
                    font-size: 1rem;
                    padding-left: 0.8rem;
                    padding-right: 1.3rem;

                    @include font-monospace();
                }
            }
        }

        &__list {
            margin: auto 0;
            display: grid;
            margin: 0;
            padding: 0;
            grid-template-columns: .9fr;
            align-content: center;
            align-items: center;

            &__item {
                list-style: none;
            }
        }

        &__link {
            text-decoration: none;
            color: var(--text-primary);
            font-size: var(--h2-font-size);
            text-transform: lowercase;
            letter-spacing: .1rem;
        }
    }
</style>

