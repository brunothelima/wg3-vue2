<template>
  <div class="wg-kit">
    <page-settings />
		<colors-demo />
		<text-demo />
  </div>
</template>

<script> 
import PageSettings from './PageSettings';
import ColorsDemo from './ColorsDemo/ColorsDemo';
import TextDemo from './TextDemo';

export default {
	name: 'WgKit',
	components: {
    PageSettings,
    ColorsDemo,
    TextDemo,
  },
}
</script>
<style lang="scss" scoped>
.wg-kit {
  box-sizing: border-box;
  padding: 2rem;
  margin: auto;
}
</style>
