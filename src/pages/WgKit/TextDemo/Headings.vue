<i18n>
{
  "pt": {
    "h1": "H1 - Este é um título h1",
    "h2": "H2 - Este é um título h2",
    "h3": "H3 - Este é um título h3",
    "h4": "H4 - Este é um título h4",
    "h5": "H5 - Este é um título h5",
    "h6": "H6 - Este é um título h6"
  },
  "en": {
    "h1": "H1 - This is a h1 title",
    "h2": "H2 - This is a h2 title",
    "h3": "H3 - This is a h3 title",
    "h4": "H4 - This is a h4 title",
    "h5": "H5 - This is a h5 title",
    "h6": "H6 - This is a h6 title"
  }
}
</i18n>

<template>
  <div class="headings">
    <h1>
      <code>$font-size-h1</code>
      {{ $t('h1') }}
    </h1>
    <h2>
      <code>$font-size-h2</code>
      {{ $t('h2') }}
    </h2>
    <h3>
      <code>$font-size-h3</code>
      {{ $t('h3') }}
    </h3>
    <h4>
      <code>$font-size-h4</code>
      {{ $t('h4') }}
    </h4>
    <h5>
      <code>$font-size-h5</code>
      {{ $t('h5') }}
    </h5>
    <h6>
      <code>$font-size-h6</code>
      {{ $t('h6') }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'Headings'
}
</script>

<style lang="scss" scoped>
.headings code {
  display: block;
  margin-bottom: 0.25rem;
}
</style>
