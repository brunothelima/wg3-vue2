<template>
  <div :class="['wg-input-select', { 'wg-input-select--error': error }]">
    <slot name="before" />
    <select @input="onInput($event.target.value)">
      <option
        v-for="(option, index) of options"
        :key="`option-${index}`"
        :value="option.value"
        :selected="option.value === value"
      >{{ i18n.t(option.label) }}</option>
    </select>
    <span class="selected" v-if="selected">{{ i18n.t(selected.label) }}</span>
    <span class="placeholder" v-else>{{ i18n.t(placeholder) }}</span>
    <i class="wg-icon-caret-down"/>
    <slot name="after" />
  </div>
</template>

<script>
import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

export default {
  name: "InputSelect",
  mixins: [inputDefaults],
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
.wg-input-select {
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  border: 1px solid var(--color-x-8);
  background-color: var(--color-x-11);
  outline: none;
  @include default-transition("border-color, box-shadow");
  span {
    flex: 1;
    padding-right: 1em;
    color: var(--color-x-3);
    &.placeholder {
      color: var(--color-x-7);
    }
  }
  i {
    color: var(--color-a-1);
  }
  select {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>