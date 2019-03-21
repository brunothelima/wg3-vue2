<template>
  <select class="wg-i18n-selector" v-model="locale">
    <option value="pt" selected>PT</option>
    <option value="en">EN</option>
  </select>
</template>

<script>
export default {
  name: 'WgI18nSelector',
  data() {
    return {
      locale: 'pt'
    };
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
