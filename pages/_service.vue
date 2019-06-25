<template>
  <main class="main">
    <div class="content">
      <div class="content__inner">
        <page-title :title="service.title" class="title"/>
        <div>
          <p v-if="service.text" class="paragraph">
            {{ service.text }}
          </p>
          <accordion
            :content="service.items ? service.items : []"
            :list="service.list"
            class="accordion-page"
            right
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import services from '@/assets/js/services'
import PageTitle from '@/components/base/PageTitle'
import Accordion from '@/components/service/Accordion'

export default {
  components: { Accordion, PageTitle },
  data () {
    return {
      service: services.find(service => service.id === this.$route.params.service)
    }
  },
  validate ({ params }) {
    return services.some(service => service.id === params.service)
  }
}
</script>

<style lang="scss" scoped>
  .main {
    @include main-container;
    @include media-down(lg) {
      margin: 144px 0 96px;
    }

    @include media-up(lg) {
      height: 100vh;
      display: grid;
      place-items: center;
    }
  }

  .content {
    width: 100%;

    &__inner {
      position: relative;
      @include media-up(lg) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .title {
    position: relative;
    max-width: 400px;

    @include media-down(lg) {
      margin-bottom: 32px;
    }
    @include media-up(lg) {
      height: 400px;
      display: flex;
      align-items: center;
      margin-right: 72px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 112px;
        height: 1px;
        background: $accent;
      }
    }
  }

  .paragraph {
    max-width: 640px;
    margin-bottom: 24px;
    font-size: 24px;

    @include media-up(lg) {
      text-align: right;
    }
  }

  .go-back {
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 32px;
    @include hide-down(lg);
  }
</style>
