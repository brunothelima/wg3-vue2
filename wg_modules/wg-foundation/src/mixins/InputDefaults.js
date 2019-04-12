export default {
  props: {
    i18n: Object,
    events: Object,
    disabled: Boolean,
    placeholder: String,
    value: [Number, String],
  },
  methods: {
    callback(callback, event) {
      if (this.events && typeof this.events[callback] === "function") {
        this.events[callback](event);
      }
    }
  }
}