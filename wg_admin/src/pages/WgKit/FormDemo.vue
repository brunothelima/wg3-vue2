<i18n>
{
  "pt": {
    "title": "Formulário",
    "form": {
      "input_text": {
        "label": "Campo de texto",
        "placeholder": "Escreva aqui",
        "required": "Input obrigatório",
        "minlength": "Mínimo de 20 caracteres"
      },
      "input_select": {
        "label": "Campo de seleção",
        "placeholder": "Selecione uma opção",
        "required": "Input obrigatório",
        "options": {
          "a": "Option A",
          "b": "Option B",
          "c": "Option C"
        }
      },
      "input_radio": {
        "label": "Campo de seleção radial",
        "placeholder": "Selecione uma opção",
        "required": "Input obrigatório",
        "options": {
          "a": "Option A",
          "b": "Option B",
          "c": "Option C"
        }
      }
    }
  },
  "en": {
    "title": "Form inputs",
    "form": {
      "input_text": {
        "label": "First name",
        "placeholder": "Type here",
        "required": "Required input",
        "minlength": "Minimum of 20 characters"
      },
      "input_select": {
        "label": "Gender",
        "placeholder": "Select one option",
        "required": "Required input",
        "options": {
          "a": "Option A",
          "b": "Option B",
          "c": "Option C"
        }
      },
       "input_radio": {
        "label": "Radio input",
        "placeholder": "Selecione uma opção",
        "required": "Input obrigatório",
        "options": {
          "a": "Option A",
          "b": "Option B",
          "c": "Option C"
        }
      }
    }
  }
}
</i18n>

<template>
  <section class="form-demo">
    <h1>{{ $t('title') }}</h1>
    <hr>
    <wg-form :schema="schema" :i18n="$i18n">
      <wg-button model="glassy">Enviar</wg-button>
    </wg-form>
  </section>
</template>

<script>
export default {
  name: "FormDemo",
  methods: {
    test() {
      console.log("asdasdasd");
    }
  },
  data() {
    return {
      schema: [
        {
          type: "text",
          name: "input_text",
          value: "",
          label: "form.input_text.label",
          placeholder: "form.input_text.placeholder",
          disabled: false,
          validations: {
            required: {
              message: "form.input_text.required"
            },
            minlength: {
              limit: 20,
              message: "form.input_text.minlength"
            }
          }
        },
        {
          type: "select",
          name: "input_select",
          value: "",
          label: "form.input_select.label",
          placeholder: "form.input_select.placeholder",
          disabled: false,
          options: [
            { value: "a", label: "form.input_select.options.a" },
            { value: "b", label: "form.input_select.options.b" },
            { value: "c", label: "form.input_select.options.c" }
          ],
          validations: {
            required: {
              message: "form.input_select.required"
            }
          }
        },
        {
          type: "radio",
          name: "input_radio",
          value: "",
          label: "form.input_radio.label",
          placeholder: "form.input_radio.placeholder",
          disabled: false,
          options: [
            { value: "a", label: "form.input_radio.options.a" },
            { value: "b", label: "form.input_radio.options.b" },
            { value: "c", label: "form.input_radio.options.c" }
          ],
          validations: {
            required: {
              message: "form.input_radio.required"
            }
          }
        },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.form-demo > h1 {
  color: var(--color-a-1);
}
// .form-demo .wg-form {
//   display:  flex;
// }
</style>
