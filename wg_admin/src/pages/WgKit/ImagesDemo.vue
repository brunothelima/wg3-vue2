<i18n>
{
  "pt": {
    "title": "Imagens"
  },
  "en": {
    "title": "Images"
  }
}
</i18n>

<template>
  <section class="images-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <div>
      <wg-img src="image_before5.jpg" :w="180" ratio="16:9" :smart="true">Landscape 16:9</wg-img>
      <wg-img src="image_before5.jpg" :w="180" ratio="4:3" :smart="true">Landscape 4:3</wg-img>
      <wg-img src="image_before5.jpg" :w="180" ratio="1:1" :smart="true">Squared 1:1</wg-img>
      <wg-img src="image_before5.jpg" :w="180" ratio="3:4" :smart="true">Portrait 3:4</wg-img>
      <wg-img src="image_before5.jpg" :w="180" ratio="9:16" :smart="true">Portrait 9:16</wg-img>
    </div>
  </section>
</template>

<script> 
export default {
  name: 'ImagesDemo',
}
</script>

<style lang="scss" scoped>
.images-demo {
  /deep/ figure {
    margin: $gutter;
    figcaption {
      align-self: center;
    }
  }
  > h1 {
    color: var(--color-a-1);
  } 
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
