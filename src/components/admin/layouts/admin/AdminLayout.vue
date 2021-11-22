<template>
  <div>

     <!-- Nav Header -->
     <admin-header ></admin-header>

     <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
              <!-- Nav Sidebar -->
              <admin-sidebar ></admin-sidebar>

          </div>
          <div id="layoutSidenav_content">
            <!-- Router Component -->
               <slot />
            <!-- Footer Component -->
            <admin-footer ></admin-footer>

          </div>
     </div> 
 
  </div>
</template>

<script>
import HeaderComponent from "../admin/Header.vue";
import SidebarComponent from "../admin/Sidebar.vue";
import FooterComponent from "../admin/Footer.vue";

export default {
    name : 'AdminLayout',
    components: {
        "admin-header": HeaderComponent,
        "admin-sidebar": SidebarComponent,
        "admin-footer": FooterComponent,
    }
};
</script>

<style>
</style>