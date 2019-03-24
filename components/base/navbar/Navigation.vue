<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item ">
        <span :class="{ 'services--active': isMenuVisible }" class="services" @mouseover="$store.commit('openMenu')">
          Usługi
        </span>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          Blog
        </a>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          O detektywie
        </a>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          Kontakt
        </a>
      </li>
    </ul>
    <p class="navigation__phone">
      <img class="navigation__phone--icon" src="/img/phone.svg">
      <a class="text-link" href="tel:0048519734926">
        Zadzwoń +48 519 734 926
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
        margin-right: 80px;
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
