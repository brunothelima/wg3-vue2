<template>
  <div :class="['input-toggle', { 'input-toggle--checked': status }]">
    <i class="input-toggle__ui" @click="$refs.input.click()" />
    <input
      ref="input"
      type="checkbox"
      :id="name"
      :value="value"
      :disabled="disabled"
      @input="onInput($event.target.checked)"
    />
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin.js";

export default {
  name: "InputTgoggle",
  mixins: [InputMixin],
  props: {
    checked: Boolean,
    title: String
  },
  data() {
    return {
      status: null
    };
  },
  methods: {
    onInput(checked) {
      this.status = checked;
      this.$emit("input", checked ? this.value : null);
      this.$emit("interaction", checked ? this.value : null);
      this.callback("input", checked ? this.value : null);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-toggle {
  display: flex;
  align-items: center;
  padding: 1em 0;
  margin-left: 1em;
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
  input {
    display: none;
  }
  &__ui {
    display: inline-flex;
    width: 42px;
    height: 20px;
    border-radius: 13px;
    background-color: var(--color-x-7);
    cursor: pointer;
    &:before {
      content: "";
      box-sizing: border-box;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      transform: scale(1.2);
      background: white;
      border: 1px solid var(--color-x-7);
    }
  }
  &--checked {
    .input-toggle__ui {
      background-color: var(--color-info);
      &:before {
        transform: scale(1.2) translateX(100%);
        border-color: var(--color-info);
      }
    }
  }
}
</style>