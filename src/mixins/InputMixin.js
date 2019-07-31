export default {
  props: {
    name: String,
    info: String,
    placeholder: String,
    value: [Number, String, Boolean, Array, File],
    disabled: Boolean,
    error: Boolean,
    events: Object,
    i18n: {
      type: Object,
      default: function () {
        return {
          t: (value) => {
            return value || ''
          }
        }
      }
    }
  },
  methods: {
    callback (callback, event) {
      if (this.events && typeof this.events[callback] === 'function') {
        this.events[callback](event)
      }
    }
  }
}
