<template>
  <div class="input-wysiwyg" @click="onClick($event)">
    <div ref="editor" id="editor">{{ value || i18n.t(placeholder) }}</div>
  </div>
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'
import CKEditor from '@ckeditor/ckeditor5-build-balloon-block'

export default {
  name: 'WgEditor',
  mixins: [InputMixin],
  methods: {
    onInput (value) {
      this.$emit('input', value)
      this.callback('input', value)
    },
    onClick (event) {
      this.$emit('interaction')
    }
  },
  mounted () {
    CKEditor.create(this.$refs.editor)
  }
}
</script>

<style lang="scss">
.input-wysiwyg {
  margin-bottom: 2em;
}
</style>
