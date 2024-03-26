import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AppHeader from './components/Header/AppHeader.vue'

const vuetify = createVuetify({
    components,
    directives,
  })

//Instantiate routes, vuetify and pinia
const app = createApp(App).use(vuetify)
app.use(createPinia())
app.use(router)
app.component('AppHeader', AppHeader)
app.mount('#app')
