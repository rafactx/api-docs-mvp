import { MotionPlugin } from '@vueuse/motion'
import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Componentes personalizados
import ApiCard from './components/ApiCard.vue'
import HeroSection from './components/oldHeroSection.vue'
import ScalarApi from './components/ScalarApi.vue'

// Estilos globais
import './fonts.css'
import './sidebar.css'
import './style.css'

const customTheme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Plugins
    app.use(MotionPlugin)

    // Componentes globais
    app.component('HeroSection', HeroSection)
    app.component('ScalarApi', ScalarApi)
    app.component('ApiCard', ApiCard)
  }
}

export default customTheme
