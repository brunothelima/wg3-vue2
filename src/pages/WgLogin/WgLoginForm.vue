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
  <div class="wg-login">
    <wg-page-settings />
    <wg-container>
      <div class="panel">
        <img src="@/assets/img/logo-vtc.svg" alt="Widgrid" class="panel__logo" />
        <wg-form @success="login($event)" :schema="schema" :i18n="$i18n">
          <wg-button model="glassy">{{ $t('button') }}</wg-button>
        </wg-form>
      </div>
    </wg-container>
  </div>
</template>

<script>
import { POST } from '@/vendors/js/api.js'
import AuthMixin from '@/mixins/AuthMixin.js'
import WgPageSettings from '@/components/WgPageSettings'
import WgContainer from '@/components/WgContainer'
import WgButton from '@/components/WgButton'
import WgForm from '@/components/WgForm'

export default {
  name: 'WgLogin',
  mixins: [AuthMixin],
  components: {
    WgForm,
    WgButton,
    WgContainer,
    WgPageSettings
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

<style lang="scss" scoped>
.wg-login {
  .wg-page-settings {
    position: absolute;
    right: 2em;
    top: 2em;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .panel {
    width: 300px;
    padding: 2em;
    border: var(--card-border-width) var(--card-border-style) var(--color-x-8);
    border-radius: var(--card-border-radius);
    &__logo {
      display: block;
      margin-bottom: 3em;
    }
  }
}
</style>
