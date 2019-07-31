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
  <input-select
    name="theme_selector"
    @input="onChange($event)"
    :value="theme"
    :options="[
      { value: 'light', label: $t('light') }, 
      { value: 'dark', label: $t('dark') }
    ]"
  />
</template>

<script>
import { mapGetters } from "vuex";
import InputSelect from "@/components/WgForm/inputs/InputSelect";

export default {
  name: "ThemeSelector",
  components: {
    InputSelect
  },
  computed: {
    ...mapGetters({
      theme: "currTheme"
    })
  },
  methods: {
    onChange(theme) {
      this.$store.commit("setTheme", theme);
    }
  }
};
</script>

<style lang="scss" scoped>
.wg-theme-selector {
  outline: none;
}
</style>
