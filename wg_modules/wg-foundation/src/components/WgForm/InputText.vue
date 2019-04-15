<template>
  <div :class="['wg-input-text', { 'wg-input-text--error': error }]">
    <slot name="before" />
    <input
      type="text"
      :value="value"
      :placeholder="i18n.t(placeholder)"
      @input="onInput($event.target.value)"
      @blur="onBlur($event.target.value)"
      @focus="onFocus($event.target.value)"
    >
    <slot name="after" />
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputText",
  mixins: [inputDefaults],
  methods: {
    onFocus(value) {
      this.$emit("interaction", value);
      this.$emit("focus", value);
      this.callback("focus", value);
    },
    onInput(value) {
      this.$emit("interaction", value);
      this.$emit("input", value);
      this.callback("input", value);
    },
    onBlur(value) {
      this.$emit("interaction", value);
      this.$emit("blur", value);
      this.callback("blur", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.wg-input-text {
  display: flex;
  margin-bottom: 0.5rem;
  input {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
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
  &--error {
    border-color: $color-error;
    i {
      color: $color-error;
    }
  }
}
</style>