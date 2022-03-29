import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Property from '../views/Property.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/property',
            name: 'Property',
            component: Property
        }
    ]
})

export default router
