<template>
  <div
    class="wrapper"
    :data-aos="right ? 'fade-left' : 'fade-right'"
    data-aos-easing="ease"
    data-aos-duration="800"
    data-aos-delay="200"
    data-aos-once="true"
  >
    <h3 :class="{ underline, right }" class="section-title">
      {{ title }}
    </h3>
    <a :id="id" :style="{ top: -top + 'px' }" class="scroll-anchor"/>
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
      default: 296
    },
    underline: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
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
    &::before {
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

    &.right::before {
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

  $header-offset: 296px;
  .scroll-anchor {
    display: inline-block;
    position: relative;
    top: -$header-offset;
    left: 0;
    visibility: hidden;
  }
</style>
