<i18n>
{
  "pt": {
    "buttons": "Botões",
    "colors": "Colors",
    "form": "Formulário",
    "text": "Texto",
    "actions": "Ações especiais",
    "icons": "Icones",
    "images": "Imagens"
  },
  "en": {
    "buttons": "Buttons",
    "colors": "Colors",
    "form": "Formulário",
    "text": "Text",
    "actions": "Special Actions",
    "icons": "Icons",
    "images": "Images"
  }
}
</i18n>

<template>
  <aside class="aside-menu">
    <header>
      <img src="@/assets/img/logo-vtc.svg" />
      <sup>(Ui-kit)</sup>
    </header>
    <nav>
      <router-link to="/wg-kit/buttons">
        <span>{{ $t('buttons') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/colors">
        <span>{{ $t('colors') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/form">
        <span>{{ $t('form') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/text">
        <span>{{ $t('text') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/actions">
        <span>{{ $t('actions') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/icons">
        <span>{{ $t('icons') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
      <router-link to="/wg-kit/images">
        <span>{{ $t('images') }}</span>
        <wg-icon id="wg-icon-arrow-right" />
      </router-link>
    </nav>
  </aside>
</template>

<script>
import WgIcon from "@/components/WgIcon";

export default {
  name: "AsideMenu",
  components: {
    WgIcon
  }
};
</script>

<style lang="scss">
.aside-menu {
  position: fixed;
  z-index: 1;
  height: 100vh;
  min-width: 300px;
  background-color: var(--color-x-11);
  border-right: 1px solid var(--color-x-10);
  header {
    display: flex;
    align-items: center;
    padding: 1.5em 1em;
    background-color: var(--color-x-10);
    img {
      display: block;
    }
    sup {
      font-size: 8px;
      color: var(--color-x-5);
      text-transform: none;
      transform: translateX(-100%) translateY(-13px);
    }
  }
  nav {
    display: flex;
    flex-flow: column;
    border-top: 1px solid var(--color-x-10);
    a {
      display: flex;
      align-items: center;
      padding: 1em;
      border-bottom: 1px solid var(--color-x-10);
      text-decoration: none;
      span {
        flex: 1;
      }
      i {
        color: inherit;
      }
      &:hover,
      &.router-link-active {
        color: var(--color-x-5);
      }
    }
  }
}
</style>
