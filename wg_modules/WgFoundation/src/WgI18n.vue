<template>
  <select class="wg-i18n" v-model="locale">
    <option value="pt" selected>PT</option>
    <option value="en">EN</option>
  </select>
</template>

<script>
export default {
  name: "WgI18n",
  data() {
    return {
      locale: "pt"
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
.wg-i18n {
  outline: none;
}
</style>
