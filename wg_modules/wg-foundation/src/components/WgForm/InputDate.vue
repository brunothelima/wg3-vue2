<template>
  <div :class="['input-date', { 'input-date--error': error }]">
    <slot name="before"/>
    <div class="input-date__wrapper">
      <wg-icon id="wg-icon-calendar"/>
      <input
        class="app-date"
        ref="input"
        type="text"
        :disabled="disabled"
        :placeholder="i18n.t(placeholder)"
        @blur="onBlur($event.target.value)"
        @focus="onFocus($event.target.value)"
      >
    </div>
    <slot name="after"/>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";
  import flatpickr from  "flatpickr";
  import "flatpickr/dist/l10n/pt.js";
  import inputDefaults from "../../mixins/InputDefaults.js";

  export default {
    name: "InputDate",
    mixins: [inputDefaults],
    computed: {
      ...mapGetters({
        locale: "currLocale"
      }),
      options() {
        return {
          static: true,
          locale: this.locale,
          enableTime: this.time,
          mode:  !!this.mode
            ? this.mode
            : 'single',
          dateFormat: !!this.time
            ? "Y/m/d H:i" 
            : 'Y/m/d',
          defaultDate: !!this.value
            ? this.value 
            : null,
          onChange: (_, value) => {
            this.onInput(value);
          }
        }
      }
    },
    props: {
      time: Boolean,
      mode: String,
    },
    methods: {
      onFocus(value) { 
        this.$emit("interaction", value);
        this.$emit("focus", value);
        this.callback("focus", value);
      },
      onInput(value) {
        this.$emit("interaction", value);
        this.$emit("input", value);
        this.callback("input", value);
      },
      onBlur(value) {
        this.$emit("interaction", value);
        this.$emit("blur", value);
        this.callback("blur", value);
      },
    },
    watch: {
      locale(l10n) {
        l10n = flatpickr.l10ns[l10n]
        flatpickr.localize(l10n)
        flatpickr(this.$refs.input, this.options);
      },
    },
    mounted() {
      flatpickr(this.$refs.input, this.options);
    }
  };
</script>

<style src="flatpickr/dist/flatpickr.min.css"></style>
<style lang="scss" src="wg_modules/wg-foundation/src/assets/scss/flatpickr-custom.scss"></style>
<style lang="scss" scoped>
  .input-date {
    display: flex;
    &__wrapper {
      position: relative;
      flex: 1;
      display: grid;
      grid-template-columns: 48px auto;
      margin-bottom: 0.5rem;
    }
    i {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      align-self: center;
      justify-self: center;
      color: var(--color-x-5);
    }
    /deep/ .flatpickr-wrapper {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 1em 1em 1em 48px;
      border-radius: var(--input-border-radius);
      border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
      background-color: transparent;
      color: var(--color-x-3);
      outline: none;
      cursor: pointer;
      @include default-transition(#{border-color, box-shadow});
      &::placeholder {
        color: var(--color-x-7);
      }
      &:focus {
        border-color: var(--color-x-4);
        box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
      }
    }
    &--error {
      input {
        border-color: var(--color-error);
      }
      i {
        color: var(--color-error);
      }
    }
  }
</style>