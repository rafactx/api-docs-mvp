import { MotionPlugin } from '@vueuse/motion'
import Theme from 'vitepress/theme'
import HeroSection from './components/oldHeroSection.vue'
import ScalarApi from './components/ScalarApi.vue'
import './style.css'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('HeroSection', HeroSection)
    app.component('ScalarApi', ScalarApi)
  }
}
