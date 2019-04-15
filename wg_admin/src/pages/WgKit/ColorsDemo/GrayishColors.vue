<i18n>
{
  "pt": {
    "title": "Tons de cinza"
  },
  "en": {
    "title": "Shades of gray"
  }
}
</i18n>

<template>
  <div class="grayish-colors"> 
    <h6>{{ $t('title') }}</h6>
    <color-palette class="grayish" :range="11" cssVar="--color-x" />
  </div>
</template>

<script> 
import ColorPalette from './ColorPalette'

export default {
	name: 'GrayishColors',
	components: {
		ColorPalette,
	}
}
</script>

<style lang="scss" scoped>
.grayish-colors /deep/ li:nth-child(1n + 7) {
	color: var(--color-x-1);
	&:last-child {
		border: 1px solid var(--color-x-1);
	}
}
</style>
