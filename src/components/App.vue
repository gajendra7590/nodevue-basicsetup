<template>
  <div :class="mainClass">
    <component :is="layout"> 
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "admin"; 
export default {
  components: { 
  },
  data() {
    return { 
       currentUrl: "",
       mainClass : 'sb-nav-fixed' //bg-primary 
    }
  },
  created: function () { 
  },
  mounted : function() { 
     this.mainClass = (this.$route.meta.layout == 'admin')?'sb-nav-fixed':'bg-primary';
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
  watch: { 
  },
};
</script>

<style>
</style>