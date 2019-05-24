<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item in $t('navigation')" :key="item.title" class="navigation__item">
        <span
          v-if="item.submenu"
          :class="{ 'services--active': isMenuVisible }"
          class="services text-link"
          @mouseover="$store.commit('openMenu')"
        >
          {{ item.title }}
        </span>
        <nuxt-link
          v-else
          class="text-link"
          :to="localePath('index') + `#${item.hash}`"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['isMenuVisible'])
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;

    &__item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 48px;
        @include media-up(xlg) {
          margin-right: 80px;
        }
      }
    }
  }

  .services {
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;

      visibility: hidden;
      transform: scaleX(0);
      background-color: currentColor;
      transition: $base-transition;
    }

    &--active {
      &::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
</style>
