<i18n>
{
  "pt": {
    "title": "Outros tamanhos de texto:"
  },
  "en": {
    "title": "Othe text sizes:"
  }
}
</i18n>

<template>
  <div class="labels">
    <h6>{{ $t('title') }}</h6>
    <ul>
      <li class="xxl">
        <code>$font-size-xxl</code>Larger font size
      </li>
      <li class="xl">
        <code>$font-size-xl</code>Slightly large text size
      </li>
      <li>Default font size</li>
      <li class="xs">
        <code>$font-size-xxl</code>Slightly small text size
      </li>
      <li class="xxs">
        <code>$font-size-xxl</code>Smaller text size
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Labels'
}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    margin-bottom: 2rem;
    > code {
      display: block;
      margin-bottom: 0.5rem;
    }
    &.xxl {
      font-size: $font-size-xxl;
    }
    &.xl {
      font-size: $font-size-xl;
    }
    &.xs {
      font-size: $font-size-xs;
    }
    &.xxs {
      font-size: $font-size-xxs;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>
