<template>
  <div class="wrapper">
    <link-button
      :to="'/'"
      :text="'wróć'"
      class="go-back"
      left
    />
    <h1 :class="{ underline, right }" class="page-title" v-html="title"/>
  </div>
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
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-title {
    @include title-font;
  }

  .wrapper {
    position: relative;
  }

  .go-back {
    position: absolute;
    top: 0;
    left: 0;
    @include hide-down(lg);
  }

  .underline {
    position: relative;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      display: block;
      width: 96px;
      height: 24px;
      transform: translateX(-10%);
      background-color: $accent;
      box-shadow: $accent-shadow-blurred;

      @include media-up(sm) {
        width: 176px;
      }

      @include media-up(xxlg) {
        transform: translateX(-50%);
      }
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
