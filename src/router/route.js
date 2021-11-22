import Vue from 'vue';
import VueRouter from 'vue-router'; 
import config from '../config/app.config'; 

Vue.use(VueRouter); 

//import all routes
import AuthRoutes from './auth';
import AdminRoutes from './admin';
 

const router = new VueRouter({
    mode: 'history',
    base: config.app_prefix,
    routes: [  
         ...AuthRoutes,
         ...AdminRoutes,
         { 
            path: '**', 
            redirect : '/login'
         }
    ]
});


export default router;