<template>
	<button @click="onClick($event)" :class="[
		'WgButton',
		{'WgButton--small': size === 'small'},
		{'WgButton--large': size === 'large'}
	]">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'WgButton',
		props: {
			size: {
				type: String,
				default: null
			},
		},
		methods: {
			onClick(e) {
				this.$store.commit('WgFoundation/increment');
			}
		},
	}
</script>

<style lang="scss" scoped>
.WgButton {
	padding: var(--gutter, #{$gutter});
	&--large {
		padding: calc(var(--gutter, #{$gutter}) * 2);
	}
	&--small {
		padding: calc(var(--gutter, #{$gutter}) / 2);
	}
}
</style>