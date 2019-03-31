<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__heading" v-html="$t('hero.heading')" />
      <h2 class="hero__subheading subtitle" v-html="$t('hero.subheading')"/>
      <div class="cta">
        <p class="cta__title">
          {{ $t('cta.call') }}
        </p>
        <base-button phone-big/>
      </div>
      <social class="hero__social" all/>
      <!-- <div class="hero__left">
        <span class="hero__left-text">
          Detektyw Mikrut
        </span>
      </div> -->
    </div>
    <video
      class="hero__video"
      src="/video/hero.mp4"
      autoplay
      loop
      playsinline
      muted
    />
    <div class="hero__video-overlay"/>
  </section>
</template>

<style lang="scss" scoped>

.hero {

  &__video {
    object-fit: cover;
    z-index: 1;
  }

  &__video-overlay {
    background: rgba($primary-color, .5);
    z-index: 2;
  }

  &,
  &__content,
  &__video,
  &__video-overlay {
    @include coverer;
  }

  &__content {
    position: relative;
    z-index: 3;
    height: 100vh;
    display: grid;
    grid-template-columns: [full-start] 1fr [inner-start] 968px [inner-end] 1fr [full-end];
    grid-template-rows: repeat(3, max-content);
    grid-row-gap: 16px;
    align-content: center;
    // background-image: url('/img/hero.jpg');
    // background-size: contain;
    // background-position: center;
    // background-repeat: no-repeat;
  }


  &__heading {
    grid-column: inner;
    grid-row: 1 / 2;
    align-self: center;

    font-size: 96px;
    line-height: 1.2;
    font-weight: 700;
  }

  &__subheading {
    grid-column: inner;
    grid-row: 2 / 3;
    text-align: right;
    align-self: start;

    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: -16px;
      transform: translateY(80%);
      display: block;
      width: 194px;
      height: 96px;
      background-image: url('/img/signature.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__social {
    grid-row: 3 / 4;
    align-self: end;
  }

  &__left {
    justify-self: start;
    align-self: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    transform: rotate(-90deg);
    text-align: center;
  }

  &__left-text {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;

    letter-spacing: 3px;
  }
}

.cta {
    grid-column: inner;
    grid-row: 3 / 4;

  &__title {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
}
</style>
