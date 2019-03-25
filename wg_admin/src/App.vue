<i18n>
{
  "pt": {
    "hello": "Este é um componente admin!"
  },
  "en": {
    "hello": "This is an admin component!"
  }
}
</i18n>

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
  @import 'wg_core/assets/scss/normalize.scss';
  @import '@/assets/scss/app.scss';
</style>
