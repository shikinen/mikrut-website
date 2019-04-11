<template>
  <header :class="{ 'header--scrolled': scrollPosition > 20 }" class="header" @mouseleave="$store.commit('closeMenu')">
    <nuxt-link :to="localePath('index')">
      <logo class="header__logo"/>
    </nuxt-link>
    <navigation class="header__navigation"/>
    <burger class="header__burger"/>
    <mobile-menu class="header__mobile-menu"/>
    <menu-component class="header__menu"/>
  </header>
</template>

<script>
import Navigation from '@/components/base/navbar/Navigation'
import MenuComponent from '@/components/base/navbar/Menu'
import MobileMenu from '@/components/base/navbar/MobileMenu'
import Burger from '@/components/base/navbar/Burger'
import { mapState } from 'vuex'

export default {
  components: {
    Navigation,
    MenuComponent,
    Burger,
    MobileMenu
  },
  data () {
    return {
      scrollPosition: 0,
      windowWidth: 0
    }
  },
  computed: mapState(['isMobileMenuVisible']),
  watch: {
    windowWidth (value) {
      if (value > 1000 && this.isMobileMenuVisible) this.$store.commit('closeMobileMenu')
    }
  },
  mounted () {
    const scrollHandler = () => {
      this.scrollPosition = window.scrollY
    }

    window.addEventListener('scroll', scrollHandler)

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', scrollHandler)
    })

    const resizeHandler = () => {
      this.windowWidth = window.innerWidth
    }

    window.addEventListener('resize', resizeHandler)

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', resizeHandler)
    })
  }
}
</script>

<style lang="scss" scoped>
  $header-index: 9999;
  $burger-index: 9998;
  $logo-index: 9997;
  $mobile-menu-index: 9996;
  .header {
    position: fixed;
    z-index: $header-index;
    top: 0;
    left: 0;
    width: 100%;

    padding: 0 $container-padding-sm;
    @include media-up(sm) {
      padding: 0 $container-padding;
    }

    height: 96px;

    transition: $base-transition;
    &--scrolled {
      background-color: $primary-color;
    }

    display: flex;
    align-items: center;

    &__navigation {
      @include hide-down(lg);
      max-width: calc(100% - 144px - 48px);
      margin-left: auto;
    }

    &__logo {
      position: relative;
      z-index: $logo-index;
    }

    &__menu {
      position: absolute;
      top: 100%;
      left: 230px;
    }

    &__burger {
      @include hide-up(lg);
      margin-left: auto;
      position: relative;
      z-index: $burger-index;
    }

    &__mobile-menu {
      z-index: $mobile-menu-index;
      @include hide-up(lg);
    }
  }
</style>
