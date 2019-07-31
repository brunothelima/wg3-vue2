<template>
  <div :class="['input-file', { 'input-file--error': error }]">
    <slot name="before" />
    <div class="input-file__wrapper" @click="onClick($event)">
      <input :disabled="disabled" ref="file" type="file" @input="onInput($event.target.files[0])" />
      <span
        :class="(file) ? 'input-file__selected' : 'input-file__placeholder'"
      >{{ (file) ? file.name : i18n.t(placeholder) }}</span>
      <wg-icon color="a" id="wg-icon-upload" />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'

import WgIcon from '@/components/WgIcon'
export default {
  name: 'InputFile',
  mixins: [InputMixin],
  components: {
    WgIcon
  },
  data () {
    return {
      file: ''
    }
  },
  methods: {
    onInput (value) {
      if (value) {
        this.file = value
        this.$emit('input', value)
        this.callback('input', value)
      }
    },
    onClick (event) {
      this.$emit('interaction')
      this.$refs.file.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-file {
  display: flex;
  input {
    display: none;
  }
  &__wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    margin-bottom: 0.5em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    outline: none;
    cursor: pointer;
  }
  &__selected,
  &__placeholder {
    flex: 1;
    padding-right: 1em;
    color: var(--color-x-3);
  }
  &__placeholder {
    color: var(--color-x-7);
  }
  &--error {
    .input-file__wrapper {
      border-color: var(--color-error);
    }
    .wg-icon {
      color: var(--color-error);
    }
  }
}
</style>
