<i18n>
{
  "pt": {
    "hello": "Este é o Widgrid!"
  },
  "en": {
    "hello": "This is widgrid!"
  }
}
</i18n>

<template>
  <div id="app">
    <WgContainer>
      {{ $t('hello') }}
    </WgContainer>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">

</style>