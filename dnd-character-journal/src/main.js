import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from '../node_modules/vue-router';

const routes = [
    { path: '/', component: null }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
createApp(App).use(router).mount('#app')