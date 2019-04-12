<template>
  <button class="wg-button--glassy">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "GlassyButton"
};
</script>

<style scoped lang="scss">
.wg-button--glassy {
  position: relative;
  background-color: var(--color-x-11);
  border: 1px solid var(--color-a-1);
  color: var(--color-a-1);
  font-weight: 600;
  @include default-transition(border-color);
  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--color-a-7);
    @include default-transition(background-color);
  }
  span,
  i {
    position: relative;
    z-index: 1;
    color: inherit;
    @include default-transition(color);
  }
  &:not([disabled]) {
    &:hover,
    &.wg-button--hover {
      color: var(--color-x-11);
      &::before {
        background-color: var(--color-a-3);
      }
    }
    &:active,
    &.wg-button--active {
      color: var(--color-x-11);
      &::before {
        background-color: var(--color-a-1);
      }
    }
  }
}
</style>
