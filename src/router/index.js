import VueRouter from 'vue-router'
import Application from '../pages/Application'
import Portfolio from '../pages/Portfolio'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Application
        },
        {
            path: '/portfolio',
            component: Portfolio
        }   
    ],

})