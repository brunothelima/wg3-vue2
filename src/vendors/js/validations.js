/**
 * This class contains all the built-in form validations methods
 *  avaliable for use to json/object 'wg-form' schemas
 */
export default class {
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
   * Validation for email inputs
   * 
   * @param {Any} value - The value to be validate
   * 
   * @return {Boolean}
   */
  static email(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    return re.test(String(email).toLowerCase());
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