<template>
  <li :id="item.id" class="accordion-item" :class="{ 'active': item.active, 'left': left }">
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
    left: {
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
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 80px;
    height: 1px;
    background: rgba($secondary-color, .2);
  }

  &.left::after {
    right: unset;
    left: 0;
  }

  &__header {
    position: relative;
  }

  &__title {
    padding: 16px 0;
    text-align: right;
    padding-right: 24px;
    @include subtitle-font-medium;

    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      top: 0;
      margin: auto;
      right: -16px;
      width: 24px;
      height: 2px;
      background: $accent-color;
      box-shadow: $accent-shadow-blurred;
      opacity: 0;
      transform: translateX(100px);
      transition: $base-transition;
    }

    .left & {
      text-align: left;
      padding-left: 24px;
      padding-right: 0;
    }

    .left &::before {
      right: unset;
      left: -16px;
      transform: translateX(-100px);
    }

    .active &::before {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__arrow {
    $size: 8px;
    display: block;
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: $size;
    height: $size;
    border-right: 2px solid $secondary-color;
    border-bottom: 2px solid $secondary-color;
    transform: translateY(-$size / 4) rotate(45deg);
    transition: $base-transition;

    .left & {
      left: unset;
      right: 24px;
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
    padding: 16px 24px;
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
