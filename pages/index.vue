<template>
  <div>
    <hero/>
    <main class="main">
      <!-- <intro
        class="inner"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      /> -->
      <bio
        class="inner"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      />
      <service
        v-for="(service, index) in $t('services')"
        :id="service.id"
        :key="index"
        :title="service.title"
        :items="service.items"
        :text="service.text"
        :right="index % 2 === 0"
        :list="service.list"
        class="inner"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      />
      <map-section
        class="inner"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      />
      <blog
        class="inner"
      />
      <contact
        class="overflow"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Service from '@/components/service/Service'
import MapSection from '@/components/Map'
import Blog from '@/components/Blog'
import Bio from '@/components/Bio'
import Contact from '@/components/contact/Contact'

export default {
  components: {
    Hero,
    Service,
    MapSection,
    Blog,
    Bio,
    Contact
  }
}
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    z-index: 4;
    display: grid;

    grid-template-columns: $container-padding-sm [full-start overflow-start inner-start] 1fr [inner-end overflow-end full-end] $container-padding-sm;
    @include media-up(sm) {
      grid-template-columns: $container-padding [full-start overflow-start inner-start] 1fr [inner-end overflow-end full-end] $container-padding;
    }
    @include media-up(xxlg) {
      grid-template-columns: $container-padding [full-start] 1fr [overflow-start] 84px [inner-start] 968px [inner-end] 84px [overflow-end] 1fr [full-end] $container-padding;
    }

    grid-row-gap: 96px;
    padding: 144px 0;
    @include media-up(md) {
      grid-row-gap: 144px;
    }
    @include media-up(lg) {
      grid-row-gap: 196px;
      padding: 196px 0;
    }
    background: $primary-color;
  }

  .full {
    grid-column: full;
  }

  .inner {
    grid-column: inner;
  }

  .overflow {
    @include media-down(sm) {
      grid-column: 1 / -1;
    }
    grid-column: overflow;
  }
</style>
