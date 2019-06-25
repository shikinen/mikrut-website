<template>
  <transition name="fade" mode="out-in">
    <ul v-if="isMenuVisible" class="menu" @mouseleave="$store.commit('closeMenu')">
      <li v-for="service in $t('services')" :key="service.title" class="item">
        <nuxt-link class="accent-link" :to="service.id">
          <h3 class="item-title">
            {{ service.title.toLowerCase() }}
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
    padding: 56px 40px;
    background-color: $white;
  }

  .item {
    margin-bottom: 64px;
    color: $black;

    &:not(:last-child) {
      margin-right: 24px;

      @include media-up(lg) {
        margin-right: 40px;
      }
    }
  }

  .item-title {
    @include subtitle-font;
    font-weight: bold;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
