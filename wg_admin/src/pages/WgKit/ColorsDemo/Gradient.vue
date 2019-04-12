<i18n>
{
  "pt": {
    "title": "Gradiente"
  },
  "en": {
    "title": "Gradient"
  }
}
</i18n>

<template>
  <div class="gradient">
    <h6>{{ $t('title') }}</h6>
    <div>
      <code>linear-gradient(to right, var(--color-a-3), var(--color-b-3));</code>
    </div>
  </div>
</template>

<script> 
export default {
	name: 'Gradient',
}
</script>

<style lang="scss" scoped>
.gradient > div {
  height: 40px;
	background-image: linear-gradient(to right, var(--color-a-3), var(--color-b-3));
	color: var(--color-x-11);
	@include flex-center();
}
</style>
