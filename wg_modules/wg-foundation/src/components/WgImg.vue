<template>
  <figure ref="figure">
    <img :src="path" ref="img" @load="onLoad($event)">
    <figcaption v-if="$slots.default">
      <slot/>
    </figcaption>
  </figure>
</template>

<script>
import Vue from "vue";

export default {
  name: "WgImg",
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
    path() {
      const url = new URL(`http://localhost/widgrid/wg_api/image_crop.php`);
      for (const prop of Object.keys(this.$props)) {
        if (this[prop]) {
          url.searchParams.append(prop, this[prop]);
        }
      }
      return url;
    }
  },
  methods: {
    onLoad($event) {
      this.$refs.figure.style.maxWidth = `${this.$refs.img.naturalWidth}px`;
    }
  }
};
</script>

<style scoped lang="scss">
figure {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0.24em;
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
