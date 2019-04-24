import Vue from 'vue'
import { POST } from 'wg_core/api.js'

/**
 * This class contains all the built-in form validations methods
 *  avaliable for use to json/object 'wg-form' schemas
 */
export class Validations {
  /**
   * Validation for required inputs
   * 
   * @param {Any} value - The value to be validate
   * 
   * @return {Boolean}
   */
  static required(value) {
    return !!value
  }
  /**
   * Validation for inputs with min-length value defined
   * 
   * @param {Any} value - The value to be validate
   * @param {Number} limit - The limit value fo length validation
   * 
   * @return {Boolean}
   */
  static minlength(value, { limit }) {
    return !!value && value.length >= limit
  }
  /**
   * Validation for inputs with max-length value defined
   * 
   * @param {Any} value - The value to be validate
   * @param {Number} limit - The limit value fo length validation
   * 
   * @return {Boolean}
   */
  static maxlength(value, { limit }) {
    return !value || value.length < limit
  }
}

export default {
  props: {
    schema: Array,
  },
  data() {
    return {
      model: this.schema2Model(),
      errors: {},
    };
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
    },
    onSubmit(event) {
      if (this.validate()) {
        console.log(this.model['input_file'])
        POST('form_demo.php', this.model).then(response => {
          console.log(response)
        })
      }
    },
  },
}