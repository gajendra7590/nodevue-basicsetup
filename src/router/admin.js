import Dashboard from '../components/admin/private/Dashboard.vue'; 

export default  [  
    { 
        path: '/dashboard', 
        component: Dashboard,
        meta : {
            'layout' : 'admin'
        }
    } 
];