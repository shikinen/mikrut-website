<template>
  <section class="intro">
    <p class="content">
      Działam na terenie całego kraju, oferując szeroką gamę usług związanych z detektywistyką jak też ochroną osobistą, obserwacją, obrotem gospodarczym, czy ustalaniem dochodu.
    </p>
    <div @click="$store.commit('openPopup')">
      <base-button text="Więcej o Detektywie" />
    </div>
    <span class="undertext lax" data-lax-preset="leftToRight">ustalenie dochodów ochrona osobista poszukiwania zdrada rozwód alimenty ustalenie dochodów</span>
  </section>
</template>

<script>
import lax from 'lax.js'
export default {
  mounted () {
    lax.addElement(this.$el) // add your element to lax when it mounts
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    padding: 144px 0;
  }

 .content {
   @include subtitle-font-medium;
   line-height: 1.619;
   margin-bottom: 48px;

   @include media-up(md) {
    max-width: 75%;
   }
 }

  .undertext {
    position: absolute;
    top: -24px;
    left: -300%;
    width: 1000%;
    font-size: 160px;
    font-weight: 700;
    user-select: none;
    opacity: .1;
  }
</style>
