<template>
  <div class="wg-form-dropdown">
    <span class="wg-form-dropdown__prefix" v-if="prefix">{{ i18n.t(prefix) }}</span>
    <span class="wg-form-dropdown__selected">{{ i18n.t((selected) ? selected.label : placeholder) }}</span>
    <wg-icon id="wg-icon-caret-down" color="a" />
    <select @input="onInput($event.target.value)">
      <option
        v-for="(option, index) of options"
        :key="`option-${index}`"
        :value="option.value"
        :selected="option.value === value"
      >{{ i18n.t(option.label) }}</option>
    </select>
  </div>
</template>

<script>
import WgIcon from '@/components/WgIcon'
export default {
  name: 'WgFormDropdown',
  components: {
    WgIcon
  },
  props: {
    default: [String, Number],
    prefix: String,
    options: Array,
    i18n: {
      type: Object,
      default: function () {
        return {
          t: value => {
            return value || ''
          }
        }
      }
    }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    selected () {
      return this.options.find(option => {
        if (this.value) {
          return option.value === this.value
        }
        return option.value === this.default
      })
    }
  },
  methods: {
    onInput (value) {
      this.value = value
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.wg-form-dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 1em;
  position: relative;
  border-top-left-radius: var(--input-border-radius);
  border-bottom-left-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  border-right: none;
  background-color: var(--color-x-10);
  &__prefix {
    color: var(--color-x-7);
  }
  &__selected {
    color: var(--color-a-1);
    font-weight: 700;
    margin: 0 0.25em 0 0.5em;
  }
  select {
    position: absolute;
    z-index: 10;
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
