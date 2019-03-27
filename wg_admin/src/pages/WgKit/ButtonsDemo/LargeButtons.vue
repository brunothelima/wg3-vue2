<i18n>
  {
    "pt": {
      "title": "Botão Grande"
    },
    "en": {
      "title": "Large Button"
    }
  }
</i18n>

<template>
  <div class="large-buttons">
    <code> &lt;wg-button model="glassy" size="large"&gt;title&lt;wg-button&gt; </code>
    <buttons-list model="glassy" size="large" :title="$t('title')" />
  </div>
</template>

<script> 
import ButtonsList from './ButtonsList'

export default {
  name: 'LargeButtons',
  components: {
    ButtonsList
  }
}
</script>
