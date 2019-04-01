<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item in $t('navigation')" :key="item.title" class="navigation__item">
        <span
          v-if="item.submenu"
          :class="{ 'services--active': isMenuVisible }"
          class="services"
          @mouseover="$store.commit('openMenu')"
        >
          {{ item.title }}
        </span>
        <nuxt-link
          v-else
          class="text-link"
          :to="{ path: '/', hash: item.hash }"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <p class="navigation__phone">
      <img class="navigation__phone--icon" src="/img/phone.svg">
      <a class="text-link" href="tel:0048519734926">
        {{ $t('cta.call') }} {{ $t('general.phone-full') }}
      </a>
    </p>
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
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 48px;
        @include media-up(xlg) {
          margin-right: 80px;
        }
      }
    }

    &__phone {
      margin-left: auto;
      display: flex;
      align-items: center;

      &--icon {
        margin-right: 16px;

        .navigation__phone:hover & {
          animation: phone 2s linear infinite;
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
