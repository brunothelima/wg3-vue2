<template>
  <div :class="['input-checkbox', {'input-checkbox--checked': isChecked}]" >
    <i class="input-checkbox__box" @click="onInput(!isChecked)" />
    <!-- <input
      type="checkbox"
      :id="name"
      :value="value"
      
      @input="onInput($event.target.checked)"
    > -->
    <label>{{ i18n.t(title) }}</label>
  </div>
</template>

<script>
  import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

  export default {
    name: "InputCheckbox",
    mixins: [inputDefaults],
    props: {
      checked: Boolean,
      title: String
    },
    data() {
      return {
        currState: this.checked
      };
    },
    methods: {
      onInput(isChecked) {
        this.$emit("input", isChecked ? this.value : null);
        this.$emit("interaction", isChecked ? this.value : null);
        this.callback("input", isChecked ? this.value : null);
        th
      }
    }
  };
</script>
<style lang="scss" scoped>
  .input-checkbox {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin-left: 1em;
    label {
      cursor: pointer;
      margin-left: 0.5em;
    }
    &__box {
      display: grid;
      height: 1.5em;
      width: 1.5em;
      border: 2px var(--input-border-style) var(--color-x-6);
      border-radius: 0.25em;
      font-family: var(--icons-family);
      &:before {
        content: "\e90a";
      }
      @include default-transition(#{border-color, background-color});
      &:hover {
        border-color: var(--color-info);
      }
    }
    &--checked {
      .input-checkbox__box {
        border-color: var(--color-info);
        background-color: var(--color-info);
      }
    }
  }
</style>