<template>
  <div class="wg-kit">
    <div class="settings">
      <wg-i18n-selector />  
      <wg-theme-selector />
    </div>
		<wg-kit-colors />
		<wg-kit-text />
  </div>
</template>

<script> 
import WgI18nSelector from '@/components/WgI18nSelector';
import WgThemeSelector from '@/components/WgThemeSelector';
import WgKitColors from './WgKitColors';
import WgKitText from './WgKitText';

export default {
	name: 'WgKit',
	components: {
    WgI18nSelector,
    WgThemeSelector,
    WgKitColors,
    WgKitText,
  },
}
</script>
<style lang="scss" scoped>
.wg-kit {
  box-sizing: border-box;
  padding: 2rem;
  margin: auto;
  > * {
    margin-bottom: 6rem;
  }
  .settings {
    display: flex;
    margin-bottom: 2rem;
    > * {
      margin-right: 1rem;
    }
  }
}
</style>
