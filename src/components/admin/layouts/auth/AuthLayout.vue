<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content"> 
       <!-- Router Component -->
       <slot /> 
    </div> 
    <!-- Load Footer -->
    <auth-footer ></auth-footer> 
  </div>
</template> 
<script>
import Footer from "./Footer.vue";
export default {
  name: "AuthLayout",
  components: {
    'auth-footer': Footer,
  },
};
</script> 
<style>
</style>
