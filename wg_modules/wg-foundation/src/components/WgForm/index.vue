<template>
  <form class="wg-form" @submit.prevent="onSubmit($event)">
    <input-field
      v-for="(input, index) in schema"
      :key="`${input.name}_${index}`"
      :i18n="i18n"
      :input="input"
      :info="input.info || ''"
      :errors="errors[input.name] || []"
      :disabled="input.disabled"
    >
      <component
        :is="`input-${input.type}`"
        v-bind="input"
        :i18n="i18n"
        :value="model[input.name]"
        :error="errors[input.name] && errors[input.name].length > 0"
        @interaction="errors[input.name] = []"
        @input="model[input.name] = $event"
      >
        <template v-slot:after>
          <input-help v-if="input.info" :text="input.info"/>
        </template>
      </component>
    </input-field>
    <slot/>
  </form>
</template>

<script>

  import Vue from 'vue'
  import FormEngine from "wg_modules/wg-foundation/src/mixins/FormEngine.js";
  import InputHelp from "./InputHelp.vue";

  export default {
    name: "WgForm",
    mixins: [FormEngine],
    components: {
      "input-help": () => import("./InputHelp.vue"),
      "input-field": () => import("./InputField.vue"),
      "input-text": () => import("./InputText.vue"),
      "input-textarea": () => import("./InputTextarea.vue"),
      "input-select": () => import("./InputSelect.vue"),
      "input-radio": () => import("./InputRadio.vue"),
      "input-checkbox": () => import("./InputCheckbox.vue"),
      "input-file": () => import("./InputFile.vue"),
      "input-money": () => import("./InputMoney.vue"),
      "input-password": () => import("./InputPassword.vue"),
    },
    props: {
      i18n: Object
    },
  };
</script>