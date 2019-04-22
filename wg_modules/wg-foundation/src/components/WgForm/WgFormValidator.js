/**
 * This class contains all the built-in form validations methods
 *  avaliable for use to json/object 'wg-form' schemas
 */
class Validator {
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
    return !value && value < limit
  }
}
/**
 * This function validates an given model with the validations present in the 
 *  given 'wg-form' inputs schema array, and returns an errors object with all
 *  failed validation function names for further error messages display
 * 
 * @param {Object} model - Current state of the given "wg-form" to be validated 
 * @param {Array} schema - The 'wg-form' schema containing the inputs respective validations
 * 
 * @return {Object} errors - The input failed validations names
 */
export function validateSchema(schema, model) {
  const errors = {}  
  for (const input of schema.values()) {
    // Ignore validations for disabled inputs
    if (input.disabled || !input.validations) {
      continue
    }
    errors[input.name] = []
    for (const key in input.validations) {
      const value = model[input.name] // Value to be validated
      // Condition for custom validations containing a handler function 
      if (typeof input.validations[key].handler === 'function') {
        if (!input.validations[key].handler(value)) {
          errors[input.name].push(key) 
        }
        continue
      }
      // Built-in validation
      const rules = input.validations[key]
      const valid = Validator[key]
      if (!valid(value, rules)) {
        errors[input.name].push(key)
      } 
    }
  }
  return errors
}


// export function validateSchema() {
//   const vialidation = false
//   for (const input of this.schema.values()) {
//     // Ignore validations for disabled inputs
//     if (input.disabled || !input.validations) {
//       continue
//     }
//     Vue.set(this.errors, input.name, [])
//     for (const key in input.validations) {
//       // Value to be validated
//       const value = this.model[input.name]
//       // Condition for custom validations containing a handler function 
//       if (typeof input.validations[key].handler === 'function') {
//         if (!input.validations[key].handler(value)) {
//           this.errors[input.name].push(key) 
//           validation = true
//         }
//         continue
//       }
//       // Built-in validation
//       const rules = input.validations[key]
//       const valid = Validator[key]
//       if (!valid(value, rules)) {
//         this.errors[input.name].push(key)
//         validation = true
//       } 
//     }
//   }
//   return validation
// }