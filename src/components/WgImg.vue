<template>
  <figure ref="figure">
    <img :src="path" ref="img" @load="onLoad($event)" />
    <figcaption v-if="$slots.default">
      <slot />
    </figcaption>
  </figure>
</template>

<script>
import { urlFromServer } from '@/vendors/js/api'

export default {
  name: 'WgImg',
  props: {
    w: Number,
    h: Number,
    x: Number,
    y: Number,
    src: String,
    ratio: String,
    smart: Boolean
  },
  computed: {
    path () {
      const url = new URL(`${urlFromServer('img/image_crop.php')}`)
      for (const prop in this.$props) {
        if (this[prop]) {
          url.searchParams.append(prop, this[prop])
        }
      }
      return url
    }
  },
  methods: {
    onLoad ($event) {
      this.$refs.figure.style.maxWidth = `${this.$refs.img.naturalWidth}px`
    }
  }
}
</script>

<style scoped lang="scss">
figure {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--img-border-radius);
  background-color: var(--color-x-9);
  align-items: center;
  justify-content: center;
  img {
    display: block;
    object-fit: contain;
  }
  figcaption {
    padding: 1em;
    align-self: flex-start;
  }
}
</style>
