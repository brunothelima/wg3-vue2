<template>
  <div :class="['input-text-button', { 'input-text-button--error': error }]">
    <slot name="before" />
    <div class="input-text-button__wrapper">
      <input
        ref="input"
        type="text"
        :disabled="disabled"
        :placeholder="i18n.t(placeholder)"
        @blur="onBlur($event.target.value)"
        @focus="onFocus($event.target.value)"
      />
      <wg-button size="small" model="glassy" @click.native="onSubmit($event)">{{ i18n.t(button) }}</wg-button>
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputMixin from '@/mixins/InputMixin.js'
import WgButton from '@/components/WgButton'

export default {
  name: 'InputTextButton',
  mixins: [InputMixin],
  props: {
    button: String
  },
  components: {
    WgButton
  },
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
    },
    onSubmit (event) {
      event.preventDefault()
      const value = this.$refs.input.value
      this.$emit('interaction', value)
      this.$emit('submit', value)
      this.callback('submit', value)
    }
  }
}
</script>

<style src="flatpickr/dist/flatpickr.min.css"></style>
<style lang="scss" src="@/vendors/scss/flatpickr-custom.scss"></style>
<style lang="scss" scoped>
.input-text-button {
  display: flex;
  &__wrapper {
    position: relative;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0.5rem;
  }
  .wg-button {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    align-self: center;
    justify-self: center;
    margin-right: 0.45em;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
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
    i {
      color: var(--color-error);
    }
  }
}
</style>
