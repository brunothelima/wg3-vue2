<i18n>
{
  "pt": {
    "title": "Família de icones"
  },
  "en": {
    "title": "Icon family"
  }
}
</i18n>

<template>
  <section class="icons-demo">
    <h1>{{ $t('title') }}</h1>
    <hr />
    <ul>
      <li v-for="icon of icons" :key="icon">
        <wg-icon color="a" :id="icon" />
        <span>.{{ icon }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import WgIcon from '@/components/WgIcon'

export default {
  name: 'IconsDemo',
  components: {
    WgIcon
  },
  data () {
    return {
      icons: [
        'wg-icon-accordion',
        'wg-icon-anchor',
        'wg-icon-asterisk',
        'wg-icon-custom-form',
        'wg-icon-template',
        'wg-icon-earth-solid',
        'wg-icon-earth',
        'wg-icon-filter',
        'wg-icon-grid-view-small',
        'wg-icon-grid-view',
        'wg-icon-grid-view-solid',
        'wg-icon-icon',
        'wg-icon-layout',
        'wg-icon-small-list',
        'wg-icon-trash-bin-small',
        'wg-icon-thick-2px',
        'wg-icon-avatar',
        'wg-icon-button',
        'wg-icon-calendar',
        'wg-icon-caret-down',
        'wg-icon-caret-left',
        'wg-icon-caret-right',
        'wg-icon-caret-up',
        'wg-icon-arrow-down',
        'wg-icon-arrow-left',
        'wg-icon-arrow-right',
        'wg-icon-arrow-up',
        'wg-icon-checkmark',
        'wg-icon-close-small',
        'wg-icon-close',
        'wg-icon-form',
        'wg-icon-draggable-1',
        'wg-icon-draggable-2',
        'wg-icon-engine',
        'wg-icon-exclamation-mark',
        'wg-icon-eye-closed',
        'wg-icon-eye',
        'wg-icon-floppy-disk',
        'wg-icon-focal-point',
        'wg-icon-folder',
        'wg-icon-folder-solid',
        'wg-icon-form2',
        'wg-icon-hamburger',
        'wg-icon-heading',
        'wg-icon-horizontal-dots',
        'wg-icon-iframe',
        'wg-icon-image',
        'wg-icon-info',
        'wg-icon-list-view-solid',
        'wg-icon-list-view',
        'wg-icon-magnifying-glass',
        'wg-icon-moon',
        'wg-icon-pencil',
        'wg-icon-plus',
        'wg-icon-plus-small',
        'wg-icon-question-mark',
        'wg-icon-quote',
        'wg-icon-sign-out',
        'wg-icon-sun',
        'wg-icon-text',
        'wg-icon-trash-bin',
        'wg-icon-upload',
        'wg-icon-vertical-dots',
        'wg-icon-video',
        'wg-icon-big-list',
        'wg-icon-big-list-solid'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-demo {
  > h1 {
    color: var(--color-a-1);
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    @media screen and (max-width: #{$tablet-brakepoint}) {
      grid-template-columns: repeat(1, 1fr);
    }
    li {
      display: flex;
      align-items: center;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        border-radius: 0.25em;
        background-color: var(--color-x-9);
      }
      span {
        padding-left: 1em;
        font-size: $font-size-xs;
      }
    }
  }
}
</style>
