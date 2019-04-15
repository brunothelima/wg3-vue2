<template>
  <div
    :class="['field', 
    { 'field--error': errors.length },
    { 'field--disabled': input.disabled }]"
  >
    <label class="field__label" for>{{ i18n.t(input.label) }}</label>
    <slot/>
    <ul class="field__errors" v-if="errors">
      <li
        v-for="(error, eIndex) in errors"
        :key="`${error}_${eIndex}`"
      >{{ i18n.t(input.validations[error].message) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    i18n: Object,
    input: Object,
    errors: Array
  }
};
</script>
<style lang="scss" scoped>
.field {
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
  &__label {
    margin: 0 0 0.5rem 1rem;
    font-size: $font-size-xs;
    font-weight: 600;
    &:empty {
      display: none;
    }
  }
  &__errors {
    padding: 0;
    margin: 0 1rem 0 1rem;
    list-style: none;
    &:empty {
      display: none;
    }
    li {
      color: $color-error;
      margin-bottom: 0.5em;
    }
  }
  &--error /deep/ .wg-input-text input,
  &--error /deep/ .wg-input-textarea textarea,
  &--error /deep/ .wg-input-select {
    border-color: $color-error;
    i {
      color: $color-error;
    }
  }
  &--disabled {
    opacity: 0.6;
  }
}
</style>
