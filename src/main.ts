import './assets/main.css'

import { createApp } from 'vue'
import { Quasar, QInput } from 'quasar'

console.log("test")

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('q-input',QInput)
app.use(Quasar, {
    plugins: {
      
    }
})

app.mount('#app')
