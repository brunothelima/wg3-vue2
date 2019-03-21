<i18n>
{
  "pt": {
    "hello": "Este é um componente admin!"
  },
  "en": {
    "hello": "This is an admin component!"
  }
}
</i18n>

<template>
  <div id="app">
    <wg-container>
      <wg-i18n-selector />
      {{ $t('hello') }}<br>
      {{ $t('WgCore.hello') }}<br>
      {{ $t('WgFoundation.hello') }}<br>
    </wg-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {

  }
}
</script>

<style lang="scss">

</style>