<template>
	<div class="WgHero">
		<wg-heading level="h1">This is a H1 heading</wg-heading>
	</div>
</template>

<script>
	import WgHeading from './../wg-foundation/WgHeading.vue';
	
	export default {
		name: 'WgHero',
		components: {
			WgHeading,
		},
	}
</script>

<style lang="scss" scoped>
.WgHero {
	background: #CCC;
}
</style>