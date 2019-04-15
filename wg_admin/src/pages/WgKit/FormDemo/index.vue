<i18n src="./locales.json"></i18n>

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
  data() {
    return {
      schema: [
        {
          type: "text",
          name: "input_text",
          label: "form.input_text.label",
          placeholder: "form.input_text.placeholder",
          events: {
            focus: () => {}
          },
          validations: {
            required: {
              message: "form.input_text.required"
            },
            minlength: {
              limit: 20,
              message: "form.input_text.minlength"
            },
          }
        },
        {
          type: "select",
          name: "input_select",
          label: "form.input_select.label",
          placeholder: "form.input_select.placeholder",
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
          type: "textarea",
          name: "input_textarea",
          label: "form.input_textarea.label",
          placeholder: "form.input_textarea.placeholder",
          validations: {
            required: {
              message: "form.input_textarea.required"
            },
            minlength: {
              limit: 50,
              message: "form.input_textarea.minlength"
            }
          }
        },
        {
          type: "radio",
          name: "input_radio",
          label: "form.input_radio.label",
          placeholder: "form.input_radio.placeholder",
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
        {
          type: "checkbox",
          name: "input_checkbox",
          label: "form.input_checkbox.label",
          title: "form.input_checkbox.title",
          checked: false
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
