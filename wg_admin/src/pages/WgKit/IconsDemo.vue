<i18n>
{
  "pt": {
    "title": "Família de icones"
  },
  "en": {
    "title": "Icon family"
  }
}
</i18n>

<template>
  <section class="icons-demo">
    <h1>{{ $t('title') }}</h1>
    <hr>
    <ul>
			<li v-for="icon of icons" :key="icon" >
				<wg-icon color="a" :id="icon"/>
				<span>.{{ icon }}</span>
			</li>
		</ul>
  </section>
</template>

<script>
export default {
	name: "IconsDemo",
	data() {
		return {
			icons: [
				'wg-icon-arrow-down',
				'wg-icon-arrow-left',
				'wg-icon-arrow-right',
				'wg-icon-arrow-up',
				'wg-icon-avatar',
				'wg-icon-button',
				'wg-icon-calendar',
				'wg-icon-caret-down',
				'wg-icon-caret-up',
				'wg-icon-checkmark',
				'wg-icon-close',
				"wg-icon-form",
				"wg-icon-draggable-1",
				"wg-icon-draggable-2",
				"wg-icon-engine",
				"wg-icon-exclamation-mark",
				"wg-icon-eye-closed",
				"wg-icon-eye",
				"wg-icon-floppy-disk",
				"wg-icon-focal-point",
				"wg-icon-folder",
				"wg-icon-form2",
				"wg-icon-grid-view",
				"wg-icon-hamburger",
				"wg-icon-heading",
				"wg-icon-horizontal-dots",
				"wg-icon-iframe",
				"wg-icon-image",
				"wg-icon-info",
				"wg-icon-list-view",
				"wg-icon-magnifying-glass",
				"wg-icon-moon",
				"wg-icon-pencil",
				"wg-icon-question-mark",
				"wg-icon-plus",
				"wg-icon-quote",
				"wg-icon-sign-out",
				"wg-icon-sun",
				"wg-icon-text",
				"wg-icon-trash-bin",
				"wg-icon-upload",
				"wg-icon-vertical-dots",
				"wg-icon-video",
			]
		} 
	}
};
</script>

<style lang="scss" scoped>
.icons-demo {
	> h1 {
		color: var(--color-a-1);
	}
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1em;
		li {
			display: flex;
			align-items: center;
			i {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2em;
				height: 2em;
				border-radius: 0.25em;
				background-color: var(--color-x-9);
			}
			span {
				padding-left: 1em;
				font-size: $font-size-xs;
			}
		}
	}
}
</style>
