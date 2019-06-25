<template>
  <li
    :id="item.id"
    class="accordion-item"
    :class="{ 'active': item.active, right, list }"
    @click="toggle"
  >
    <header class="accordion-item__header">
      <h4 class="accordion-item__title">
        {{ item.title }}
      </h4>
    </header>
    <transition
      name="slide"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="item.active && item.text" class="accordion-item__text-wrapper">
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
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle (event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.id) item.item.active = !item.item.active
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

  &.list {
    cursor: default;

    &:hover::after {
      background: rgba($white, .2);
    }
  }

  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 80px;
    height: 1px;
    background: rgba($white, .2);
    transition: $base-transition;
  }

  &.right::after {
    @include media-up(lg) {
      left: unset;
      right: 0;
    }
  }

  &:hover::after {
    background: $accent;
  }

  &__header {
    position: relative;
  }

  &__title {
    padding: 16px 0;

    @include media-up(sm) {
      padding-left: 32px;
    }

    @include subtitle-font;

    position: relative;
    &::before {
      @include hide-down(sm);
      content: '';
      position: absolute;
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
      background: $accent;
      box-shadow: $accent-shadow-blurred;
      opacity: 0;
      transform: translateX(-100px);
      transition: $base-transition;
    }

    .right & {
      @include media-up(lg) {
        text-align: right;
        padding-right: 32px;
        padding-left: 0;
      }
    }

    .right &::before {
      @include media-up(lg) {
        left: unset;
        right: -16px;
        transform: translateX(100px);
      }
    }

    .active &::before {
      opacity: 1;
      transform: translateX(0);
    }

    .list &::before {
      opacity: 0;
    }
  }

  &__text-wrapper {
    width: 100%;
    overflow: hidden;

  }

  &__text {
    overflow: hidden;
    padding: 0 0 24px;
    max-width: 620px;
    @include paragraph-font;

    @include media-up(sm) {
      padding: 0 32px 24px;
    }

    .right & {
      @include media-up(lg) {
        float: right;
        text-align: right;
      }
    }
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
