<template>
  <header :class="{ 'header--scrolled': scrollPosition > 20 }" class="header">
    <logo class="header__logo"/>
    <navigation/>
    <menu-component class="header__menu"/>
  </header>
</template>

<script>
import Navigation from '@/components/base/navbar/Navigation'
import MenuComponent from '@/components/base/navbar/Menu'

export default {
  components: {
    Navigation,
    MenuComponent
  },
  data () {
    return {
      scrollPosition: 0
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
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    padding: 0 40px;
    height: 96px;

    transition: $base-transition;
    &--scrolled {
      background-color: $primary-color;
    }

    display: flex;
    align-items: center;

    &__logo {
      margin-right: 144px;
    }

    &__menu {
      position: absolute;
      top: 100%;
      left: 230px;
    }
  }
</style>
