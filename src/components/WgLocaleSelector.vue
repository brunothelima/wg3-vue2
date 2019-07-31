<template>
  <input-select
    name="locale_selector"
    @input="onChange($event)"
    :value="locale"
    :options="[
      { value: 'pt', label: 'PT' }, 
      { value: 'en', label: 'EN' }
    ]"
  />
</template>

<script>
import { mapState } from "vuex";
import InputSelect from "@/components/WgForm/inputs/InputSelect";

export default {
  name: "WgLocaleSelector",
  components: {
    InputSelect
  },
  computed: mapState(["locale"]),
  methods: {
    onChange(locale) {
      this.$store.commit("setLocale", locale);
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
.wg-locale-selector {
  outline: none;
}
</style>
