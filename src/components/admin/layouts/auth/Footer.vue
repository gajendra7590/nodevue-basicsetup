<template>
  <div id="layoutAuthentication_footer">
    <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; {{ app_name }} {{ date }}</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import config from '../../../../config/app.config'
export default {
    name : 'auth-footer',
    data() {
        return {
            date : (new Date()).getFullYear(),
            app_name : config.app_name
        }
    }

}
</script>

<style>

</style>