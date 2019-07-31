<i18n>
{
  "pt": {
    "title": "Cores Primárias"
  },
  "en": {
    "title": "Primary colors"
  }
}
</i18n>

<template>
  <div class="primary-colors">
    <h6>{{ $t('title') }}</h6>
    <color-palette class="primary" :range="7" cssVar="--color-a" />
  </div>
</template>

<script>
import ColorPalette from './ColorPalette'

export default {
  name: 'PrimaryColors',
  components: {
    ColorPalette
  }
}
</script>

<style lang="scss" scoped>
.primary-colors {
  h6 {
    text-align: center;
  }
  /deep/ li:nth-child(1n + 4) {
    color: var(--color-x-1);
  }
}

</style>
