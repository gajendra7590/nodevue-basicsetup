import Vue from 'vue';
import App from './components/App.vue';

//Import layouts
import AuthLayout from "./components/admin/layouts/auth/AuthLayout.vue";
import AdminLayout from "./components/admin/layouts/admin/AdminLayout.vue";  

// Load Global Components
Vue.component("auth-layout", AuthLayout);
Vue.component("admin-layout", AdminLayout); 

import router from './router/route'; 
Vue.config.productionTip = false;   

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app');