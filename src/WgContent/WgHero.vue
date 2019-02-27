<template>
	<div class="WgHero">
		<wg-heading level="h1">This is a H1 heading</wg-heading>
		<wg-heading level="h4">This is a H4 heading</wg-heading>
		<wg-button size="large">store1</wg-button>
		<button @click="onClick()">store2</button>
	</div>
</template>

<script>
	import WgHeading from './../WgFoundation/WgHeading.vue';
	import WgButton from './../WgFoundation/WgButton.vue';

	export default {
		name: 'WgHero',
		components: {
			WgHeading,
			WgButton
		},
		methods: {
			onClick() {
				this.$store.commit('WgContent/increment');
			}
		}	
	}
</script>

<style lang="scss" scoped>
.WgHero {
	background: #CCC;
}
</style>