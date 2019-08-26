<template>
  <form class="wg-form" @submit.prevent="onSubmit($event)">
    <div class="wg-form__fields">
      <wg-form-field
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
          :error="errors[input.name] && errors[input.name].length > 0"
          @dropdownSelect="onDropdownSelect(input, $event)"
          @interaction="onInteraction(input, $event)"
          @input="onInput(input, $event)"
        >
          <template v-slot:after>
            <wg-form-help v-if="input.info" :text="input.info" />
          </template>
        </component>
      </wg-form-field>
    </div>
    <slot />
  </form>
</template>

<script>
import FormMixin from '@/mixins/FormMixin.js'
import WgFormField from '@/components/WgForm/WgFormField'
import WgFormHelp from '@/components/WgForm/WgFormHelp'

export default {
  name: 'WgForm',
  mixins: [FormMixin],
  components: {
    WgFormField,
    WgFormHelp,
    'input-text': () => import('./inputs/InputText'),
    'input-file': () => import('./inputs/InputFile.vue'),
    'input-date': () => import('./inputs/InputText/InputDate'),
    'input-radio': () => import('./inputs/InputRadio.vue'),
    'input-money': () => import('./inputs/InputText/InputMoney'),
    'input-toggle': () => import('./inputs/InputToggle.vue'),
    'input-select': () => import('./inputs/InputSelect'),
    'input-wysiwyg': () => import('./inputs/InputWysiwyg'),
    'input-checkbox': () => import('./inputs/InputCheckbox.vue'),
    'input-textarea': () => import('./inputs/InputText/InputTextarea'),
    'input-password': () => import('./inputs/InputText/InputPassword'),
    'input-text-magic': () => import('./inputs/InputText/InputTextMagic'),
    'input-text-button': () => import('./inputs/InputText/InputTextButton'),
    'input-select-magic': () => import('./inputs/InputSelect/InputSelectMagic'),
    'input-text-dropdown': () => import('./inputs/InputText/InputTextDropdown')
  },
  props: {
    i18n: Object
  },
  methods: {
    onDropdownSelect (input, value) {
      this.model[`${input.name}_dropdown`] = value
    },
    onInteraction (input, value) {
      this.errors[input.name] = []
    },
    onInput (input, value) {
      this.model[input.name] = value
    },
    onSubmit (event) {
      this.$emit('submit')
      if (this.validate()) {
        this.$emit('success', this.model)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-form {
  &__fields {
    margin-bottom: 1em;
  }
}
</style>
