<i18n>
{
  "pt": {
     "title": "Palheta de cores"
  },
  "en": {
		"title": "Color Palette"
  }
}
</i18n>

<template>
  <section class="colors-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <div class="css-vars">
      <primary-colors />
      <secondary-colors />
      <grayish-colors />
    </div>
    <system-colors />
    <css-gradient />
  </section>
</template>

<script>
import PrimaryColors from './PrimaryColors'
import SecondaryColors from './SecondaryColors'
import GrayishColors from './GrayishColors'
import SystemColors from './SystemColors'
import Gradient from './Gradient'

export default {
  name: 'ColorPallet',
  components: {
    PrimaryColors,
    SecondaryColors,
    GrayishColors,
    SystemColors,
    'css-gradient': Gradient
  }
}
</script>

<style lang="scss" scoped>
.colors-demo > h1 {
  color: var(--color-a-1);
}
.css-vars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.143em;
  margin-bottom: 1.143em;
  @media screen and (max-width: #{$mobile-brakepoint}) {
    grid-template-columns: 1fr;
  }
}
.system-colors {
  margin-bottom: 4.571em;
}
</style>
