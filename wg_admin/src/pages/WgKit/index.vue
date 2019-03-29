<template>
  <div class="wg-kit">
    <container> 
      <page-settings />
      <colors-demo />
      <text-demo />
      <buttons-demo />
      <page-settings />
      <wg-img src="image_before.webp" :height="200" :width="200" :x="230" :y="460">My caption</wg-img>
    </container>
  </div>
</template>

<script> 
import PageSettings from './PageSettings';
import ColorsDemo from './ColorsDemo/';
import TextDemo from './TextDemo/';
import ButtonsDemo from './ButtonsDemo/';

export default {
	name: 'WgKit',
	components: {
    PageSettings,
    ColorsDemo,
    TextDemo,
    ButtonsDemo
  },
}
</script>
<style lang="scss" scoped>
.wg-kit {
  box-sizing: border-box;
  padding: 2rem 0;
  section, .page-settings{
    margin-bottom: 10rem;
  }
  /deep/ figure {
    margin: 2rem;
  }
}
</style>
