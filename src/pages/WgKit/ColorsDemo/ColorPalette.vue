<template>
  <ul class="color-palette">
    <li
      v-for="(_, index) in Array(range)"
      :key="`${cssVar}-${index+1}`"
      :style="`background-color: var(${cssVar}-${index+1})`"
    >
      <code>var({{`${cssVar}-${index+1}`}})</code>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ColorPalette',
  props: {
    range: Number,
    cssVar: String
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 2.857rem;
  li {
    height: 40px;
    color: var(--color-x-11);
    @include flex-center();
  }
}
</style>
