<template>
  <div class="confirmation">
    <header v-if="header">
      <span @click="$emit('cancel')">
        <wg-icon id="wg-icon-arrow-left" />
        <span>{{ header }}</span>
      </span>
    </header>
    <div class="confirmation__info">
      <wg-icon size="big" :id="icon" v-if="icon" />
      <p v-if="title">{{ title }}</p>
      <span v-if="text">{{ text }}</span>
    </div>
    <footer>
      <button
        v-if="buttonLeft"
        class="left"
        @click="onButtonLeftClick($event)"
        :style="`
            color: var(--color-${buttonLeft.color || 'x-6'});
            flex: ${buttonLeft.flex || 1};}
        `"
      >{{ buttonLeft.label || buttonLeft }}</button>
      <button
        v-if="buttonRight"
        class="right"
        @click="onButtonRightClick($event)"
        :style="`
          color: var(--color-${buttonRight.color || 'x-6'});
          flex: ${buttonRight.flex || 1};}
        `"
      >{{ buttonRight.label || buttonRight }}</button>
    </footer>
  </div>
</template>

<script>
import WgIcon from "@/components/WgIcon";

export default {
  name: "ModalConfirmation",
  components: {
    WgIcon
  },
  props: {
    status: String,
    header: String,
    icon: String,
    title: String,
    text: String,
    buttonLeft: [String, Object],
    buttonRight: [String, Object]
  },
  methods: {
    onButtonLeftClick(event) {
      this.$emit("buttonLeftClick");
    },
    onButtonRightClick(event) {
      this.$emit("buttonRightClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.confirmation {
  display: flex;
  flex-flow: column;
  overflow: hidden;
  width: 100%;
  max-width: 512px;
  background-color: var(--color-x-11);
  @media screen and (max-width: #{$tablet-brakepoint}) {
    height: 100%;
  }
  header {
    display: flex;
    padding: 1.5em;
    align-items: center;
    background-color: var(--color-x-10);
    color: var(--color-x-6);
    span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .wg-icon {
      margin-right: 0.5em;
    }
  }
  &__info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 1em 3em;
    min-height: 230px;
    text-align: center;
    @media screen and (max-width: #{$tablet-brakepoint}) {
      flex: 1;
    }
    p {
      margin-bottom: 0.5em;
      font-size: $font-size-xxl;
      font-weight: 700;
    }
    span {
      color: var(--color-x-6);
      font-size: var(--font-size);
      line-height: 180%;
    }
    .wg-icon {
      margin-bottom: 1rem;
      font-size: 40px;
    }
  }
  footer {
    display: flex;
    border-top: var(--card-border-width) var(--card-border-style)
      var(--color-x-8);
    button {
      padding: 1.313em;
      background-color: transparent;
      border: none;
      color: var(--color-x-6);
      font-size: $font-size-xl;
      outline: none;
      cursor: pointer;
      &:hover {
        background-color: var(--color-x-10);
      }
      &.left {
        border-right: var(--card-border-width) var(--card-border-style)
          var(--color-x-8);
      }
      &[style*="color:"] {
        font-weight: 700;
      }
    }
  }
}
</style>
