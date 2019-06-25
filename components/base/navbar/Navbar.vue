<template>
  <header :class="{ 'header--scrolled': scrollPosition > 20 }" class="header" @mouseleave="$store.commit('closeMenu')">
    <nuxt-link :to="localePath('index')" @click.native="closeMenu">
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
  },
  methods: {
    closeMenu () {
      this.$store.commit('closeMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  $header-index: 9999;
  $burger-index: 9998;
  $logo-index: 9997;
  $mobile-menu-index: 9996;
  $navigation-index: 9995;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $header-index;
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
    @include container-padding;
    transition: $base-transition;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: -8px;
      width: 120%;
      height: 172px;
      margin: 0 -8px;
      filter: blur(1px);
      box-shadow: inset 0 152px 70px -70px #000;
      pointer-events: none;
    }

    &__navigation {
      @include hide-down(md);
      position: relative;
      z-index: $navigation-index;
      margin-left: auto;
    }

    &__logo {
      position: relative;
      z-index: $logo-index;
    }

    &__menu {
      position: absolute;
      top: 100%;
      right: $container-padding-sm;

      @include media-up(sm) {
        right: $container-padding;
      }
    }

    &__burger {
      @include hide-up(md);
      margin-left: auto;
      position: relative;
      z-index: $burger-index;
    }

    &__mobile-menu {
      z-index: $mobile-menu-index;
      @include hide-up(md);
    }
  }
</style>
