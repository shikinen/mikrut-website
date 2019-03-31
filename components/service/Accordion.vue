<template>
  <no-ssr>
    <accordion icon="plus-minus">
      <accordion-item
        v-for="(item, index) in items"
        :key="index"
        :class="{ left }"
        class="accordion-item"
      >
        <h4 slot="title" class="accordion-item__title">
          {{ item.title }}
        </h4>
        <p slot="content" class="accordion-item__content">
          {{ item.text }}
        </p>
      </accordion-item>
    </accordion>
  </no-ssr>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion-item {
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    width: 80px;
    background-color: rgba(#fff, .2);
  }

  &__title {
    padding: 16px;
    @include subtitle-font-medium;
  }

  &__content {
    line-height: $paragraph-line-height;
    padding: 0 16px;
  }
}

.left {
  &::before {
    right: unset;
    left: 0;
  }
}

.card-active {
  &::before {
    visibility: hidden;
  }
}
</style>
