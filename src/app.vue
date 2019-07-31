<template>
  <div id="app" :class="['widgrid', theme]">
    <wg-alert />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WgAlert from '@/components/WgAlert'
import WgIcon from '@/components/WgIcon'

export default {
  name: 'App',
  components: {
    WgAlert,
    WgIcon
  },
  computed: {
    ...mapGetters({
      theme: 'currTheme'
    })
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i");
@import "@/assets/scss/wg.scss";
#app {
  min-height: 100vh;
  background-color: var(--color-x-11);
  color: var(--color-x-1);
  font-family: var(--font-family);
  font-size: var(--font-size);
  @media screen and (max-width: #{$mobile-brakepoint}) {
    font-size: $font-size-xs;
  }
  ::selection {
    background: var(--color-b-3);
  }
}
</style>
