<template>
  <div class="setion-title__wrapper">
    <span :id="id" class="scroll-anchor"/>
    <h3
      :class="{ underline, right }"
      class="section-title"
      :data-aos="isMobile ? 'fade-right' : right ? 'fade-left' : 'fade-right'"
      data-aos-easing="ease-in-out-quart"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      {{ title }} {{ isMobile ? 'fade-right' : right ? 'fade-left' : 'fade-right' }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 96
    },
    underline: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isMobile () {
      return this.$mq === 'sm'
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-anchor {
    display: block;
    margin-top: -$header-offset;
    height: $header-offset;
    visibility: hidden;
    pointer-events: none;
  }

  .section-title {
    font-size: 48px;
    font-weight: 700;
    overflow-wrap: break-word;
    hyphens: auto;

    @include media-up(sm) {
      font-size: 64px;
      overflow-wrap: normal;
      hyphens: none;
    }

    @include media-up(lg) {
      font-size: 80px;
    }
  }

  .underline {
    position: relative;
    z-index: 2;
    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      left: 0;

      transform: translateX(-10%);
      @include media-up(xxlg) {
        transform: translateX(-50%);
      }

      bottom: 0;
      width: 96px;

      @include media-up(sm) {
        width: 176px;
      }
      height: 24px;
      background-color: $accent-color;
      box-shadow: $accent-shadow-blurred;
    }

    &.right::after {
      @include media-up(md) {
        left: unset;
        right: 0;
        transform: translateX(10%);
      }

      @include media-up(xxlg) {
        transform: translateX(50%);
      }
    }
  }
</style>
