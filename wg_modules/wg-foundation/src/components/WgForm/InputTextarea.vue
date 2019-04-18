<template>
  <div :class="['wg-input-textarea', { 'wg-input-textarea--error': error }]">
    <slot name="before" />
    <textarea
      type="text"
      ref="input"
      :value="value"
      :placeholder="i18n.t(placeholder)"
      :maxlength="maxlength"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    ></textarea>
    <small v-if="maxlength">{{ `${count}/${maxlength}` }}</small>
    <small v-else>{{ count }}</small>
    <slot name="after" />
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputTextarea",
  mixins: [inputDefaults],
  props: {
    validations: Object
  },
  computed: {
    maxlength() {
      return (this.validations.maxlength)
        ? this.validations.maxlength.limit
        : false 
    },
    count() {
      return (this.value)
        ? this.value.length
        : 0
    }
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
      this.$emit("interaction", value);
      this.callback("input", value);
    },
    onFocus(value) {
      this.$emit("focus", value);
      this.$emit("interaction", value);
      this.callback("focus", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.wg-input-textarea {
  margin-bottom: 0.5rem;
  small {
    display: block;
    margin-top: 0.25em;
    text-align: right;
  }
  textarea {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    min-height: 10em;
    padding: 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    color: var(--color-x-3);
    outline: none;
    @include default-transition("border-color, box-shadow");
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: inset 0 0 0 var(--input-border-width) var(--color-x-4);
    }
	}
	&--error {
    textarea {
      border-color: var(--color-error);
    }
    i {
      color: var(--color-error);
    }
  }
}
</style>