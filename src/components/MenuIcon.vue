<template>
    <div role="button" class="menu-icon" @click="changeState()">
        <span ref="line_1" class="menu-icon__element"></span>
        <span ref="line_2" class="menu-icon__element"></span>
        <span ref="line_3" class="menu-icon__element"></span>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { CHANGE_STATE } from '../stores/navigation.mutations.js'
import { TimelineMax, TweenMax } from 'gsap'

export default {
    name: 'MenuIcon',
    mounted() {
        
        const { line_1, line_2, line_3 } = this.$refs

        this.timeline = new TimelineMax()
            .fromTo(line_2, .1, {
                opacity: 1,
                transform: "translate(0)"
            }, {
                opacity: 0,
                transform: "translate(100px)"
            })
            .fromTo(line_1, .2, {
                transform: "translate(0, 0) rotate(0)"
            }, {
                transform: "translate(0, 12px) rotate(-45deg)"
            })
            .fromTo(line_3, .2, {
                transform: "translate(0, 0) rotate(0)"
            }, {
                transform: "translate(0, -11px) rotate(45deg)"
            })
            .pause()
    },
    data() {
        return {
            timeline: null
        }
    },
    computed: {
        ...mapState('navigation', {
            navigationState: state => state.navState
        })
    },
    methods: {
        ...mapActions('navigation', [
            CHANGE_STATE
        ])
    },
    watch: {
        navigationState(newNavigationState, oldNavigationState) {
            console.log('hello world')

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
    .menu-icon {
        display: grid;
        width: 43px;
        grid-gap: 9px;

        &__element {
            height: 2px;
            background: rgba(0,0,0,.87);
            display: block;
        }
    }
</style>
