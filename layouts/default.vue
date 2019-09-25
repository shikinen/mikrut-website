<template>
  <div class="page-wrapper">
    <navbar/>
    <nuxt/>
    <footer-component class="page-footer"/>
    <phone-button id="phone-global"/>
    <the-cursor/>
  </div>
</template>

<script>
import Navbar from '@/components/base/navbar/Navbar'
import TheCursor from '@/components/base/TheCursor'
import FooterComponent from '@/components/base/Footer'

export default {
  components: {
    Navbar,
    TheCursor,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
  page-enter-active, .page-leave-active {
    transition: all .30s ease-out;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
  }

 .page-wrapper {
   height: 100vh;
   display: flex;
   flex-direction: column;
 }

  .page-footer {
    margin-top: auto;
  }

  #phone-global {
    @include hide-up(lg);
    position: fixed;
    z-index: 10000;
    bottom: 0;
    right: 0;
    margin: $container-padding-sm;
    margin-bottom: 16px;

    @include media-up(sm){
      margin: $container-padding;
      margin-bottom: 32px;
    }

    @include media-up(md){
      margin: $container-padding;
      margin-bottom: 16px;
    }

  }
</style>
