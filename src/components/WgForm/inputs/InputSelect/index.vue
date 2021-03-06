<template>
  <div :class="['input-select', { 'input-select--error': error }]">
    <slot name="before" />
    <div class="input-select__wrapper">
      <select @input="onInput($event.target.value)" :disabled="disabled">
        <option
          v-for="(option, index) of options"
          :key="`option-${index}`"
          :value="option.value"
          :selected="option.value === value"
        >{{ i18n.t(option.label) }}</option>
      </select>
      <span
        :class="(selected) ? 'input-select__selected' : 'input-select__placeholder'"
      >{{ i18n.t((selected) ? selected.label : placeholder) }}</span>
      <wg-icon id="wg-icon-caret-down" color="a" />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'
import WgIcon from '@/components/WgIcon'
export default {
  name: 'InputSelect',
  mixins: [InputMixin],
  components: {
    WgIcon
  },
  props: {
    options: Array
  },
  computed: {
    selected () {
      return this.options.find(option => option.value === this.value)
    }
  },
  methods: {
    onInput (value) {
      this.$emit('input', value)
      this.$emit('interaction', value)
      this.callback('input', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.input-select {
  display: flex;
  margin-bottom: 0.5rem;
  select {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: auto 48px;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    outline: none;
  }
  &__selected,
  &__placeholder {
    padding: 1em 48px 1em 1em;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  &__selected {
    color: var(--color-x-3);
  }
  &__placeholder {
    color: var(--color-x-7);
  }
  i {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    align-self: center;
    justify-self: center;
  }
  &--error {
    .input-select__wrapper {
      border-color: var(--color-error);
    }
    .wg-icon {
      color: var(--color-error);
    }
  }
}
</style>
