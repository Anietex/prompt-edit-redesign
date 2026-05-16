import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './composables/useReveal'
import './styles/main.css'

createApp(App).directive('reveal', reveal).mount('#app')
