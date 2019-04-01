<template>
  <div>
    <hero/>
    <main class="main">
      <service
        v-for="(service, index) in $t('services')"
        :id="service.id"
        :key="index"
        :title="service.title"
        :items="service.items"
        :text="service.text"
        :left="(index + 1) % 2 === 0"
        class="inner"
      />
      <map-section class="inner"/>
      <blog class="inner"/>
      <bio class="inner"/>
      <contact class="overflow"/>
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
    grid-template-columns: 40px [full-start] 1fr [overflow-start] 84px [inner-start] 968px [inner-end] 84px [overflow-end] 1fr [full-end] 40px;
    padding: 196px 0;
    grid-row-gap: 196px;
    background: $primary-color;
  }

  .full {
    grid-column: full;
  }

  .inner {
    grid-column: inner;
  }

  .overflow {
    grid-column: overflow;
  }
</style>
