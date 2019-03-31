<template>
  <section class="service">
    <div :class="{ 'service__info--left': left }" class="service__info">
      <section-title
        :title="title"
        :left="left"
        class="service__title"
        underline
        right
      />
      <p v-if="text" class="subtitle-medium">
        {{ text }}
      </p>
      <accordion v-else :items="items" :left="left"/>
    </div>
    <img
      v-lazy="'/img/observation-1x.jpg'"
      :class="{ 'service__img--left': left }"
      data-srcset="/img/observation-1x.jpg 1x,
              /img/observation-2x.jpg 2x,
              /img/observation-3x.jpg 3x"
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
    items: {
      type: Array,
      default: () => []
    },
    left: {
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
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;

    &__info,
    &__img {
      grid-row: 1;
    }

    &__info {
      text-align: right;
      grid-column: 6 / 13;
      position: relative;
      z-index: 1;

      &--left {
        text-align: left;
        grid-column: 1 /7;
      }
    }

    &__img {
      grid-column: 1 /7;

      &--left {
        grid-column: 6 / 13;
      }
    }

    &__title {
      margin-bottom: 96px;
    }
  }
</style>
