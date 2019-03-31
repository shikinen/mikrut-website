<template>
<div>
  <hero/>
  <main class="main">
    <service
      v-for="(service, index) in services"
      :key="index"
      :title="service.title"
      :items="service.items"
      :text="service.text"
      :left="(index + 1) % 2 === 0"
      class="inner"
    />
    <map-section v-scroll-reveal class="inner"/>
    <blog v-scroll-reveal class="inner"/>
    <bio v-scroll-reveal class="inner"/>
    <contact v-scroll-reveal class="overflow"/>
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
import data from '~/data/db.json'

export default {
  components: {
    Hero,
    Service,
    MapSection,
    Blog,
    Bio,
    Contact
  },
  data () {
    return {
      services: data.services
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: grid;
    grid-template-columns: 40px [full-start] 1fr [overflow-start] 84px [inner-start] 968px [inner-end] 84px [overflow-end] 1fr [full-end] 40px;
    margin-bottom: 196px;
    grid-row-gap: 196px;
    position: relative;
    margin-top: 100vh;
    &::before {
      content: '';
      @include coverer;
      top: -100vh;
    }
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
