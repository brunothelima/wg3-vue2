<template>
  <div class="wg-kit">
    <container> 
      <page-settings />
      <colors-demo />
      <text-demo />
      <buttons-demo />
      <images-demo />
      
      <div class="field">
        <label class="field__label" for="">Input name</label>
        <div class="field__input">
          <input type="text" placeholder="Type here">
        </div>
        <ul class="field__errors">
          <li>Invalid input value</li>
        </ul>
      </div>

      <br />
      <br />
      <br />
      <br />

      <page-settings />
    </container>
  </div>
</template>

<script> 
import PageSettings from './PageSettings';
import ColorsDemo from './ColorsDemo/';
import TextDemo from './TextDemo/';
import ButtonsDemo from './ButtonsDemo/';
import ImagesDemo from './ImagesDemo';

export default {
	name: 'WgKit',
	components: {
    PageSettings,
    ColorsDemo,
    TextDemo,
    ButtonsDemo,
    ImagesDemo
  },
}
</script>
<style lang="scss" scoped>
.wg-kit {
  box-sizing: border-box;
  padding: 2rem 0;
  section, .page-settings{
    margin-bottom: 10rem;
  }
  
  .field {
    display: flex;
    flex-flow: column;
    padding: 1rem;
    &__label {
      margin-bottom: 0.5rem;
      font-size: $font-size-xxs; 
      font-weight: 600;
      text-transform: uppercase;
    }
    &__input {
      margin-left: -1rem;
      margin-bottom: 0.5rem;
    }
    &__errors {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        color: $color-error;
      }
    }
  }

  input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-x-8);
    background-color: var(--color-x-11);
    color: var(--color-x-3);
    outline: none;
    @include default-transition('border-color, border-width');
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border: 2px solid var(--color-x-2);
      padding: calc(1rem - 1px);
    }
  }
}
</style>
