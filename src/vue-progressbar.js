import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
    color: '#ff0000',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
}

Vue.use(VueProgressBar, options)
  