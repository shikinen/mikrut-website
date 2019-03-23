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
    <div class="info">
      <span>
        detektyw
      </span>
      <hr class="info__line">
      <h4 class="info__text">
        Kamil Mikrut
      </h4>
      <span>
        koncesja MSWiA
      </span>
      <hr class="info__line">
      <h4>
        RD-19/2016
      </h4>
      <span>
        nr licencji
      </span>
      <hr class="info__line">
      <h4>
        0001899
      </h4>
    </div>
    <social all boxed/>
    <small class="copy">{{ `&copy; ${ currentYear }, Kamil Mikrut ` }}</small>
  </footer>
</template>

<script>
export default {
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

  .info {
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: max-content 48px max-content;
    grid-gap: 32px;
    &__line {
      align-self: center;
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
