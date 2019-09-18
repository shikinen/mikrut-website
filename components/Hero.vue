<template>
  <section class="hero">
    <div
      class="hero__content lax"
    >
      <div class="heading__wrapper">
        <h1
          class="heading"
          v-html="$t('hero.heading')"
        />
      </div>
      <h2 class="subheading">
        bezpiecznie, dyskretnie, legalnie
      </h2>
      <h2 class="phone">
        {{ $t('phone.full') }}
      </h2>
    </div>
    <video
      :class="{ faded: scrollPosition > 1100 }"
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

<script>
export default {
  data () {
    return {
      scrollPosition: 0
    }
  },
  mounted () {
    const scrollHandler = () => {
      this.scrollPosition = window.scrollY
    }

    window.addEventListener('scroll', scrollHandler)

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', scrollHandler)
    })
  }
}
</script>

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
  padding-top: 0px;

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
    transition: $base-transition;

    &.faded {
      opacity: 0
    }
  }

  &__video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh + 48px);
    z-index: $overlay-index;
    background-image: linear-gradient(rgba($black, .1) 80%, rgba($black, 1));
  }

  &__content {
    max-width: $container-width;
    margin: 0 auto;
    position: relative;
    z-index: $content-index;
    height: 100vh;
    display: grid;

    grid-template-columns: $container-padding-sm [full-start inner-start] 1fr [inner-end full-end] $container-padding-sm;

    @include media-up(sm) {
      grid-template-columns: $container-padding [full-start inner-start] repeat(2, minmax(min-content, 612px)) [inner-end full-end] $container-padding;
    }

    @include media-up(xlg) {
      grid-template-columns: $container-padding 1fr [full-start inner-start] repeat(2, minmax(min-content, 612px)) [inner-end full-end] 1fr $container-padding;
    }

    grid-template-rows: repeat(4, max-content);

    grid-row-gap: 3px;

    align-content: center;
  }
}

.heading {
  line-height: 1.2;
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;

  @include media-up(sm) {
    font-size: 56px;
  }

  @include media-up(xlg) {
    font-size: 56px;
  }

  &__wrapper {
    position: relative;
    grid-column: inner;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: start;
    display: flex;
  }
}

.phone {
  grid-column: 4/ 5;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: end;
  width: 300px;
  float: right;
  font-weight: 700;
  font-size: 32px;
  color: $gray;
}

.hero-logo {
  position: absolute;
  bottom: 0px;
  right: -32px;
  display: flex;
  align-items: center;

  @include media-up(sm) {
    bottom: 24px;
    right: -54px;
  }

  @include media-up(xlg) {
    top: -44px;
    right: -40px;
  }

  &__line {
    @include line(64px, $gray);
    display: inline-block;
    margin-right: 16px;

    @include media-up(sm) {
      @include line(80px, $gray);
    }

    @include media-up(xlg) {
      @include line(140px, $gray);
    }
  }
}

.subheading {
  grid-column: inner;
  grid-row: 3 / 4;
  justify-self: start;
  font-size: 15.5px;
  line-height: 1.4;
  font-style: italic;
  font-weight: 500;

  @include media-up(sm) {
    font-size: 15px;
  }

  @include media-up(lg) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    text-align: left;
    margin-bottom: 0;
    font-size: 14.5px;
  }

  @include media-up(xlg) {
    grid-column: 3 / 4;
  }

  position: relative;
  &::after {
    display: none;
    content: '';
    position: absolute;
    right: 0;
    bottom: -80%;
    @include media-up(lg) {
      bottom: -80px;
    }
    width: 150px;
    height: 60px;
    background-image: url('/img/signature.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

  .phone {
    margin-top: 24px;
    font-size: 18px;
    color: $accent;
    text-shadow: 2px 2px 12px $accent;
    justify-self: start;
    grid-row: 4 / 5;
    grid-column: 2/3;

    @include media-up(xlg) {
      grid-column: 3/4;
    }
  }
</style>
