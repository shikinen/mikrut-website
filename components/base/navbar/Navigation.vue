<template>
  <nav class="navigation">
    <ul class="list">
      <li v-if="!isHomePage" class="list-item">
        <nuxt-link :to="localePath('index')">
          {{ $t('navigation.index.title') }}
        </nuxt-link>
      </li>
      <li v-if="isNotAbout" class="list-item">
        <nuxt-link :to="localePath('about')">
          {{ $t('navigation.about.title') }}
        </nuxt-link>
      </li>
      <li class="list-item">
        <a class="services" @mouseover="$store.commit('openMenu')">
          {{ $t('navigation.services.title') }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isMenuVisible']),
    isHomePage () {
      return this.$route.path === this.localePath('index')
    },
    isNotAbout () {
      return this.$route.path !== this.localePath('about')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }

  .list-item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 48px;

      @include media-up(xlg) {
        margin-right: 80px;
      }
    }
  }

  .services {
    cursor: pointer;
  }
</style>
