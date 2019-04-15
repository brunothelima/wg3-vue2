<template>
  <div class="wg-input-radio">
    <slot name="before" />
    <div v-for="(option, index) of options" :key="`option-${index}`">
      <input
        @input="onInput($event.target.value)"
        :name="name"
        :id="`option-${index}`"
        type="radio"
        :value="option.value"
        :checked="option.value === value"
      >
      <label :for="`option-${index}`">{{ i18n.t(option.label) }}</label>
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputRadio",
  mixins: [inputDefaults],
  props: {
    options: Array
  },
  methods: {
    onInput(value) { 
      this.$emit("input", value);
      this.$emit("interaction", value);
      this.callback("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.wg-input-radio {
  display: flex;
  margin-left: -1em;
  > div {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin-left: 2em;
  }
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
}
</style>