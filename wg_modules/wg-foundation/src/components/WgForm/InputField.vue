<template>
  <div
    :class="['input-field', 
    { 'input-field--error': errors.length },
    { 'input-field--disabled': input.disabled }]"
  >
    <label class="input-field__label" for>{{ i18n.t(input.label) }}</label>
    <slot/>
    <ul class="input-field__errors" v-if="errors">
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
.input-field {
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
      color: var(--color-error);
      margin-bottom: 0.5em;
    }
  }
  &--disabled {
    opacity: 0.6;
  }
}
</style>
