<i18n>
{
  "pt": {
    "light": "Dia",
    "dark": "Noite"
  },
  "en": {
    "light": "Light",
    "dark": "Dark"
  }
}
</i18n>

<template>
  <select class="wg-theme-selector" 
    @change="onChange($event.target.value)"
    :value="theme">
      <option value="light">{{ $t('light') }}</option>
      <option value="dark">{{ $t('dark') }}</option>
  </select>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WgThemeSelector',
  computed: {
    ...mapGetters({
      theme: 'currTheme'
    })
  },
  methods: {
    onChange(theme) {
      this.$store.commit('setTheme', theme);
    }
  }
};
</script>

<style lang="scss" scoped>
.wg-theme-selector {
  outline: none;
}
</style>
