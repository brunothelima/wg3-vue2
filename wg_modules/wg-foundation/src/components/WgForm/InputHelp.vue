<template>
  <div class="input-info">
    <wg-icon :color="false" id="wg-icon-question-mark"></wg-icon>
    <wg-tooltip direction="right">{{ text }}</wg-tooltip>
  </div>
</template>

<script>
  import WgTooltip from './../WgTooltip'
  
  export default {
    name: "InputHelp",
    props: {
      text: String
    },
    components: {
      WgTooltip,
    }
  };
</script>

<style scoped lang="scss">
  .input-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    margin-top: 1em;
    height: fit-content;
    cursor: help;
  }
</style>
