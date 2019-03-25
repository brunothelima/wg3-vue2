<i18n>
{
  "pt": {
    "primary-colors": "Cores Primárias",
    "secondary-colors": "Cores Secundarias",
    "system-colors": "Cores do sistema"
  },
  "en": {
    "primary-colors": "Primary colors",
    "secondary-colors": "Secondary colors",
    "system-colors": "System colors"
  }
}
</i18n>

<template>
  <div class="wg-kit-colors">
		<wg-heading tag="h1">{{$t('primary-colors')}}:</wg-heading>
    <ul class="colors-a">
			<li v-for="(_, index) in new Array(7)" :key="`color-a-${index+1}`"
				:class="`color-a-${index+1}`">			
			</li>
		</ul>
		<wg-heading tag="h1">{{$t('secondary-colors')}}:</wg-heading>
		<ul class="colors-b">
			<li v-for="(_, index) in new Array(7)" :key="`color-b-${index+1}`"
				:class="`color-b-${index+1}`">			
			</li>
		</ul>
		<wg-heading tag="h1">{{$t('system-colors')}}:</wg-heading>
		<ul class="colors-x">
			<li v-for="(_, index) in new Array(11)" :key="`color-x-${index+1}`"
				:class="`color-x-${index+1}`">			
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
		padding: 0;
		margin: 0 -8px $gutter * 4;
		list-style: none;
		li {
			margin: 0 8px;
			height: 100px;
			width: 200px;
			@for $index from 1 through 7 {
				&.color-a-#{$index} {
					background-color: var(--color-a-#{$index});
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
