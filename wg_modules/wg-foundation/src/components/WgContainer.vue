<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Container',
  }
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  padding: 0 1.143rem;
  margin: auto;
  max-width: 1024px;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    max-width: unset;
	}
}
</style>
