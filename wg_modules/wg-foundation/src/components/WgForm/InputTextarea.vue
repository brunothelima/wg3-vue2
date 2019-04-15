<template>
  <div :class="['wg-input-textarea', { 'wg-input-textarea--error': error }]">
    <textarea
      type="text"
      ref="input"
      :value="value"
      :placeholder="i18n.t(placeholder)"
      @input="onInput($event)"
      @blur="onBlur($event)"
      @focus="onFocus($event)"
    ></textarea>
    <small>{{ count }}</small>
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputTextarea",
  mixins: [inputDefaults],
  computed: {
    count() {
      if (!this.value) {
        return 0;
      }
      return this.value.length;
    }
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
.wg-input-textarea {
  margin-bottom: 0.5rem;
  small {
    display: block;
    text-align: right;
  }
  textarea {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    min-height: 10em;
    padding: 1em;
    border-radius: 0.5em;
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