export default {
  props: {
    i18n: Object,
    name: String,
    info: String,
    placeholder: String,
    value: [Number, String, Boolean, Array, File],
    disabled: Boolean,
    error: Boolean,
    events: Object,
  },
  methods: {
    callback(callback, event) {
      if (this.events && typeof this.events[callback] === "function") {
        this.events[callback](event)
      }
    }
  }
}