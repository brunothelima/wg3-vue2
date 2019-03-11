<template>
	<component :is="level">
		<slot></slot>
	</component>
</template>

<script>
	export default {
		name: 'WgHeading',
		props: {
			level: {
				type: String,
				default: 'h1'
			}
		}
	}
</script>