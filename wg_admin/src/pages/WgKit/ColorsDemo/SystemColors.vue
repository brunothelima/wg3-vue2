<i18n>
{
  "pt": {
    "title": "Cores do sistema"
  },
  "en": {
    "title": "System colors"
  }
}
</i18n>

<template>
	<div class="system-colors">
		<h6>{{ $t('title') }}</h6>
		<ul>
			<li v-for="color in ['info', 'success', 'warning', 'error']" 
				:key="`color-${color}`"
				:class="`color-${color}`">
					<code>{{`$color-${color}`}}</code>
			</li>
		</ul>
	</div>
</template>

<script> 
export default {
	name: 'SystemColors',
}
</script>
<style lang="scss" scoped>
.system-colors ul {		
	display: flex;
	li {
		flex: 1;
		height: 40px;
		padding: 0.25em 1em;
		color: var(--color-x-11);
		@include flex-center();
		&.color-info { background-color: var(--color-info); }
		&.color-error { background-color: var(--color-error); }
		&.color-warning { background-color: var(--color-warning);}
		&.color-success { background-color: var(--color-success); }
	}
}
</style>
