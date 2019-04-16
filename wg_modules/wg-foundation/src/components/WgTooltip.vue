<template>
  <div :class="['tooltip', `tooltip--${direction}`]">
    <svg width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g bstroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-148.000000, 1.000000)">
          <g id="Group" transform="translate(150.000000, 1.000000)">
            <path d="M6,-0.833333333 L13,8.5 L-1,8.5 L6,-0.833333333 Z"></path>
            <polygon fill="#F2F3F5" points="6 0 12 8 0 8"></polygon>
          </g>
        </g>
      </g>
    </svg>
    <span class="tooltip__content"><slot/></span>
  </div>
</template>

<script>
  export default {
    name: "WgTooltip",
    props: {
      direction: String
    }
  };
</script>

<style lang="scss">
  *:hover > .tooltip {
    transform: translate(0,0);
    visibility: visible;
    opacity: 1;
  }
  .tooltip {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    top: 2.5em;
    min-width: 220px;
    transform: translate(0, 0.5em);
    visibility: hidden;
    opacity: 0;
    @include default-transition('transform, opacity, visibility');
    &__content {
      display: block;
      background-color: var(--color-x-9);
      padding: 1em;
      border-radius: 0.25em;
      box-shadow: $box-shadow-light;
      border: 1px solid var(--color-x-8);
      font-size: $font-size-xs;
    }
    svg {
      position: relative;
      z-index: 2;
      margin-bottom: -1px;
      polygon {
        fill: var(--color-x-9)
      }
      path {
        stroke: var(--color-x-8)
      }
    }
    &--left {
      left: 0;
      svg {
        align-self: flex-start;
        margin-left: 1em;
      }
    } 
    &--center {
      left: 0;
      right: 0;
      margin: auto;
      svg {
        align-self: center;
      }
    }
    &--right {
      right: 0;
      svg {
        align-self: flex-end;
        margin-right: 1em;
      }
    } 
  }
</style>
