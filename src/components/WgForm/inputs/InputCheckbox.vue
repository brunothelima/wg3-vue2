<template>
  <div :class="['input-checkbox', { 'input-checkbox--checked': status }]">
    <i class="input-checkbox__ui" @click="$refs.input.click()" />
    <input
      ref="input"
      type="checkbox"
      :id="name"
      :value="value"
      :disabled="disabled"
      @input="onInput($event.target.checked)"
    />
    <label :for="name">{{ i18n.t(title) }}</label>
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin.js";

export default {
  name: "InputCheckbox",
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
.input-checkbox {
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
    display: grid;
    align-content: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border: 1px var(--input-border-style) var(--color-x-6);
    border-radius: 2px;
    font-family: var(--icons-family);
    font-style: normal;
    color: white;
    cursor: pointer;
    &:before {
      content: "\e90c";
      opacity: 0;
    }
    &:hover {
      border-color: var(--color-info);
    }
  }
  &--checked {
    .input-checkbox__ui {
      border-color: var(--color-info);
      background-color: var(--color-info);
      &:before {
        opacity: 1;
      }
    }
  }
}
</style>
