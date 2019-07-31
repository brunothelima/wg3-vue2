<template>
  <ul class="wg-alert" v-if="hasMessages">
		<li v-for="(message, index) of messages" :key="`alert-${index}`">
			<span>
				<wg-icon @click.native="onClose(index)" id="wg-icon-close" />
				<span>{{ message }}</span>
			</span>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex'
import WgIcon from '@/components/WgIcon'

export default {
  name: 'WgAlert',
  components: {
    WgIcon
  },
  computed: {
    ...mapGetters({
      hasMessages: 'alert/hasMessages',
      messages: 'alert/getMessages'
    })
  },
  data () {
    return {
      interval: false
    }
  },
  methods: {
    onClose (index) {
      this.$store.commit('alert/removeMessage', index)
    }
  },
  watch: {
    hasMessages (status) {
      if (typeof this.interval === 'object') {
        clearTimeout(this.interval)
        this.interval = fallse
      }
      if (status && !this.interval) {
        this.interval = setInterval(() => {
          this.$store.commit('alert/removeLastMessage')
        }, 5000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wg-alert {
	display: flex;
	z-index: 100;
	flex-flow: column;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 0;
	width: 100%;
	padding-top: 1em;
	list-style: none;
	li {
		text-align: center;
		margin-bottom: 1em;
		> span {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			padding: 0.75em;
			border-radius: 4px;
			background-color: var(--color-info);
			color: var(--color-x-10);
			font-weight: 700;
			transform: scale(0);
			animation: bounce-in 200ms ease-out forwards;
			span {
				margin-left: 1em;
			}
			i {
				font-size: 10px;
				font-weight: inherit;
				color: inherit;
				cursor: pointer;
			}
		}
	}
}
@keyframes bounce-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
