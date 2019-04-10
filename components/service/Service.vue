<template>
  <section class="service">
    <div :class="{ 'service__info--right': right }" class="service__info">
      <section-title
        :id="id"
        :title="title"
        :right="right"
        class="service__title"
        underline
      />
      <p v-if="text" class="subtitle-medium">
        {{ text }}
      </p>
      <accordion v-else :content="items" :right="right"/>
    </div>
    <img
      v-lazy="`/img/${id}-1x.jpg`"
      :class="{ 'service__img--right': right }"
      :data-srcset="`/img/${id}-1x.jpg 1x,
                     /img/${id}-2x.jpg 2x,
                     /img/${id}-3x.jpg 3x`"
      class="service__img"
    >
  </section>
</template>

<script>
import SectionTitle from '@/components/base/SectionTitle'
import Accordion from '@/components/service/Accordion'

export default {
  components: {
    SectionTitle,
    Accordion
  },
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
    items: {
      type: Array,
      default: () => []
    },
    right: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .service {
    display: grid;
    grid-template-columns: [full-start] repeat(12, 1fr) [full-end];
    grid-column-gap: 16px;

    &__info,
    &__img {
      grid-row: 1;
    }

    &__info {
      grid-column: full;
      @include media-up(md) {
        grid-column: 1 / 7;
      }

      &--right {
        @include media-up(md) {
          text-align: right;
          grid-column: 6 / 13;
        }
      }
    }

    &__img {
      position: relative;
      z-index: -1;
      grid-column: 6 / 13;
      width: 100%;
      max-width: 560px;
      @include media-down(md) {
        display: none;
      }

      &--right {
        grid-column: 1 / 7;
      }
    }

    &__title {
      @include margin-lg;
    }
  }

  $header-offset: 296px;
</style>
