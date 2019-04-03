<template>
  <div class="info">
    <template v-if="all || detective">
      <span>
        detektyw
      </span>
      <hr class="info__line">
      <h4 class="info__text">
        Kamil Mikrut
      </h4>
    </template>
    <template v-if="all || concession">
      <span>
        koncesja MSWiA
      </span>
      <hr class="info__line">
      <h4>
        RD-19/2016
      </h4>
    </template>
    <template v-if="all || license">
      <span>
        nr licencji
      </span>
      <hr class="info__line">
      <h4>
        0001899
      </h4>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    all: {
      type: Boolean,
      default: false
    },
    detective: {
      type: Boolean,
      default: false
    },
    concession: {
      type: Boolean,
      default: false
    },
    license: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: max-content 32px max-content;
    grid-gap: 16px;

    @include media-up(sm) {
      grid-template-columns: max-content 48px max-content;
      grid-gap: 32px;
    }

    &__line {
      align-self: center;
    }
  }
</style>
