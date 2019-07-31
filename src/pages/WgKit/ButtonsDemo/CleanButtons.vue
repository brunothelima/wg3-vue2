<template>
  <div class="clean-buttons">
    <h6>Clean</h6>
    <!-- <code>&lt;wg-button model="clean" size="small"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="clean" size="small" />
    <!-- <code>&lt;wg-button model="clean"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="clean" size="medium" />
    <!-- <code>&lt;wg-button model="clean" size="large"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="clean" size="large" />
  </div>
</template>

<script>
import ButtonsList from './ButtonsList'

export default {
  name: 'CleanButtons',
  components: {
    ButtonsList
  }
}
</script>
