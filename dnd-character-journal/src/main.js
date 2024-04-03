import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import "./assets/custom.css"

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from '../node_modules/vue-router';
import { createStore } from './store'

const store = createStore();

const routes = [
    { path: '/', component: null }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(store).use(router).mount('#app')