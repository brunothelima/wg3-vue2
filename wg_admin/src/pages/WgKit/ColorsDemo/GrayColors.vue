<i18n>
{
  "pt": {
    "title": "Tons de cinza"
  },
  "en": {
    "title": "Gray shades colors"
  }
}
</i18n>

<template>
  <div class="gray-color">
		<h5>{{ $t('title') }}:</h5>
    <ul>
			<li v-for="(_, index) in new Array(11)" :key="`color-x-${index+1}`"
				:class="`color-x-${index+1}`">			
			</li>
		</ul>
  </div>
</template>

<script> 
export default {
	name: 'GrayCollors',
}
</script>
<style lang="scss" scoped>
.gray-color ul li {		
	@for $index from 1 through 11 {
		&.color-x-#{$index} {
			background-color: var(--color-x-#{$index});
		}
	}
}
</style>
