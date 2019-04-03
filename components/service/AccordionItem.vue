<template>
  <li :id="item.id" class="accordion-item" :class="{ 'active': item.active, right }">
    <header class="accordion-item__header">
      <h4 class="accordion-item__title" @click="toggle">
        {{ item.title }}
      </h4>
      <span class="accordion-item__arrow"/>
    </header>
    <transition
      name="slide"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="item.active" class="accordion-item__text-wrapper">
        <p class="accordion-item__text">
          {{ item.text }}
        </p>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    right: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle (event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition (el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition (el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped>


.accordion-item {
  cursor: pointer;

  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 80px;
    height: 1px;
    background: rgba($secondary-color, .2);
    transition: $base-transition;
  }

  &.right::after {
    @include media-up(md) {
      left: unset;
      right: 0;
    }
  }

  &:hover::after {
    background: $accent-color;
  }

  &__header {
    position: relative;
  }

  &__title {
    padding: 16px 0;
    @include media-up(sm) {
      padding-left: 24px;
    }
    @include subtitle-font-medium;

    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      top: 0;
      margin: auto;
      left: -24px;
      width: 16px;
      @include media-up(sm) {
        left: -16px;
        width: 24px;
      }
      height: 2px;
      background: $accent-color;
      box-shadow: $accent-shadow-blurred;
      opacity: 0;
      transform: translateX(-100px);
      transition: $base-transition;
    }

    .right & {
      @include media-up(md) {
        text-align: right;
        padding-right: 24px;
        padding-left: 0;
      }
    }

    .right &::before {
      @include media-up(md) {
        left: unset;
        right: -16px;
        transform: translateX(100px);
      }
    }

    .active &::before {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__arrow {
    @include hide-down(sm);
    $size: 8px;
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    bottom: 0;
    width: $size;
    height: $size;
    border-right: 1px solid rgba($secondary-color, .5);
    border-bottom: 1px solid rgba($secondary-color, .5);
    transform: translateY(-$size / 2) rotate(45deg);
    transition: $base-transition;

    .right & {
      @include media-up(md) {
        right: unset;
        left: 0;
      }
    }

    .active & {
      transform: translateY($size / 4) rotate(225deg);
    }
  }

  &__text-wrapper {
    overflow: hidden;
  }

  &__text {
    overflow: hidden;
    padding: 24px;
    @include media-up(md) {
      padding: 16px 24px;
    }
    @include paragraph-font;
  }
}

.slide-enter-active, .slide-leave-active {
  will-change: height;
  transition: height .2s ease;
}
.slide-enter, .slide-leave-to {
  height: 0 !important;
}
</style>
