<i18n>
{
  "pt": {
    "hello": "Este é um modulo WgContainer"
  },
  "en": {
    "hello": "This is a WgContainer module"
  }
}
</i18n>

<template>
  <div class="wg-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WgContainer',
  }
</script>
<style scoped lang="scss">
.wg-container {
  width: 100%;
  margin: auto;
}
</style>
