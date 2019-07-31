<template>
  <button class="wg-button--clean">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CleanButton'
}
</script>

<style scoped lang="scss">
.wg-button--clean {
  position: relative;
  padding: 0.8em 0.25em;
  background-color: transparent;
  border: none;
  color: var(--color-x-1);
  font-weight: 400;
  span,
  i {
    color: inherit;
  }
  &:not([disabled]) {
    &:hover,
    &.wg-button--hover {
      color: var(--color-a-3);
    }
    &:active,
    &.wg-button--active {
      color: var(--color-x-6);
    }
  }
}
</style>
