<i18n>
{
  "pt": {
    "title": "Cores Secundárias"
  },
  "en": {
    "title": "Secondary colors"
  }
}
</i18n>

<template>
  <div class="secondary-colors">
    <h6>{{ $t('title') }}</h6>
    <color-palette class="secondary" :range="7" cssVar="--color-b" />
  </div>
</template>

<script>
import ColorPalette from './ColorPalette'

export default {
  name: 'SeconaryColors',
  components: {
    ColorPalette
  }
}
</script>

<style lang="scss" scoped>
.secondary-colors {
  h6 {
    text-align: center;
  }
  /deep/ li:nth-child(1n + 4) {
    color: var(--color-x-1);
  }
}
</style>
