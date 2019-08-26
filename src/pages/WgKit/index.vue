<template>
  <div class="wg-kit">
    <aside-menu />
    <main>
      <wg-container>
        <wg-page-settings>
          <wg-button @click.native="logout()" model="glassy">Logout</wg-button>
        </wg-page-settings>
        <router-view />
      </wg-container>
    </main>
  </div>
</template>

<script>
import AuthMixin from '@/mixins/AuthMixin.js'
import WgPageSettings from '@/components/WgPageSettings'
import WgContainer from '@/components/WgContainer'
import WgButton from '@/components/WgButton'
import AsideMenu from './AsideMenu'

// Demo sections
export default {
  name: 'WgKit',
  mixins: [AuthMixin],
  components: {
    WgContainer,
    WgPageSettings,
    WgButton,
    AsideMenu
  }
}
</script>

<style lang="scss" scoped>
.wg-kit {
  display: grid;
  grid-template-columns: 300px auto;
  box-sizing: border-box;
  section,
  .aside-menu {
    grid-column: 1 / 2;
  }
  main {
    padding: 2rem 0;
    grid-column: 2 / 3;
  }
  .wg-page-settings {
    margin-bottom: 5rem;
  }
}
</style>
