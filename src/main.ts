// import './assets/main.css'

import { createApp } from 'vue'
import { Quasar, QInput, Loading } from 'quasar'

console.log('test')
//
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'
if (window.location.pathname === '/') {
  window.location.href = '/index'
}
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.component('q-input', QInput)
app.use(Quasar, {
  plugins: {
    Loading
  }
})

app.mount('#app')
