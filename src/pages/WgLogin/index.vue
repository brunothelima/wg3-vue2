<i18n>
{
	"pt": {
    "button": "Enviar",
    "continue": "Você precisa estar logado para continuar",
    "form": {
      "username": {
        "label": "E-mail",
        "placeholder": "ex: email@exemplo.com.br",
        "required": "Input obrigatório",
        "email": "E-mail inválido"
      },
      "password": {
        "label": "Senha",
        "placeholder": "Senha",
        "required": "Input obrigatório"
      }
    }
	},
	"en": {
    "button": "Send",
    "continue": "You must be logged in to continue",
    "form": {
      "username": {
        "label": "E-mail",
        "placeholder": "ex: email@example.com",
        "required": "Required input",
        "email": "invalid e-mail"
      },
      "password": {
        "label": "Password",
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
        <p>{{ $t('continue')}}</p>
        <wg-form @success="login($event)" :schema="schema" :i18n="$i18n">
          <footer>
            <a href="">Esqueci minha senha</a>
            <wg-button model="glassy" :reverse="true" icon="icon-arrow-right">Login</wg-button>
          </footer>
        </wg-form>
      </div>
    </wg-container>
  </div>
</template>

<script>
import { POST } from "@/vendors/js/api.js";
import AuthMixin from '@/mixins/AuthMixin.js';
import WgPageSettings from "@/components/WgPageSettings";
import WgContainer from "@/components/WgContainer";
import WgButton from "@/components/WgButton";
import WgForm from "@/components/WgForm";

export default {
  name: "WgLogin",
  mixins: [AuthMixin],
  components: {
    WgForm,
    WgButton,
    WgContainer,
    WgPageSettings
  },
  data() {
    return {
      schema: [
        // EMAIL INPUT
        {
          type: "text",
          name: "username",
          label: "form.username.label",
          placeholder: "form.username.placeholder",
          validations: {
            required: {
              message: "form.username.required"
            },
            email: {
              message: "form.username.email"
            }
          }
        },
        // PASSWORD INPUT
        {
          type: "password",
          name: "password",
          label: "form.password.label",
          placeholder: "form.password.placeholder",
          validations: {
            required: {
              message: "form.password.required"
            }
          }
        }
      ]
    };
  },
};
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
      margin: 0 auto 2em;
    }
    p {
      margin-bottom: 3em;
      font-size: $font-size-xl;
      text-align: center;
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-size: $font-size-xs;
      }
    }
  }
}
</style>
