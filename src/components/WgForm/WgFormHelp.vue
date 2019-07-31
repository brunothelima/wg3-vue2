<template>
  <div class="wg-form-help">
    <wg-icon :color="false" id="wg-icon-question-mark"></wg-icon>
    <wg-tooltip direction="right">{{ text }}</wg-tooltip>
  </div>
</template>

<script>
import WgIcon from "@/components/WgIcon";
import WgTooltip from "@/components/WgTooltip";

export default {
  name: "WgFormHelp",
  props: {
    text: String
  },
  components: {
    WgIcon,
    WgTooltip
  }
};
</script>

<style scoped lang="scss">
.wg-form-help {
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
