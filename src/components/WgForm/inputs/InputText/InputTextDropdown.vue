<template>
  <div :class="['input-text-dropdown', { 'input-text-dropdown--error': error }]">
    <slot name="before" />
    <div class="input-text-dropdown__wrapper">
      <wg-form-dropdown
        :i18n="i18n"
        v-bind="dropdown"
        v-if="dropdown"
        @input="onDropdownSelect($event)"
      />
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
import WgFormDropdown from '@/components/WgForm/WgFormDropdown'
import WgIcon from '@/components/WgIcon'

export default {
  name: 'InputTextDropdown',
  mixins: [InputMixin],
  props: {
    dropdown: {
      type: Object,
      default: () => ({
        prefix: '',
        default: 1,
        options: []
      })
    }
  },
  components: {
    WgFormDropdown,
    WgIcon
  },
  methods: {
    onDropdownSelect (value) {
      this.$emit('interaction', value)
      this.$emit('dropdownSelect', value)
      this.callback('dropdownSelect', value)
    },
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
.input-text-dropdown {
  display: flex;
  margin-bottom: 0.5rem;
  &__wrapper {
    flex: 1;
    display: grid;
    grid-template-columns: auto 1fr;
  }
  input {
    z-index: 2;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    border-top-right-radius: var(--input-border-radius);
    border-bottom-right-radius: var(--input-border-radius);
    background-color: var(--color-x-11);
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
