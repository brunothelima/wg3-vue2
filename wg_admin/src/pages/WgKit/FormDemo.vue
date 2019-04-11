<i18n>
{
  "pt": {
    "title": "Formulário",
    "form": {
      "first_name": {
        "label": "Nome",
        "placeholder": "Escreva aqui",
        "required": "Input obrigatório",
        "minlength": "Mínimo de 20 caracteres"
      },
      "last_name": {
        "label": "Sobrenome",
        "placeholder": "Escreva aqui",
        "required": "Input obrigatório",
        "minlength": "Mínimo de 20 caracteres"
      },
      "gender": {
        "label": "Gênero",
        "placeholder": "Selecione uma opção",
        "required": "Input obrigatório",
        "options": {
          "m": "Masculino",
          "f": "Feminino",
          "o": "Outro"
        }
      }
    }
  },
  "en": {
    "title": "Form inputs",
    "form": {
      "first_name": {
        "label": "First name",
        "placeholder": "Type here",
        "required": "Required input",
        "minlength": "Minimum of 20 characters"
      },
      "last_name": {
        "label": "Last name",
        "placeholder": "Type here",
        "required": "Required input",
        "minlength": "Minimum of 20 characters"
      },
      "gender": {
        "label": "Gender",
        "placeholder": "Select one option",
        "required": "Required input",
        "options": {
          "m": "Masculine",
          "f": "Feminine",
          "o": "Others"
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
          name: "first_name",
          value: "Bruno",
          label: "form.first_name.label",
          placeholder: "form.first_name.placeholder",
          disabled: false,
          validations: {
            required: {
              message: "form.first_name.required"
            },
            minlength: {
              limit: 20,
              message: "form.first_name.minlength"
            }
          }
        },
        {
          type: "text",
          name: "last_name",
          value: "Lima",
          label: "form.last_name.label",
          placeholder: "form.last_name.placeholder",
          disabled: false,
          validations: {
            required: {
              message: "form.first_name.required"
            },
            minlength: {
              limit: 20,
              message: "form.first_name.minlength"
            }
          }
        },
        {
          type: "select",
          name: "gender",
          value: "M",
          label: "form.gender.label",
          placeholder: "form.gender.placeholder",
          disabled: false,
          options: [
            { value: "M", label: "form.gender.options.m" },
            { value: "F", label: "form.gender.options.f" },
            { value: "O", label: "form.gender.options.o" }
          ],
          validations: {
            required: {
              message: "form.gender.required"
            }
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.form-demo > h1 {
  color: var(--color-a-1);
}
</style>
