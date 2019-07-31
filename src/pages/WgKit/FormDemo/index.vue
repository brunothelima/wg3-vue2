<i18n src="./index.json"></i18n>

<template>
  <section class="form-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <wg-form :schema="schema" :i18n="$i18n">
      <wg-button model="glassy">Enviar</wg-button>
    </wg-form>
  </section>
</template>

<script>
import WgForm from '@/components/WgForm'
import WgButton from '@/components/WgButton'

export default {
  name: 'FormDemo',
  components: {
    WgForm,
    WgButton
  },
  data () {
    return {
      schema: [
        {
          type: 'text',
          name: 'input_text',
          label: 'form.input_text.label',
          placeholder: 'form.input_text.placeholder',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus maxime, sequi eligendi aliquam nostrum quod dolores, quae quasi optio mollitia illum, at debitis. Provident, laudantium at vel tempore facere eligendi?',
          validations: {
            required: {
              message: 'form.input_text.required'
            }
          }
        },
        {
          type: 'text-dropdown',
          name: 'input_text_dropdown',
          label: 'form.input_text_dropdown.label',
          placeholder: 'form.input_text_dropdown.placeholder',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus maxime, sequi eligendi aliquam nostrum quod dolores, quae quasi optio mollitia illum, at debitis. Provident, laudantium at vel tempore facere eligendi?',
          dropdown: {
            prefix: 'form.input_text_dropdown.dropdown.prefix',
            default: 'a',
            options: [
              { value: 'a', label: 'form.input_text_dropdown.dropdown.options.a' },
              { value: 'b', label: 'form.input_text_dropdown.dropdown.options.b' },
              { value: 'c', label: 'form.input_text_dropdown.dropdown.options.c' }
            ]
          },
          validations: {
            required: {
              message: 'form.input_text_dropdown.required'
            }
          }
        },
        {
          type: 'text-button',
          name: 'input_text_button',
          label: 'form.input_text_button.label',
          placeholder: 'form.input_text_button.placeholder',
          button: 'form.input_text_button.button',
          validations: {
            required: {
              message: 'form.input_text_button.required'
            }
          }
        },
        {
          type: 'date',
          name: 'input_date',
          label: 'form.input_date.label',
          placeholder: 'form.input_date.placeholder',
          validations: {
            required: {
              message: 'form.input_date.required'
            }
          }
        },
        {
          type: 'password',
          name: 'input_password',
          label: 'form.input_password.label',
          placeholder: 'form.input_password.placeholder',
          info: 'Omnis optio esse saepe, possimus a praesentium ea fuga!',
          validations: {
            required: {
              message: 'form.input_password.required'
            }
          }
        },
        {
          type: 'select',
          name: 'input_select',
          label: 'form.input_select.label',
          placeholder: 'form.input_select.placeholder',
          selected: 'a',
          options: [
            { value: 'a', label: 'form.input_select.options.a' },
            { value: 'b', label: 'form.input_select.options.b' },
            { value: 'c', label: 'form.input_select.options.c' }
          ],
          validations: {
            required: {
              message: 'form.input_select.required'
            }
          }
        },
        {
          type: 'file',
          name: 'input_file',
          label: 'form.input_file.label',
          placeholder: 'form.input_file.placeholder',
          validations: {
            required: {
              message: 'form.input_file.required'
            }
          }
        },
        {
          type: 'money',
          name: 'input_money',
          label: 'form.input_money.label',
          placeholder: 'form.input_money.placeholder',
          currency: 'R$',
          validations: {
            required: {
              message: 'form.input_money.required'
            }
          }
        },
        {
          type: 'textarea',
          name: 'input_textarea',
          label: 'form.input_textarea.label',
          placeholder: 'form.input_textarea.placeholder',
          validations: {
            required: {
              message: 'form.input_textarea.required'
            },
            maxlength: {
              limit: 50,
              message: 'form.input_textarea.maxlength'
            }
          }
        },
        {
          type: 'select-magic',
          name: 'input_select_magic',
          label: 'form.input_select_magic.label',
          placeholder: 'form.input_select_magic.placeholder',
          selected: 'a',
          options: [
            { value: 'a', label: 'form.input_select_magic.options.a' },
            { value: 'b', label: 'form.input_select_magic.options.b' },
            { value: 'c', label: 'form.input_select_magic.options.c' }
          ],
          validations: {
            required: {
              message: 'form.input_select_magic.required'
            }
          }
        },
        {
          type: 'text-magic',
          name: 'input_text_magic',
          label: 'form.input_text_magic.label',
          placeholder: 'form.input_text_magic.placeholder',
          validations: {
            required: {
              message: 'form.input_text_magic.required'
            }
          }
        },
        {
          type: 'radio',
          name: 'input_radio',
          label: 'form.input_radio.label',
          placeholder: 'form.input_radio.placeholder',
          options: [
            { value: 'a', label: 'form.input_radio.options.a' },
            { value: 'b', label: 'form.input_radio.options.b' },
            { value: 'c', label: 'form.input_radio.options.c' }
          ],
          validations: {
            required: {
              message: 'form.input_radio.required'
            }
          }
        },
        {
          type: 'checkbox',
          value: '45',
          name: 'input_checkbox',
          label: 'form.input_checkbox.label',
          title: 'form.input_checkbox.title',
          checked: false
        },
        {
          type: 'toggle',
          value: '45',
          name: 'input_toggle',
          label: 'form.input_toggle.label',
          checked: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.form-demo > h1 {
  color: var(--color-a-1);
}
.wg-form /deep/ .wg-form__fields  {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    display: block;
  }
}
</style>
