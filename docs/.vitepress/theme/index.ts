import { MotionPlugin } from '@vueuse/motion'
import Theme from 'vitepress/theme'
import ApiCard from './components/ApiCard.vue'
import HeroSection from './components/oldHeroSection.vue'
import ScalarApi from './components/ScalarApi.vue'
import './fonts.css'
import './sidebar.css'
import './style.css'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('HeroSection', HeroSection)
    app.component('ScalarApi', ScalarApi)
    app.component('ApiCard', ApiCard)
  }
}
