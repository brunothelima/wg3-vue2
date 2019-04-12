<template>
  <div class="wg-input-text">
    <input
      type="text"
      :value="value"
      :placeholder="i18n.t(placeholder)"
      @input="onInput($event)"
      @blur="onBlur($event)"
      @focus="onFocus($event)"
    >
  </div>
</template>

<script>
import inputDefaults from 'wg_modules/wg-foundation/src/mixins/InputDefaults.js'

export default {
  name: "InputText",
  mixins: [inputDefaults],
  methods: {
    onFocus(event) {
      this.$emit("focus", event);
      this.$emit("interaction", event);
      this.callback("focus", event);
    },
    onInput(event) {
      this.$emit("input", event);
      this.$emit("interaction", event);
      this.callback("input", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
      this.$emit("interaction", event);
      this.callback("blur", event);
    },
  }
};
</script>
<style lang="scss" scoped>
.wg-input-text {
  margin-bottom: 0.5rem;
  input {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    border-radius: 0.5rem;
    border: 1px solid var(--color-x-8);
    background-color: var(--color-x-11);
    color: var(--color-x-3);
    outline: none;
    @include default-transition("border-color, box-shadow");
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: inset 0 0 0 1px var(--color-x-4);
    }
  }
}
</style>