<template>
  <select class="wg-i18n-selector" v-model="locale">
    <option value="pt" selected>Pt</option>
    <option value="en">En</option>
  </select>
</template>

<script>
export default {
  name: 'WgI18nSelector',
  data() {
    return {
      locale: this.$localStorage.get('locale', 'pt'),
    };
  },
  watch: {
    locale: {
      immediate: true,
      handler(locale) {
        this.$localStorage.set('locale', locale)
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
