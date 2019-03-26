<i18n>
{
  "pt": {
    "title": "Cores Secundárias"
  },
  "en": {
    "title": "Secondary colors"
  }
}
</i18n>

<template>
  <div class="secondary-colors">
		<h5>{{ $t('title') }}:</h5>
    <ul>
			<li v-for="(_, index) in new Array(7)" :key="`color-b-${index+1}`"
				:class="`color-b-${index+1}`">			
			</li>
		</ul>
  </div>
</template>

<script> 
export default {
	name: 'SecondaryCollors',
}
</script>
<style lang="scss" scoped>
.secondary-colors ul li {		
	@for $index from 1 through 7 {
		&.color-b-#{$index} {
			background-color: var(--color-b-#{$index});
		}
	}
}
</style>
