<template>
  <div class="wg-kit">
    <div class="options">
      <wg-i18n-selector />  
      <wg-theme-selector />
    </div>
		<wg-kit-colors />
  </div>
</template>

<script> 
import WgKitColors from './WgKitColors';
import WgI18nSelector from '@/components/WgI18nSelector';
import WgThemeSelector from '@/components/WgThemeSelector';

export default {
	name: 'WgKit',
	components: {
    WgKitColors,
    WgI18nSelector,
    WgThemeSelector,
  },
}
</script>
<style lang="scss" scoped>
.wg-kit {
	max-width: 800px;
  margin: auto;
  .options {
    padding: $gutter * 2 0;
    margin: 0 -$gutter;
    display: flex;
    > * {
      margin: 0 $gutter;
    }
  }
}
</style>
