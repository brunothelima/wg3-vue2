<i18n>
{
  "pt": {
    "h1": "H1 - Isto é um título h1",
    "h2": "H2 - Isto é um título h2",
    "h3": "H3 - Isto é um título h3",
    "h4": "H4 - Isto é um título h4",
    "h5": "H5 - Isto é um título h5",
    "h6": "H6 - Isto é um título h6",
    "p": "Isto é um paragrafo",
    "others": "Outras tags de texto"
  },
  "en": {
    "h1": "H1 - This is a h1 title",
    "h2": "H2 - This is a h2 title",
    "h3": "H3 - This is a h3 title",
    "h4": "H4 - This is a h4 title",
    "h5": "H5 - This is a h5 title",
    "h6": "H6 - This is a h6 title",
    "p": "This is a paragraph",
    "others": "Other text tags"
  }
}
</i18n>

<template>
  <div class="wg-kit-text">
    <h1>{{ $t('h1') }}</h1>
    <h2>{{ $t('h2') }}</h2>
    <h3>{{ $t('h3') }}</h3>
    <h4>{{ $t('h4') }}</h4>
    <h5>{{ $t('h5') }}</h5>
    <h6>{{ $t('h6') }}</h6>
    <hr />
    <h6>{{ $t('p') }}:</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="">Impedit nisi cupiditate sunt</a> fugiat reiciendis dicta consequatur <b>assumenda temporibus enim officia</b>, unde dolorem quibusdam <i>reprehenderit odit voluptas magni</i> corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="">Impedit nisi cupiditate sunt</a> fugiat reiciendis dicta consequatur <b>assumenda temporibus enim officia</b>, unde dolorem quibusdam <i>reprehenderit odit voluptas magni</i> corrupti id nulla? lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <hr />
    <h6>{{ $t('others') }}:</h6>
    <span class="txt-larger">X-large label</span>
    <span class="txt-large">Large label</span>
    <span>Default label</span>
    <span class="txt-small">Small label</span>
    <span class="txt-smaller">X-small label</span>
  </div>
</template>

<script> 
export default {
  name: 'WgKitText',
}
</script>
<style lang="scss" scoped>
span {
  margin-right: $gutter * 2;
}
</style>
