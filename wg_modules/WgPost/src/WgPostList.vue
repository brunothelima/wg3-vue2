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
  <div :class="['WgPostList']">
    <ul>
      <li>Post A</li>
      <li>Post B</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'WgContainer',
  }
</script>
<style scoped lang="scss">
.WgPostList {
  display: block;
}
</style>
