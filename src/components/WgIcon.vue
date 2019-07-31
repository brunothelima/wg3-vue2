<template>
  <i :class="['wg-icon', id, {'color-a': color === 'a'}, {'color-b': color === 'b'}]">
    <slot />
  </i>
</template>

<script>
export default {
  name: 'WgIcon',
  props: {
    id: String,
    color: [String, Boolean]
  }
}
</script>

<style scoped lang="scss">
.wg-icon {
  font-family: var(--icons-family);
  &.color-a {
    color: var(--color-a-1);
  }
  &.color-b {
    color: var(--color-b-1);
  }
}
</style>
