import Login from '../components/admin/public/Login';
import Registration from '../components/admin/public/Registration';
import ForgotPassword from '../components/admin/public/ForgotPassword';  

export default  [  
    { 
        path: '/login', 
        component: Login,
        meta : {
            'layout' : 'auth'
        }
    },
    { 
        path: '/register', 
        component: Registration,
        meta : {
            'layout' : 'auth'
        }
    },
    { 
        path: '/forgot-password', 
        component: ForgotPassword,
        meta : {
            'layout' : 'auth'
        }
    } 
];