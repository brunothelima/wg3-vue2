<i18n>
{
  "pt": {
    "continue": "Você precisa estar logado para continuar"
  },
  "en": {
    "continue": "You must be logged in to continue"
  }
}
</i18n>

<template>
  <div class="wg-login">
    <wg-page-settings />
    <wg-container>
      <div class="panel">
        <img src="@/assets/img/logo-vtc.svg" alt="Widgrid" class="panel__logo" />
        <p>{{ $t('continue') }}</p>
        <wg-login-form />
      </div>
    </wg-container>
  </div>
</template>

<script>
import WgContainer from '@/components/WgContainer'
import WgPageSettings from '@/components/WgPageSettings'
import WgLoginForm from './WgLoginForm'

export default {
  name: 'WgLogin',
  components: {
    WgContainer,
    WgPageSettings,
    WgLoginForm
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
      margin: 0 auto 2em;
    }
    p {
      margin-bottom: 3em;
      font-size: $font-size-xl;
      text-align: center;
    }
    /deep/ footer {
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
