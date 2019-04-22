<template>
  <div id="app" :class="['widgrid', theme]">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      theme: "currTheme"
    })
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i");
@import "wg_core/assets/scss/wg.scss";

#app {
  // Dark theme variations overwrite
  ::selection {
    background: var(--color-b-3);
  }
}
</style>
