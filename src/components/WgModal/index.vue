<template>
  <div class="wg-modal">
    <div class="wg-modal__mask" @click="$emit('cancel')"></div>
    <div class="wg-modal__content">
			<slot />
    </div>
  </div>
</template>

<script>

export default {
  name: "WgModal",
  created() {
    window.addEventListener('keydown', e => {
      if (e.key == 'Escape') {
        this.$emit('cancel');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.wg-modal {
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
  &__mask {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    background: var(--color-x-11);
    opacity: 0.6;
  }
  &__content {
    overflow: hidden;
    position: relative;
    z-index: 2;
    border-radius: var(--card-border-radius);
    border: var(--card-border-width) var(--card-border-style) var(--color-x-8);
    @media screen and (max-width: #{$tablet-brakepoint}) {
      height: 100%;
    }
  }
}
</style>
