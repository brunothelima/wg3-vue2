<template>
  <div
    :class="[
    'wg-form-field',
    { 'wg-form-field--error': errors.length },
    { 'wg-form-field--disabled': input.disabled }]"
  >
    <label class="wg-form-field__label" for>{{ i18n.t(input.label) }}</label>
    <slot />
    <div class="wg-form-field__description" v-if="input.description">{{input.description}}</div>
    <ul class="wg-form-field__errors" v-if="errors">
      <li
        v-for="(error, index) in errors"
        :key="`${error}_${index}`"
      >{{ i18n.t(input.validations[error].message) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WgFormField',
  props: {
    i18n: Object,
    input: Object,
    errors: Array
  }
}
</script>

<style lang="scss" scoped>
.wg-form-field {
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
  &__description {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    font-size: $font-size-xxs;
    color: var(--color-x-7);
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
