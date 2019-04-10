<i18n>
{
  "pt": {
    "title": "Formulário",
    "form": {
      "first-name": {
        "label": "Seu nome",
        "placeholder": "Escreva aqui"
      }
    }
  },
  "en": {
    "title": "Form inputs",
    "form": {
      "first-name": {
        "label": "First name",
        "placeholder": "Type heere"
      }
    }
  }
}
</i18n>

<template>
  <section class="form-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <wg-form :schema="schema" :i18n="$i18n"/>
  </section>
</template>

<script> 
export default {
  name: 'FormDemo',
  data() {
    return {
      schema: [
        {
          type: 'text',
          name: 'first_name',
          value: 'Bruno Lima',
          label: 'form.first-name.label',
          placeholder: 'form.first-name.placeholder'
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.fieldset {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}
</style>
