<template>
  <component
    :is="`${model}-button`"
    :disabled="disabled"
    :class="[
      'wg-button',
      `wg-button--${size}`,
      { 'wg-button--hover': hover },
      { 'wg-button--active': active },
      { 'wg-button--reverse': reverse }
    ]"
  >
    <i :class="`wg-${icon}`" v-if="icon" />
    <span>
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: 'WgButton',
  components: {
    'glassy-button': () => import('./GlassyButton'),
    'clean-button': () => import('./CleanButton')
  },
  props: {
    icon: String,
    size: String,
    model: String,
    hover: Boolean,
    active: Boolean,
    reverse: Boolean,
    disabled: Boolean
  }
}
</script>

<style scoped lang="scss">
.wg-button {
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: inherit;
  outline: none;
  cursor: pointer;
  &[disabled] {
    opacity: 0.24;
    cursor: not-allowed;
  }
  i,
  svg,
  span {
    display: inline-flex;
  }
  i {
    font-size: 16px;
  }
  * ~ span {
    margin: 0 0 0 1em;
  }
  &--reverse {
    flex-direction: row-reverse;
    * ~ span {
      margin: 0 1em 0 0;
    }
  }
  &--small {
    font-size: $font-size-xs;
    padding: 0.8em 1.5em;
  }
  &--large {
    font-size: $font-size-xl;
  }
}
</style>
