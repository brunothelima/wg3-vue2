<i18n>
  {
    "pt": {
      "title": "Botões",
      "default": "Botão Normal",
      "disabled": "Desabilitado",
      "small": "Botão Pequeno",
      "large": "Botão Grande"
    },
    "en": {
      "title": "Buttons",
      "default": "Normal Button",
      "disabled": "Disabled",
      "small": "Small Button",
      "large": "Large Button"
    }
  }
</i18n>

<template>
  <section class="buttons-demo">
    <h1>{{ $t('title') }}</h1>
    <hr>
    <glassy-buttons />
    <clean-buttons />
  </section>
</template>

<script> 
import GlassyButtons from './GlassyButtons'
import CleanButtons from './CleanButtons'

export default {
  name: 'ButtonsDemo',
  components: {
    GlassyButtons,
    CleanButtons
  }
}
</script>

<style lang="scss" scoped>
.buttons-demo {
  > h1 {
    color: var(--color-a-1);
  }
  /deep/ {
    > div {
      margin-bottom: 4em;
    }
    [class*="-buttons-list"] {
      margin-bottom: 2em;
    }
    code {
      display: inline-block;
      padding: 0.64em 1em;
      margin-bottom: 0.5em;
      background-color: var(--color-x-3);
      color: var(--color-x-11);
      @include default-transition(#{backgorund-color, color});
    }
    .wg-button {
      margin-right: 1em;
      margin: 0.5em 1em 0.5em 0;
    }
  } 
}
</style>
