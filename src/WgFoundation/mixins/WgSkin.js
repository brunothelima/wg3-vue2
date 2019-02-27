export default {
	props: {
		skin: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		skinHash() {
			return `skin--${Math.random().toString(36).substr(2, 9)}`;
		},
		skinCCPs() {
			return this.skin.map((ccp, index) => `--${ccp.property}: ${ccp.value};`).join('\n');
		},
	},
	methods: {
		createStyle() {
			const style = document.createElement('style');
			style.setAttribute('type', 'text/css');
			style.setAttribute('ref', this.skinHash);
			style.insertAdjacentHTML('afterbegin',`
				.${this.skinHash} {
					${this.skinCCPs}
				}`);
			return style;
		},
		bindSkin() {
			document.querySelector('head')
				.appendChild(this.createStyle());
		},
		unbindSkin() {
			style = document.head.querySelector(`[ref="${this.skinHash}"]`);
			if (style) {
				style.remove();
			}
		}
	},
	watch: {
		skin(newSkin) {
			this.unbindSkin();
			if (newSkin.length) {
				this.bindSkin();
			}
		},
	},
	mounted() {
		this.$el.classList.add(this.skinHash);
		if (this.skin.length > 0) {
			this.bindSkin();
		}
	},
	destroyed() {
		if (this.skin.length > 0) {
			this.unbindSkin();
		}
	},
}