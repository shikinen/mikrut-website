<template>
  <footer class="footer">
    <logo/>
    <ul class="links">
      <li v-for="service in footerLinks" :key="service.title" class="links__link">
        <a href="" class="text-link">
          {{ service.title }}
        </a>
      </li>
    </ul>
    <info all/>
    <social all boxed/>
    <small class="copy">{{ `&copy; ${currentYear}, Kamil Mikrut` }}</small>
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
  },
  computed: {
    footerLinks () {
      const services = this.$t('services').slice(0, 2)
      const links = this.$t('navigation').slice(1)
      return services.concat(links)
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    @include main-container;

    padding-top: 32px;
    padding-bottom: 96px;
    & > *:not(:last-child) {
      margin-bottom: 64px;
    }

    @include media-up(md) {
      display: flex;
      padding-bottom: 160px;
      justify-content: space-between;
      & > *:not(:last-child) {
        margin-bottom: 0;
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
    left: $container-padding;

    @include media-up(md) {
      left: unset;
      right: $container-padding;
    }
  }
</style>
