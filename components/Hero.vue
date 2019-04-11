<template>
  <section class="hero">
    <div
      class="hero__content lax"
      data-lax-scale="0 1, vh 0.2"
      data-lax-translate-y="0 0, vh 1200"
      data-lax-opacity="0 1, (vh*0.5) 0"
    >
      <h1
        class="hero__heading"
        v-html="$t('hero.heading')"
      />
      <h2 class="hero__subheading subtitle" v-html="$t('hero.subheading')"/>
      <div class="cta">
        <phone-button phone-big/>
      </div>
      <social class="hero__social" vertical all/>
    </div>
    <video
      class="hero__video"
      src="/video/hero.mp4"
      autoplay
      playsinline
      muted
      loop
    />
    <div class="hero__video-overlay"/>
  </section>
</template>

<style lang="scss" scoped>
$video-index: 1;
$overlay-index: 2;
$content-index: 3;

@mixin hero-animation($animation-name) {
  animation-name: $animation-name;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.hero {
  padding-top: 48px;
  &__video {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: $video-index;
    height: auto;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }

  &__video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh + 48px);
    z-index: $overlay-index;
    background-image: linear-gradient(rgba($primary-color, .3), rgba($primary-color, 1));
  }

  &__content {
    position: relative;
    z-index: $content-index;
    height: 100vh;
    display: grid;

    grid-template-columns: $container-padding-sm [full-start inner-start] 1fr [inner-end full-end] $container-padding-sm;

    @include media-up(sm) {
      grid-template-columns: $container-padding [full-start inner-start] 1fr [inner-end full-end] $container-padding;
    }

    @include media-up(xxlg) {
      grid-template-columns: $container-padding [full-start] 1fr [inner-start] 968px [inner-end] 1fr [full-end] $container-padding;
    }

    grid-template-rows: repeat(4, max-content);

    grid-row-gap: 24px;

    @include media-up(sm) {
      grid-row-gap: 48px;
    }

    @include media-up(md) {
      grid-row-gap: 16px;
    }

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

    font-size: 60px;

    @include media-up(sm) {
      font-size: 80px;
    }

    @include media-up(md) {
      font-size: 96px;
    }

    line-height: 1.2;
    font-weight: 700;
    position: relative;

    @include hero-animation(moveInLeft);
  }

  &__subheading {
    font-style: italic;
    font-weight: 500;
    @include hide-down(sm);
    grid-column: inner;
    grid-row: 2 / 3;
    @include media-up(md) {
      text-align: left;
      margin-bottom: 0;
    }
    align-self: start;

    @include hero-animation(moveInLeft);

    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -24%;
      left: 8%;
      transform: translateY(80%);
      @include media-up(md) {
      }

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
    @include hide-down(md);
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    justify-self: end;
    align-self: center;

    @include media-up(xxlg) {
      grid-column: 4 / 5;
    }
  }
}

.cta {
  grid-column: inner;
  grid-row: 3 / 4;
  justify-self: end;

  @include hero-animation(moveInRight);

  &__title {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
}
</style>
