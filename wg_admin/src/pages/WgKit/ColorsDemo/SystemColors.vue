<i18n>
{
  "pt": {
    "title": "Cores do Sistema"
  },
  "en": {
    "title": "System colors"
  }
}
</i18n>

<template>
  <div class="system-colors">
		<h5>{{ $t('title') }}:</h5>
    <ul>
			<li v-for="color in ['info', 'success', 'warning', 'error']" 
				:key="`color-${color}`"
				:class="`color-${color}`">
			</li>
		</ul>
  </div>
</template>

<script> 
export default {
	name: 'SystemCollors',
}
</script>
<style lang="scss" scoped>
.system-colors ul li {		
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
}
</style>
