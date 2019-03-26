<i18n>
{
  "pt": {
    "title": "Cores Primárias"
  },
  "en": {
    "title": "Primary colors"
  }
}
</i18n>

<template>
  <div class="primary-collors">
		<h5>{{ $t('title') }}:</h5>
    <ul>
			<li v-for="(_, index) in new Array(7)" :key="`color-a-${index+1}`"
				:class="`color-a-${index+1}`">			
			</li>
		</ul>
  </div>
</template>

<script> 
export default {
	name: 'PrimaryCollors',
}
</script>
<style lang="scss" scoped>
.primary-collors ul li {		
	@for $index from 1 through 7 {
		&.color-a-#{$index} {
			background-color: var(--color-a-#{$index});
		}
	}
}
</style>
