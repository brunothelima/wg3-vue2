<template>
  <div class="wg-input-radio">
    <div v-for="(option, index) of options" :key="`option-${index}`">
      <input @input="onInput($event)"
        :name="name"
        :id="`option-${index}`"
        type="radio"
        :value="option.value"
        :checked="option.value === value"
      >
      <label :for="`option-${index}`">{{ i18n.t(option.label) }}</label>
    </div>
  </div>
</template>

<script>
  import inputDefaults from "wg_modules/wg-foundation/src/mixins/InputDefaults.js";

  export default {
    name: "InputRadio",
    mixins: [inputDefaults],
    props: {
      options: Array,
      name: String
    },
     methods: {
      onInput(event) {
        this.$emit("input", event);
        this.$emit("interaction", event);
        this.callback("input", event);
      }
    },
  };
</script>
<style lang="scss" scoped>
.wg-input-radio { 
  display: flex;
  margin-left: -1em;
  > div {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin-left: 2em;
  }
  label {
    margin-left: 0.5em;
  }
}
</style>