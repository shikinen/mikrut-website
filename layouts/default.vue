<template>
  <div class="page-wrapper">
    <navbar/>
    <nuxt/>
    <footer-component/>
  </div>
</template>

<script>
import Navbar from '@/components/base/navbar/Navbar'
import FooterComponent from '@/components/base/footer'

export default {
  components: {
    Navbar,
    FooterComponent
  }
}
</script>
