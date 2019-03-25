<template>
  <div id="app" :class="theme">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      theme: 'currTheme'
    }),
  },
}
</script>

<style lang="scss">
  @import 'wg_admin/assets/scss/app.scss';
</style>
