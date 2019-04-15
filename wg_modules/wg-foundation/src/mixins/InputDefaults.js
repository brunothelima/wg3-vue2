export default {
  props: {
    i18n: Object,
    name: String,
    placeholder: String,
    value: [Number, String, Boolean, Array],
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