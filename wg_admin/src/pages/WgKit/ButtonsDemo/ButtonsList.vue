<i18n>
  {
    "pt": {
      "disabled": "Desabilitado"
    },
    "en": {
      "disabled": "Disabled"
    }
  }
</i18n>

<template>
  <div :class="`${size}-buttons-list`">
    <wg-button :size="size" :model="model">Button</wg-button>
    <wg-button :size="size" :model="model" icon="icontest">Icon Left</wg-button>
    <wg-button :size="size" :model="model" :reverse="true" icon="icontest">Icon Right</wg-button>
    <wg-button :size="size" :model="model" :hover="true">Hover</wg-button>
    <wg-button :size="size" :model="model" :active="true">Active</wg-button>
    <wg-button :size="size" :model="model" :disabled="true">Disabled</wg-button>
  </div>
</template>

<script> 
export default {
  name: 'ButtonsList',
  props: {
    size: String,
    title: String,
    model: {
      type: String,
      default: 'glassy'
    }
  }
}
</script>

<style lang="scss" scoped>
[class*="-buttons-list"] {
  display: flex;
  align-items: flex-end;
}
</style>
