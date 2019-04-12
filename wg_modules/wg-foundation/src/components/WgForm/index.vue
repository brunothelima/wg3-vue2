<template>
  <form class="wg-form" @submit.prevent="onSubmit($event)">
    <input-field
      v-for="(input, index) in schema"
      :key="`${input.name}_${index}`"
      :i18n="i18n"
      :input="input"
      :errors="errors[input.name] || []"
      :disabled="input.disabled"
    >
      <component
        v-bind="input"
        :is="`input-${input.type}`"
        :i18n="i18n"
        :value="model[input.name]"
        @interaction="errors[input.name] = []"
        @input="model[input.name] = $event.target.value"
      />
    </input-field>
    <slot/>
  </form>
</template>

<script>
  import { validate } from "wg_core/form.js";

  export default {
    name: "WgForm",
    components: {
      "input-field": () => import("./InputField.vue"),
      "input-text": () => import("./InputText.vue"),
      "input-select": () => import("./InputSelect.vue"),
      "input-radio": () => import("./InputRadio.vue")
    },
    props: {
      schema: Array,
      i18n: Object
    },
    data() {
      return {
        model: this.schema2Model(),
        errors: {}
      };
    },
    methods: {
      schema2Model() {
        const model = {};
        for (const input of this.schema.values()) {
          model[input.name] = input.value;
        }
        return model;
      },
      onSubmit(event) {
        this.errors = validate(this.model, this.schema);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
