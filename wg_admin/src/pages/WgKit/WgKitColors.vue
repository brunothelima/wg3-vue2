<i18n>
{
  "pt": {
    "primary-colors": "Cores Primárias",
    "secondary-colors": "Cores Secundárias",
    "monochrome-colors": "Cores Monocromáticas",
    "system-colors": "Cores do Sistema"
  },
  "en": {
    "primary-colors": "Primary colors",
    "secondary-colors": "Secondary colors",
		"monochrome-colors": "Monochrome colors",
		"system-colors": "System colors"
  }
}
</i18n>

<template>
  <div class="wg-kit-colors">
		<h5>{{ $t('primary-colors') }}:</h5>
    <ul class="colors-a">
			<li v-for="(_, index) in new Array(7)" :key="`color-a-${index+1}`"
				:class="`color-a-${index+1}`">			
			</li>
		</ul>
		<h5 tag="h1">{{ $t('secondary-colors') }}:</h5>
		<ul class="colors-b">
			<li v-for="(_, index) in new Array(7)" :key="`color-b-${index+1}`"
				:class="`color-b-${index+1}`">			
			</li>
		</ul>
		<h5>{{ $t('monochrome-colors') }}:</h5>
		<ul class="colors-x">
			<li v-for="(_, index) in new Array(11)" :key="`color-x-${index+1}`"
				:class="`color-x-${index+1}`">			
			</li>
		</ul>
		<h5>{{ $t('system-colors') }}</h5>
		<ul>
			<li v-for="color in ['info', 'success', 'warning', 'error']" :key="`color-${color}`"
				:class="`color-${color}`">
			</li>
		</ul>
  </div>
</template>

<script> 
export default {
	name: 'WgKitColors',
}
</script>
<style lang="scss" scoped>
.wg-kit-colors {
	ul {
		display: flex;
		list-style: none;
		margin-bottom: 2.857rem;
		li {
			flex: 1;
			height: 5rem;
			&.color-info { 
				background-color: $color-info; 
			}
			&.color-error { 
				background-color: $color-error; 
			}
			&.color-warning { 
				background-color: $color-warning;
			}
			&.color-success { 
				background-color: $color-success; 
			}
			@for $index from 1 through 7 {
				&.color-a-#{$index} {
					background-color: var(--color-a-#{$index});
					&::before {
						content: var(--color-a-#{$index});
					}
				}
				&.color-b-#{$index} {
					background-color: var(--color-b-#{$index});
				}
			}
			@for $index from 1 through 11 {
				&.color-x-#{$index} {
					background-color: var(--color-x-#{$index});
				}
			}
		}
	}
}
</style>
