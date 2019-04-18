<template>
  <div id="app" :class="theme">
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "App",
    computed: {
      ...mapGetters({
        theme: "currTheme"
      })
    }
  };
</script>

<style lang="scss">
  @import "wg_admin/assets/scss/_colors.scss";
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i");
  @import "wg_core/assets/scss/main.scss";
  // Setting dark/light theme variables 
  :root {
    // Creating the primary and secondary color variations
    @for $index from 1 through 7 {
      --color-a-#{$index}: #{nth($colors-a, $index)};
      --color-b-#{$index}: #{nth($colors-b, $index)};
    }
    // Creating the system monochromatic color variations
    @for $index from 1 through 11 {
      --color-x-#{$index}: #{nth($colors-x, $index)};
    }
    .dark {
      // Swap primary to secondary color and vice versa
      @for $index from 1 through 7 {
        --color-a-#{$index}: #{nth($colors-b, $index)};
        --color-b-#{$index}: #{nth($colors-a, $index)};
      }
      // Invert the system monochromatic color variations order
      @for $index from 11 through 1 {
        --color-x-#{$index}: #{nth($colors-x, (12 - $index))};
      }
    }
  }
  #app {
    // Overide the --font-family default value;
    --font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    // The application background color (white/black)
    background-color: var(--color-x-11);
    // Default font color
    color: var(--color-x-1);
    // Font rem responsive behavior
    font-family: var(--font-family);
    font-size: var(--font-size);
    @include default-transition(background-color);
    @media screen and (max-width: #{$tablet-brakepoint}) {
      font-size: calc(var(--font-size) - 2px);
    }
    @media screen and (max-width: #{$mobile-brakepoint}) {
      font-size: calc(var(--font-size) - 4px);
    }
    // Dark theme variations overwrite
    ::selection {
      background: var(--color-b-3);
    }
  }
</style>
