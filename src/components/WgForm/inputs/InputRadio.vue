<template>
  <div class="input-radio">
    <div
      v-for="(option, index) of options"
      :key="`option-${index}`"
      :class="{ 'checked': option.value === value }"
    >
      <i class="input-radio__ui" @click="$event.target.nextElementSibling.click()" />
      <input
        type="radio"
        :name="name"
        :disabled="disabled"
        :value="option.value"
        :id="`${name}-option-${index}`"
        :checked="option.value === value"
        @input="onInput($event.target.value)"
      />
      <label :for="`${name}-option-${index}`">{{ i18n.t(option.label) }}</label>
    </div>
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'

export default {
  name: 'InputRadio',
  mixins: [InputMixin],
  props: {
    options: Array
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
.input-radio {
  display: flex;
  margin-left: -1em;
  > div {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin-left: 2em;
  }
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
  input {
    display: none;
  }
  &__ui {
    display: grid;
    align-content: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border: 1px var(--input-border-style) var(--color-x-6);
    border-radius: 10px;
    font-family: var(--icons-family);
    font-style: normal;
    cursor: pointer;
    &:before {
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: var(--color-info);
      opacity: 0;
    }
    &:hover {
      border-color: var(--color-info);
    }
  }
  > div.checked {
    .input-radio__ui {
      border-color: var(--color-info);
      &:before {
        opacity: 1;
      }
    }
  }
}
</style>
