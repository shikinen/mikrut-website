<template>
  <h3 :class="{ underline }" class="section-title">
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    underline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-title {
    font-size: 80px;
    font-weight: 700;
  }

  .underline {
    position: relative;
    z-index: 2;
    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      width: 176px;
      height: 24px;
      background-color: $accent-color;
      box-shadow: $accent-shadow-blurred;
    }
  }
</style>
