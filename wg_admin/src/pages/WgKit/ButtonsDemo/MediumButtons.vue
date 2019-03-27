<i18n>
  {
    "pt": {
      "title": "Botão Médio"
    },
    "en": {
      "title": "Medium Button"
    }
  }
</i18n>

<template>
<div class="medium-buttons">
    <code> &lt;wg-button model="glassy"&gt;title&lt;wg-button&gt; </code>
    <buttons-list model="glassy" size="medium" :title="$t('title')" />
 </div>
</template>

<script> 
import ButtonsList from './ButtonsList'

export default {
  name: 'MediumButtons',
  components: {
    ButtonsList
  }
}
</script>
