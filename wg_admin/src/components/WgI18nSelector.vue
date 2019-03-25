<template>
  <select class="wg-i18n-selector" 
    @change="onChange($event.target.value)"
    :value="locale">
      <option value="pt">Pt</option>
      <option value="en">En</option>
  </select>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'WgI18nSelector',
  computed: mapState(['locale']),
  methods: {
    onChange(locale) {
      this.$store.commit('setLocale', locale);
    }
  },
  watch: {
    locale: {
      immediate: true,
      handler(locale) {
        this.$i18n.locale = locale;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wg-i18n-selector {
  outline: none;
}
</style>
