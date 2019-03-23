<template>
  <div>
    <main>
      <nuxt/>
    </main>
    <footer-component/>
  </div>
</template>

<script>
import FooterComponent from '@/components/base/footer'
export default {
  components: {
    FooterComponent
  }
}
</script>
