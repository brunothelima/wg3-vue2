<template>
  <div class="wg-page-settings">
    <wg-locale-selector />
    <wg-theme-selector />
    <slot />
  </div>
</template>

<script>
import WgLocaleSelector from '@/components/WgLocaleSelector'
import WgThemeSelector from '@/components/WgThemeSelector'

export default {
  name: 'WgPageSettings',
  components: {
    WgLocaleSelector,
    WgThemeSelector
  }
}
</script>
<style lang="scss" scoped>
.wg-page-settings {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  > * {
    margin-right: 1rem;
    margin-bottom: 0;
  }
}
</style>
