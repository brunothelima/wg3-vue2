<template>
  <div :class="['input-password', { 'input-password--error': error }]">
    <slot name="before" />
    <div class="input-password__wrapper">
      <input
        :type="type"
        :value="value"
        :disabled="disabled"
        :placeholder="i18n.t(placeholder)"
        @input="onInput($event.target.value)"
        @blur="onBlur($event.target.value)"
        @focus="onFocus($event.target.value)"
      />
      <wg-icon
        color="a"
        :id="(type === 'password') ? 'wg-icon-eye' : 'wg-icon-eye-closed'"
        @click.native="type = (type === 'text') ? 'password' : 'text'"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'
import WgIcon from '@/components/WgIcon'

export default {
  name: 'InputPassword',
  mixins: [InputMixin],
  components: {
    WgIcon
  },
  data () {
    return {
      type: 'password'
    }
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
    }
  }
}
</script>
<style lang="scss" scoped>
.input-password {
  display: flex;
  margin-bottom: 0.5rem;
  &__wrapper {
    flex: 1;
    display: grid;
    grid-template-columns: auto 48px;
  }
  input {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
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
  i {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    align-self: center;
    justify-content: center;
    justify-self: center;
  }
  i {
    cursor: pointer;
  }
  &--error {
    input {
      border-color: var(--color-error);
    }
    .wg-icon {
      color: var(--color-error);
    }
  }
}
</style>
