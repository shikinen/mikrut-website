<template>
  <section class="intro">
    <div class="intro__info">
      <p class="content">
        Działam na terenie całego kraju, oferując szeroką gamę usług związanych z detektywistyką jak też ochroną osobistą, obserwacją, obrotem gospodarczym, czy ustalaniem dochodu.
      </p>
      <link-button text="Więcej o Detektywie" :to="localePath('about')"/>
    </div>
    <img
      v-lazy="'/img/intro-1x.png'"
      data-srcset="/img/intro-1x.png 1x,
                   /img/intro-2x.png 2x,"
      class="intro__img"
    >
    <span class="undertext lax" data-lax-preset="leftToRight">ustalenie dochodów obserwacja zdrada rozwód alimenty ustalenie dochodów</span>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    padding: 144px 0 0;

    display: grid;
    grid-template-columns: [full-start] repeat(12, 1fr) [full-end];
    grid-column-gap: 16px;


    &__info,
    &__img {
      grid-row: 1;
    }

    &__info {
      grid-column: full;
      @include media-up(md) {
        grid-column: 1 / 11;
      }
    }

    &__img {
      width: 100%;
      margin-top: -64px;
      @include hide-down(md);
      grid-column: 8 / 13;
    }
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
    top: -48px;
    left: -300%;
    width: 1000%;
    font-size: 160px;
    font-weight: 700;
    user-select: none;
    opacity: .1;
  }
</style>
