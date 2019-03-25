<template>
  <h3 class="section-title">
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-title {
    font-size: 80px;
    font-weight: 700;
  }
</style>
