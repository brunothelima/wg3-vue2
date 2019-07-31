<i18n>
{
  "pt": {
    "title": "Isto é um paragrafo"
  },
  "en": {
    "title": "This is a paragraph"
  }
}
</i18n>

<template>
  <div class="paragraph">
    <h6>{{ $t('title') }}:</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <a href>Impedit nisi cupiditate sunt</a> fugiat reiciendis dicta consequatur
      <b>assumenda temporibus enim officia</b>, unde dolorem quibusdam
      <i>reprehenderit odit voluptas magni</i> corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
</template>

<script>
export default {
  name: "Paragraph"
};
</script>