<template>
  <aside :class="{ visible }" class="mobile-menu" @click="closeMenu">
    <ul class="navigation">
      <li>
        <nuxt-link :to="localePath('about')">
          {{ $t('navigation.about.title') }}
        </nuxt-link>
      </li>
      <li
        v-for="service in $t('services')"
        :key="service.title"
        @click="$store.commit('closeMobileMenu')"
      >
        <nuxt-link
          :to="'/' + service.id"
        >
          {{ service.title.toLowerCase() }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({ visible: state => state.isMobileMenuVisible }),
  watch: {
    visible (is) {
      document.querySelector('body').style.position = is ? 'fixed' : 'static'
    }
  },
  methods: {
    closeMenu () {
      this.$store.commit('closeMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: $black;
    transition: all .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translateY(-100vh);
  }

  .navigation {
    margin: auto;
    @include paragraph-font;
    font-weight: 500;

    li:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  .visible {
    transform: translateY(0);
  }
</style>


