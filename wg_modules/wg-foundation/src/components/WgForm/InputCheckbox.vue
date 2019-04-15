<template>
  <div class="wg-input-checkbox">
    <slot name="before" />
    <input
      type="checkbox"
      :id="name"
      :value="value"
      :checked="checked"
      @input="onInput($event.target.checked)"
    >
    <label :for="name">{{ i18n.t(title) }}</label>
    <slot name="after" />
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
        initial: this.value
      };
    },
    methods: {
      onInput(checked) {
        this.$emit("input", checked ? this.initial : null);
        this.$emit("interaction", checked ? this.initial : null);
        this.callback("input", checked ? this.initial : null);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .wg-input-checkbox {
    display: flex;
    align-items: flex-end;
    padding: 1em 0;
    margin-left: 1em;
    label {
      cursor: pointer;
      margin-left: 0.5em;
    }
  }
</style>