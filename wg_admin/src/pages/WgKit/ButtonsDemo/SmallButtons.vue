<i18n>
  {
    "pt": {
      "title": "Botão Pequeno"
    },
    "en": {
      "title": "Small Button"
    }
  }
</i18n>

<template>
  <div class="large-buttons">
    <code> &lt;wg-button model="glassy" size="small"&gt;title&lt;wg-button&gt; </code>
    <buttons-list model="glassy" size="small" :title="$t('title')" />
  </div>
</template>

<script> 
import ButtonsList from './ButtonsList'

export default {
  name: 'SmallButtons',
  components: {
    ButtonsList
  }
}
</script>
