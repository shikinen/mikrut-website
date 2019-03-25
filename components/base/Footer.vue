<template>
  <footer class="footer">
    <logo/>
    <ul class="links">
      <li class="links__link">
        <nuxt-link to="" class="text-link">
          Obserwacja
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="" class="text-link">
          Kontrobserwacja
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="" class="text-link">
          Blog
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="" class="text-link">
          O detektywie
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="" class="text-link">
          Kontakt
        </nuxt-link>
      </li>
    </ul>
    <info all/>
    <social all boxed/>
    <small class="copy">{{ `&copy; ${ currentYear }, Kamil Mikrut ` }}</small>
  </footer>
</template>

<script>
import Info from '@/components/base/Info'

export default {
  components: {
    Info
  },
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>


<style lang="scss" scoped>
  .footer {
    @include main-container;
    padding-top: 32px;
    padding-bottom: 160px;
    display: flex;
    justify-content: space-between;

    @include media-down(md) {
      flex-direction: column;
      padding-bottom: 96px;
      & > *:not(:last-child) {
        margin-bottom: 64px;
      }
    }

    font-size: 14px;
    font-weight: 700;
    position: relative;
  }

  .links {
    &__link {
      text-transform: uppercase;
      letter-spacing: 1.4px;
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
  }

  .copy {
    font-size: 12px;
    letter-spacing: 1.1px;
    font-weight: 500;
    position: absolute;
    margin-bottom: 16px;
    bottom: 0;
    right: $container-padding;

    @include media-down(md) {
      right: unset;
      left: $container-padding;
    }
  }
</style>
