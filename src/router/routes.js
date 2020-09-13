import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Enter from '../views/Enter'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Enter},
        {path: '/home', component: Home},
    ],
    mode: "history"
})