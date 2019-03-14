<template>
  <div :class="['WgContainer']">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WgContainer',
  }
</script>
<style scoped lang="scss">
.WgContainer {
  width: 100%;
  max-width: $desktop-brakepoint;
  padding: 0 var(--gutter, #{$gutter});
  margin: auto;
  @media screen and (max-width: #{$desktop-brakepoint}) {
    max-width: $tablet-brakepoint;
  }
  @media screen and (max-width: #{$tablet-brakepoint}) {
    max-width: $mobile-brakepoint;
  }
  @media screen and (max-width: $mobile-brakepoint) {
    max-width: unset;
  }
  &--full {
    max-width: unset !important;
  }
}
</style>
