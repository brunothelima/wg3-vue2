<template>
  <div class="wg-kit">
    <container> 
      <page-settings />
      <colors-demo />
      <text-demo />
      <buttons-demo />
      <page-settings />
      <img src="http://localhost:8081/?img=image_before.webp&ratio=4:3&width=300&attention=true" alt="">
      <img src="http://localhost:8081/?img=image_before.webp&ratio=16:9&width=300&attention=true" alt="">
      <img src="http://localhost:8081/?img=image_before.webp&ratio=3:4&height=225&attention=true" alt="">
      <img src="http://localhost:8081/?img=image_before.webp&ratio=9:16&width=300&attention=true" alt="">
      <img src="http://localhost:8081/?img=image_before.webp&ratio=1:1&width=300&attention=true" alt="">
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
}
</style>
