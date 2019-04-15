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
        v-bind="input"
        :is="`input-${input.type}`"
        :i18n="i18n"
        :value="model[input.name]"
        :error="!!errors[input.name]"
        @interaction="errors[input.name] = []"
        @input="model[input.name] = $event"
      >
        <template v-slot:after>
          <input-info v-if="input.info" :text="input.info"/>
        </template>
      </component>
    </input-field>
    <slot/>
  </form>
</template>

<script>
  import { validate, schema2Model } from "wg_core/form.js";
  import InputInfo from "./InputInfo.vue";

  export default {
    name: "WgForm",
    components: {
      InputInfo,
      "input-field": () => import("./InputField.vue"),
      "input-text": () => import("./InputText.vue"),
      "input-textarea": () => import("./InputTextarea.vue"),
      "input-select": () => import("./InputSelect.vue"),
      "input-radio": () => import("./InputRadio.vue"),
      "input-checkbox": () => import("./InputCheckbox.vue")
    },
    props: {
      schema: Array,
      i18n: Object
    },
    data() {
      return {
        errors: {},
        model: schema2Model(this.schema)
      };
    },
    methods: {
      onSubmit(event) {
        this.errors = validate(this.model, this.schema);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
