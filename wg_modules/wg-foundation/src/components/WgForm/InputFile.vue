<template>
  <div :class="['wg-input-file', { 'wg-input-file--error': error }]" @click="onClick($event)">
    <slot name="before"/>
    <input ref="file" type="file" @input="onInput($event.target.files[0])">
    <span :class="(file) ? 'selected' : 'placeholder'">
      {{ (file) ? file.name : i18n.t(placeholder) }}
    </span>
    <i class="wg-icon-upload"></i>
    <slot name="after"/>
  </div>
</template>

<script>
  import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

  export default {
    name: "InputFile",
    mixins: [inputDefaults],
    data() {
      return {
        file: ""
      };
    },
    methods: {
      onInput(value) {
        if (value) {
          this.file = value;
          this.$emit("input", value);
          this.callback("input", value);
        }
      },
      onClick(event) {
        this.$emit("interaction");
        this.$refs.file.click();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .wg-input-file {
    display: flex;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    margin-bottom: 0.5em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    outline: none;
    @include default-transition(#{border-color, box-shadow});
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
    input {
      display: none;
    }
    &--error {
      border-color: var(--color-error);
      i {
        color: var(--color-error);
      }
    }
  }
</style>