<i18n>
{
  "pt": {
    "title": "Imagens",
    "landscape": "Paisagem",
    "portrait": "Retrato",
    "square": "Quadro",
    "smart-on": "Crop inteligente ligado",
    "smart-off": "Crop inteligente desligado"
  },
  "en": {
    "title": "Images",
    "landscape": "Landscape",
    "portrait": "Portrait",
    "square": "Square",
    "smart-on": "Smart crop on",
    "smart-off": "Smart crop off"
  }
}
</i18n>

<template>
  <section class="images-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <div>
      <h6>{{ $t('smart-off') }}</h6>
      <div>
        <wg-img src="image_before3.jpg" :w="182" ratio="16:9">{{ $t("landscape") }} 16:9</wg-img>
        <wg-img src="image_before4.jpg" :w="182" ratio="4:3">{{ $t("landscape") }} 4:3</wg-img>
        <wg-img src="image_before5.jpg" :w="182" ratio="1:1">{{ $t("square") }} 1:1</wg-img>
        <wg-img src="image_before3.jpg" :w="182" ratio="3:4">{{ $t("portrait") }} 3:4</wg-img>
        <wg-img src="image_before4.jpg" :w="182" ratio="9:16">{{ $t("portrait") }} 9:16</wg-img>
      </div>
      <h6>{{ $t('smart-on') }}</h6>
      <div class="reverse">
        <wg-img src="image_before3.jpg" :w="182" ratio="16:9" :smart="true">{{ $t("landscape") }} 16:9</wg-img>
        <wg-img src="image_before4.jpg" :w="182" ratio="4:3" :smart="true">{{ $t("landscape") }} 4:3</wg-img>
        <wg-img src="image_before5.jpg" :w="182" ratio="1:1" :smart="true">{{ $t("square") }} 1:1</wg-img>
        <wg-img src="image_before3.jpg" :w="182" ratio="3:4" :smart="true">{{ $t("portrait") }} 3:4</wg-img>
        <wg-img src="image_before4.jpg" :w="182" ratio="9:16" :smart="true">{{ $t("portrait") }} 9:16</wg-img>
      </div>
    </div>
  </section>
</template>

<script>
import WgImg from '@/components/WgImg'

export default {
  name: 'ImagesDemo',
  components: {
    WgImg
  }
}
</script>

<style lang="scss" scoped>
.images-demo {
  /deep/ figure {
    margin: 0.5em;
    figcaption {
      align-self: center;
    }
  }
  > h1 {
    color: var(--color-a-1);
  }
  > div > div {
    overflow: auto;
    width: 100%;
    white-space: nowrap;
    margin-bottom: 1em;
    figure {
      display: inline-block;
      vertical-align: top;
      white-space: normal;
    }
  }
}
</style>
