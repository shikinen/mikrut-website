<template>
  <aside :class="{ 'visible': isMobileMenuVisible }" class="mobile-menu">
    <div class="mobile-menu__content">
      <ul class="mobile-menu__navigation">
        <li
          v-for="item in $t('navigation')"
          :key="item.title"
          @click="$store.commit('closeMobileMenu')"
        >
          <nuxt-link
            class="text-link"
            :to="{ path: '/', hash: item.hash }"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <base-button phone-big />
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['isMobileMenuVisible'])
}
</script>

<style lang="scss" scoped>
  .mobile-menu {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: $primary-color;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translateY(-100vh);

    &__content {
      margin: auto;
      @include media-down(sm) {
        margin: 144px $container-padding-sm 0;
      }
    }

    &__navigation {
      @include subtitle-font-medium;
      margin-bottom: 48px;

      li:not(:last-child) {
        margin-bottom: 48px;
      }
    }
  }

  .visible {
    transform: translateY(0);
  }
</style>


