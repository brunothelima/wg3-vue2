<template>
  <div :class="['input-text-magic', { 'input-text-magic--error': error }]">
    <slot name="before" />
    <div class="input-text-magic__wrapper">
      <input
        type="text"
        :value="value"
        :placeholder="i18n.t(placeholder)"
        :disabled="disabled"
        @input="onInput($event.target.value)"
        @blur="onBlur($event.target.value)"
        @focus="onFocus($event.target.value)"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'

export default {
  name: 'InputTextMagic',
  mixins: [InputMixin],
  methods: {
    onFocus (value) {
      this.$emit('interaction', value)
      this.$emit('focus', value)
      this.callback('focus', value)
    },
    onInput (value) {
      this.$emit('interaction', value)
      this.$emit('input', value)
      this.callback('input', value)
    },
    onBlur (value) {
      this.$emit('interaction', value)
      this.$emit('blur', value)
      this.callback('blur', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.input-text-magic {
  display: flex;
  margin-bottom: 0.5rem;
  &__wrapper {
    flex: 1;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) transparent;
    background-color: transparent;
    color: var(--color-x-3);
    outline: none;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
      background-color: var(--color-x-11);
    }
  }
  &--error {
    i, input {
      color: var(--color-error);
      &::placeholder {
        color: var(--color-error);
      }
    }
  }
}
</style>
