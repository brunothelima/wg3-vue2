<template>
  <div :class="['input-money', { 'input-money--error': error }]">
    <slot name="before" />
    <div class="input-money__wrapper">
      <span class="input-money__currency">{{currency}}</span>
      <input
        ref="input"
        type="text"
        :disabled="disabled"
        :placeholder="i18n.t(placeholder)"
        @input="onInput($event.target.value)"
        @blur="onBlur($event.target.value)"
        @focus="onFocus($event.target.value)"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import VMasker from "vanilla-masker";
import InputMixin from "@/mixins/InputMixin.js";

export default {
  name: "InputMoney",
  mixins: [InputMixin],
  props: {
    currency: String
  },
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
  },
  mounted() {
    this.$refs.input.value = this.value;
    VMasker(this.$refs.input).maskMoney({
      precision: 2,
      separator: ",",
      delimiter: "."
    });
  }
};
</script>
<style lang="scss" scoped>
.input-money {
  display: flex;
  &__wrapper {
    position: relative;
    flex: 1;
    display: grid;
    grid-template-columns: 48px auto;
    margin-bottom: 0.5rem;
  }
  &__currency {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-x-10);
    font-weight: 600;
    color: var(--color-a-1);
    border-radius: var(--input-border-radius) 0 0 var(--input-border-radius);
  }
  input {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    box-sizing: border-box;
    padding: 1em 1em 1em calc(48px + 1em);
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: transparent;
    color: var(--color-x-3);
    outline: none;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
    }
  }
  &--error {
    input {
      border-color: var(--color-error);
    }
  }
}
</style>