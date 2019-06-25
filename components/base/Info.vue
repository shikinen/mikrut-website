<template>
  <div class="info" :class="{ '--footer' : footer }">
    <div class="element">
      <span class="element__name">
        MSWiA
      </span>
      <div class="line"/>
      <h4 class="element__title">
        RD-19/2016
      </h4>
    </div>
    <div class="element">
      <span class="element__name">
        nr licencji
      </span>
      <div class="line"/>
      <h4 class="element__title">
        0001899
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    @include media-up(md) {
      display: grid;
      grid-gap: 48px;
      grid-template-columns: repeat(2, max-content);
    }

    @include media-up(lg) {
      grid-gap: 64px;
    }
  }

  .element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;

    @include media-down(md) {
      &__name {
        display: inline-block;
        width: 98px;
      }

      &__title {
        width: 72px;
      }
    }
  }


  .info-title {}

  .line {
    width: 48px;
    height: 1px;
    background: $gray;
    margin: 0 16px;

    @include media-up(lg) {
      margin: 0 24px;
    }
  }

  .--footer {
    @include small-font;

    @include media-up(lg) {
      color: $gray;
    }

    @include media-down(md) {
      .element:not(:last-child) {
        margin-bottom: 32px;
      }
    }
  }
</style>
