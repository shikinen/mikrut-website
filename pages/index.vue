<template>
  <div>
    <hero/>
    <main class="main">
      <div class="main__content">
        <nuxt-link :to="localePath('about')" class="service inner">
          <h2 class="title">
            O detektywie
          </h2>
          <img class="image" src="/img/o-detektywie.jpg" alt="Detektyw Mikrut Warszawa">
          <div class="overlay"/>
        </nuxt-link>
        <nuxt-link
          v-for="service in $t('services')"
          :key="service.id"
          :to="service.id"
          class="service inner"
        >
          <h2 class="title">
            {{ service.title }}
          </h2>
          <img class="image" :src="`/img/${service.id}.jpg`" :alt="service.title">
          <div class="overlay" />
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    z-index: 4;
    background: $black;

    &__content {
      max-width: $container-width;
      margin: 0 auto;
      padding: 80px 0;

      display: grid;
      grid-row-gap: 48px;
      grid-template-columns: $container-padding-sm [full-start overflow-start inner-start] 1fr [inner-end overflow-end full-end] $container-padding-sm;

      @include media-up(md) {
        grid-row-gap: 48px;
      }

      @include media-up(lg) {
        padding: 112px 0;
      }

      @include media-up(xxlg) {
        grid-template-columns: $container-padding [full-start] 1fr [overflow-start] 1fr [inner-start] repeat(2, minmax(min-content, 612px)) [inner-end] 1fr [overflow-end] 1fr [full-end] $container-padding;
      }
    }
  }

  .full {
    grid-column: full;
  }

  .inner {
    grid-column: inner;
  }

  .service {
    display: block;
    overflow: hidden;
    position: relative;
    height: 336px;
    max-width: 816px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      @include line(112px, $gray);
      transition: $base-transition;
    }

    .title {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      font-size: 24px;
      text-transform: uppercase;
      transition: $base-transition;

      @include media-up(sm) {
        left: 0;
        transform: translateY(-50%);
        width: auto;
        font-size: 40px;
        text-align: left;
      }

      @include media-up(md) {
        font-size: 48px;
      }
    }

    .image {
      float: right;
      filter: blur(2px);
      transition: $base-transition;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($black, .6);
      @include media-up(sm) {
        background: rgba($black, .2);
      }
    }

    &:hover {
      .image {
        filter: blur(0px);
      }

      .title {
        @include media-up(sm) {
          transform: translateX(32px) translateY(-50%);
        }
      }

      &::after {
        background: $accent;
      }
    }
  }

  .overflow {
    @include media-down(sm) {
      grid-column: 1 / -1;
    }
    grid-column: overflow;
  }
</style>
