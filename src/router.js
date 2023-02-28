import {createRouter, createWebHistory  } from 'vue-router';
import Home from './views/home.vue';
import Countries from './views/countries/index.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Parcial-I-programacion-II/',
            component: Home
        },
        {
            path: '/countries',
            component: Countries
        }
    ]
});