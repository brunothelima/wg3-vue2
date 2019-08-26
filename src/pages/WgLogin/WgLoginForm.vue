<i18n>
{
  "pt": {
    "button": "Enviar",
    "form": {
      "username": {
        "label": "Digite seu e-mail",
        "placeholder": "ex: email@exemplo.com.br",
        "required": "Input obrigatório",
        "email": "E-mail inválido"
      },
      "password": {
        "label": "Digite sua senha",
        "placeholder": "Senha",
        "required": "Input obrigatório"
      }
    }
  },
  "en": {
    "button": "Send",
    "form": {
      "username": {
        "label": "Type your e-mail",
        "placeholder": "ex: email@example.com",
        "required": "Required input",
        "email": "invalid e-mail"
      },
      "password": {
        "label": "Type your password",
        "placeholder": "password",
        "required": "Required input"
      }
    }
  }
}
</i18n>

<template>
  <wg-form @success="login($event)" :schema="schema" :i18n="$i18n">
    <footer>
      <a href>Esqueci minha senha</a>
      <wg-button model="glassy" :reverse="true" icon="icon-arrow-right">Login</wg-button>
    </footer>
  </wg-form>
</template>

<script>
import AuthMixin from '@/mixins/AuthMixin.js'
import WgButton from '@/components/WgButton'
import WgForm from '@/components/WgForm'

export default {
  name: 'WgLogin',
  mixins: [AuthMixin],
  components: {
    WgForm,
    WgButton
  },
  data () {
    return {
      schema: [
        // EMAIL INPUT
        {
          type: 'text',
          name: 'username',
          label: 'form.username.label',
          placeholder: 'form.username.placeholder',
          validations: {
            required: {
              message: 'form.username.required'
            },
            email: {
              message: 'form.username.email'
            }
          }
        },
        // PASSWORD INPUT
        {
          type: 'password',
          name: 'password',
          label: 'form.password.label',
          placeholder: 'form.password.placeholder',
          validations: {
            required: {
              message: 'form.password.required'
            }
          }
        }
      ]
    }
  }
}
</script>
