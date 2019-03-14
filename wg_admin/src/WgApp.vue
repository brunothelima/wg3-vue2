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
    <WgContainer>
      {{ $t('hello') }}<br>
      {{ $t('WgAdmin.hello') }}<br>
      {{ $t('WgCore.hello') }}<br>
      {{ $t('WgFoundation.hello') }}<br>
    </WgContainer>
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