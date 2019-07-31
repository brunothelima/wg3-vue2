<i18n>
{
	"pt": {
		"title": "Ações especiais",
    "message": "Mostrar mensagem",
    "demo": "Está é uma mensagem de teste",
    "modal": "Acionar painel de confirmação"
  },
  "en": {
		"title": "Special actions",
    "message": "Show message",
    "demo": "This is a test message",
    "modal": "Show modal panel"
  }
}
</i18n>

<template>
  <section class="actions-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
		<div class="actions">
			<wg-button @click.native="messageDemo('demo')" model="glassy">{{ $t('message') }}</wg-button>
			<wg-button @click.native="deleteDemo(1)" model="glassy">{{ $t('modal') }}</wg-button>
		</div>
		<modal-demo @cancel="deleteId = 0" v-if="deleteId > 0" />
  </section>
</template>

<script>
import WgButton from '@/components/WgButton'
import ModalDemo from './ModalDemo'

export default {
  name: 'ActionsDemo',
  components: {
    WgButton,
    ModalDemo
  },
  data () {
    return {
      deleteId: 0
    }
  },
  methods: {
    messageDemo (message) {
      this.$store.commit('alert/addMessage', this.$i18n.t(message))
    },
    deleteDemo (id) {
      this.deleteId = id
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
	display: flex;
	align-items: center;
	.wg-button {
		margin-right: 1em;
	}
}
</style>
