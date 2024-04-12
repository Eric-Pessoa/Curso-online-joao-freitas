import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//Material icons
import { aliases, md } from 'vuetify/iconsets/md'
//Components
import AppHeader from './components/Header/AppHeader.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
      },
    },
  })

//Instantiate routes, vuetify and pinia
const app = createApp(App).use(vuetify)
app.use(createPinia())
app.use(router)
app.component('AppHeader', AppHeader)
app.mount('#app')
