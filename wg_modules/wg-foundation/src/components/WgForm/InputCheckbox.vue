<template>
  <div class="wg-input-checkbox">
    <input type="checkbox" :id="name" :value="value" :checked="checked" @input="onInput($event)">
    <label :for="name">{{ i18n.t(title) }}</label>
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputCheckbox",
  mixins: [inputDefaults],
  props: {
    checked: Boolean,
    title: String
  },
  methods: {
    onInput(event) {
      this.$emit("input", event);
      this.$emit("interaction", event);
      this.callback("input", event);
    }
  }
};
</script>
<style lang="scss" scoped>
.wg-input-checkbox {
  display: flex;
  align-items: flex-end;
  padding: 1em 0;
  margin-left: 1em;
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
}
</style>