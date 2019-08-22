<i18n>
{
  "pt": {
		"header": "Confirmação",
		"title": "Você tem certeza que quer Excluír este post?",
		"text": "Excluír post, resultará na retirada deste conteúdo de todas as paginas e widgets. Esta ação não pode ser disfeita",
		"buttonLeft": "Cancelar",
		"buttonRight": "Excluír"
  },
  "en": {
		"header": "Confirmation",
		"title": "Are you sure you want to delete this post?",
		"text": "Deleting this post will remove it from all the pages and widgets. This action can not be undone.",
		"buttonLeft": "Cancel",
		"buttonRight": "Delete"
  }
}
</i18n>

<template>
  <wg-modal @cancel="onCancel()">
    <modal-confirm
      @cancel="onCancel()"
      icon="wg-icon-trash-bin-small"
      :header="$t('header')"
      :title="$t('title')"
      :text="$t('text')"
      :buttonLeft="{
				label: $t('buttonLeft'),
				color: 'x-6',
				flex: 2,
			}"
      :buttonRight="{
				label: $t('buttonRight'),
				color: 'error',
				flex: 1,
			}"
      @buttonLeftClick="onCancel()"
      @buttonRightClick="onCancel()"
    />
  </wg-modal>
</template>

<script>
import WgModal from "@/components/WgModal";
import ModalConfirm from "@/components/WgModal/ModalConfirm";

export default {
  name: "WgKit",
  components: {
    WgModal,
    ModalConfirm
  },
  data() {
    return {
      deleteId: 0
    };
  },
  methods: {
    onCancel(event) {
      this.$emit("cancel");
    }
  }
};
</script>
