<template>
  <div class="glassy-buttons">
    <h6>Glassy</h6>
    <!-- <code>&lt;wg-button model="glassy" size="small"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="glassy" size="small" />
    <!-- <code>&lt;wg-button model="glassy"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="glassy" size="medium" />
    <!-- <code>&lt;wg-button model="glassy" size="large"&gt;title&lt;wg-button&gt;</code> -->
    <buttons-list model="glassy" size="large" />
  </div>
</template>

<script>
import ButtonsList from "./ButtonsList";

export default {
  name: "GlassyButtons",
  components: {
    ButtonsList
  }
};
</script>
