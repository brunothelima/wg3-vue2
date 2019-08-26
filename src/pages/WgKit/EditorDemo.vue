<template>
  <section class="editor-demo">
    <div class="wg-text-editor">
      <div ref="editor" id="editor" class="wg-editor"></div>
    </div>
  </section>
</template>

<script>
import DecupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@/vendors/scss/ckeditor5.scss'

export default {
  name: 'EditorDemo',
  data () {
    return {
      editor: {}
    }
  },
  methods: {
    insertTools (editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        )
    },
    insertImage (editor, src, alt) {
      editor.execute('imageInsert', { source: src })
    }
  },
  mounted () {
    DecupledEditor.create(this.$refs.editor).then(editor => {
      this.insertTools(editor)
      this.insertImage(editor, 'http://picsum.photos/400/400', 'teste')
    })
  }
}
</script>

