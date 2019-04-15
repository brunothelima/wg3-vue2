<template>
  <div class="info">
    <i class="wg-icon-question-mark"></i>
    <wg-tooltip direction="right">{{ text }}</wg-tooltip>
  </div>
</template>

<script>
  import WgTooltip from './../WgTooltip'
  
  export default {
    name: "InputInfo",
    props: {
      text: String
    },
    components: {
      WgTooltip,
    }
  };
</script>

<style scoped lang="scss">
  .info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    cursor: help;
    .tooltip {
      display: none;
    }
    &:hover .tooltip {
      display: inherit;
    }
  }
</style>
