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
      <option value="wg-light-theme">{{ $t('light') }}</option>
      <option value="wg-dark-theme">{{ $t('dark') }}</option>
  </select>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ThemeSelector',
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
