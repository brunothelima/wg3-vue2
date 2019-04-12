<template>
	<div class="page-settings">
		<i18n-selector />  
		<theme-selector />
	</div>
</template>

<script> 
import I18nSelector from '@/components/I18nSelector';
import ThemeSelector from '@/components/ThemeSelector';

export default {
	name: 'PageSettings',
	components: {
    I18nSelector,
    ThemeSelector,
  },
}
</script>
<style lang="scss" scoped>
.page-settings {
	display: flex;
	margin-bottom: 2rem;
	> * {
		margin-right: 1rem;
	}
}
</style>
