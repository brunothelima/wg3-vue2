
<template>
  <div class="colors-demo">
		<primary-colors />
		<secondary-colors />
		<gray-colors />
		<system-colors />
  </div>
</template>

<script> 

import PrimaryColors from './PrimaryColors'
import SecondaryColors from './SecondaryColors'
import GrayColors from './GrayColors'
import SystemColors from './SystemColors'

export default {
	name: 'ColorsDemo',
	components: {
		PrimaryColors,
		SecondaryColors,
		GrayColors,
		SystemColors
	}
}
</script>
<style lang="scss" scoped>
.colors-demo /deep/ {
	ul {
		display: flex;
		list-style: none;
		margin-bottom: 2.857rem;
		li {
			flex: 1;
			height: 5rem;
		}
	}
}
</style>
