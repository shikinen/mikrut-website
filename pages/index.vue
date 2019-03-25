<template>
  <main class="main">
    <bio class="bio"/>
    <contact class="contact"/>
  </main>
</template>

<script>
import Bio from '@/components/Bio'
import Contact from '@/components/contact/Contact'

export default {
  components: {
    Bio,
    Contact
  }
}
</script>

<style lang="scss" scoped>
  .main {
    margin-top: 500px;
    display: grid;
    grid-template-columns: [full-start] 1fr [overflow-start] 84px [inner-start] 968px [inner-end] 84px [overflow-end] 1fr [full-end];
    margin-bottom: 196px;
    grid-row-gap: 196px;
  }

  .bio {
    grid-column: inner;
  }

  .contact {
    grid-column: overflow;
  }
</style>
