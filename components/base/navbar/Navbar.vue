<template>
  <header :class="{ 'header--scrolled': scrollPosition > 20 }" class="header">
    <logo class="header__logo"/>
    <navigation/>
  </header>
</template>

<script>
import Navigation from '@/components/base/navbar/Navigation'

export default {
  components: {
    Navigation
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
    padding: 24px 40px;

    transition: $base-transition;
    &--scrolled {
      background-color: $primary-color;
    }

    display: flex;
    align-items: center;

    &__logo {
      margin-right: 144px;
    }
  }
</style>
