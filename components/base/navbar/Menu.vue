<template>
  <transition name="fade" mode="out-in">
    <ul v-if="isMenuVisible" class="menu" @mouseleave="$store.commit('closeMenu')">
      <li v-for="service in $t('services')" :key="service.title" class="item">
        <nuxt-link class="accent-link" :to="{ path: '/', hash: service.id }">
          <h3 class="item__title">
            {{ service.title }}
          </h3>
        </nuxt-link>
      </li>
    </ul>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['isMenuVisible'])
}
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-wrap: wrap;
    max-width: 768px;
    height: 240px;
    background-color: $secondary-color;
    padding: 56px 40px;
  }

  .item {
    margin-bottom: 64px;
    color: $primary-color;

    &:not(:last-child) {
      margin-right: 40px;

      @include media-up(xlg) {
        margin-right: 24px;
      }

      @include media-up(xxlg) {
        margin-right: 40px;
      }
    }

    &__title {
      @include subtitle-font;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
