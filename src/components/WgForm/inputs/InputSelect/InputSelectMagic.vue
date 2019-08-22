<template>
  <div :class="['input-select-magic', { 'input-select-magic--error': error }]">
    <slot name="before" />
    <div class="input-select-magic__wrapper">
      <select @input="onInput($event.target.value)">
        <option
          v-for="(option, index) of options"
          :disabled="disabled"
          :key="`option-${index}`"
          :value="option.value"
          :selected="option.value === value"
        >{{ i18n.t(option.label) }}</option>
      </select>
      <span
        :class="(selected) ? 'input-select-magic__selected' : 'input-select-magic__placeholder'"
      >{{ i18n.t((selected) ? selected.label : placeholder) }}</span>
    </div>
    <slot name="after" />
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin.js";
import WgIcon from "@/components/WgIcon";
export default {
  name: "InputSelectMagic",
  mixins: [InputMixin],
  components: {
    WgIcon
  },
  props: {
    options: Array
  },
  computed: {
    selected() {
      return this.options.find(option => option.value === this.value);
    }
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
      this.$emit("interaction", value);
      this.callback("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-select-magic {
  display: flex;
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
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border-radius: var(--input-border-radius);
    margin-bottom: 0.5rem;
    background-color: var(--color-x-11);
    outline: none;
  }
  &__selected,
  &__placeholder {
    display: block;
    padding: 0.5em 1em;
  }
  &__selected {
    color: var(--color-x-3);
  }
  &__placeholder {
    color: var(--color-x-7);
  }
  &--error {
    .input-select-magic__wrapper {
      border-color: var(--color-error);
    }
  }
}
</style>
