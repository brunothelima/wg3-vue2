<i18n>
{
  "pt": {
    "title": "Textos e fontes"
  },
  "en": {
    "title": "Texts and fonts"
  }
}
</i18n>

<template>
  <section class="text-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <wg-headings />
    <hr />
    <wg-paragraph />
    <hr />
    <wg-labels />
  </section>
</template>

<script>
import Headings from "./Headings";
import Paragraph from "./Paragraph";
import Labels from "./Labels";

export default {
  name: "TextDemo",
  components: {
    "wg-headings": Headings,
    "wg-paragraph": Paragraph,
    "wg-labels": Labels
  }
};
</script>

<style lang="scss" scoped>
.text-demo > h1 {
  color: var(--color-a-1);
}
</style>
