import Vue from 'vue'
import Validations from '@/vendors/js/validations.js'

export default {
  props: {
    schema: Array
  },
  data() {
    return {
      model: this.schema2Model(),
      errors: {}
    }
  },
  methods: {
    schema2Model() {
      const model = {}
      for (const input of this.schema.values()) {
        model[input.name] = input.value || null
      }
      return model
    },
    validate() {
      let response = true
      for (const input of this.schema.values()) {
        // Ignore validations for disabled inputs
        if (input.disabled || !input.validations) {
          continue
        }
        Vue.set(this.errors, input.name, [])
        for (const key in input.validations) {
          // Value to be validated
          const value = this.model[input.name]
          // Condition for custom validations containing a handler function
          if (typeof input.validations[key].handler === 'function') {
            if (!input.validations[key].handler(value)) {
              this.errors[input.name].push(key)
            }
            continue
          }
          // Built-in validation
          const rules = input.validations[key]
          const valid = Validations[key]
          if (!valid(value, rules)) {
            this.errors[input.name].push(key)
          }
        }
        // Fail on any error detected
        if (this.errors[input.name].length) {
          response = false
        }
      }
      return response
    }
  }
}
