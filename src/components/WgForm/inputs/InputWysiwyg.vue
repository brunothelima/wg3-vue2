<template>
  <div class="input-wysiwyg" @click="onClick($event)">
    <ckeditor
      :editor="editor"
      :value="`<p>${i18n.t(placeholder)}</p>` || value"
      @input="onInput($event)"
    ></ckeditor>
  </div>
</template>

<script>
import Vue from "vue";
import InputMixin from "@/mixins/InputMixin.js";
import CKEditor from "@ckeditor/ckeditor5-vue";
import BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";

Vue.use(CKEditor);

export default {
  name: "WgEditor",
  mixins: [InputMixin],
  data() {
    return {
      editor: BalloonBlockEditor
    };
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
      this.callback("input", value);
    },
    onClick(event) {
      this.$emit("interaction");
    }
  }
};
</script>

<style lang="scss">
.input-wysiwyg {
	margin-bottom: 2em;
}
</style>
