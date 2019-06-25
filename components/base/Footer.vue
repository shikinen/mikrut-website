<template>
  <footer class="footer">
    <info class="footer__info" footer/>
    <social class="footer__socials" all />
    <div class="phone">
      <h4 class="phone__number">
        {{ $t('phone.full') }}
      </h4>
      <phone-button class="phone__button"/>
    </div>
  </footer>
</template>

<script>
import Info from '@/components/base/Info'

export default {
  components: {
    Info
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    z-index: 840;
    display: flex;
    flex-direction: column;
    width: 100%;
    @include container-padding(24px);

    @include media-up(sm) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @include media-down(lg) {
      background: $black;
    }

    @include media-up(lg) {
      position: fixed;
      bottom: 0;
      left: 0;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 172px;
        margin: 0 -8px;
        filter: blur(1px);
        box-shadow: inset 0 -152px 60px -60px #000;
        pointer-events: none;
      }
    }

    > * {
      position: relative;
      z-index: 950;
    }

    &__info {
      @include media-down(md) {
        max-width: 280px;
      }
    }

    &__socials {
      @include media-down(sm) {
        margin-top: 48px;
      }
    }
  }

  .phone {
    display: flex;
    align-items: center;

    &__number {
      @include hide-down(lg);
      margin-right: 16px;
      color: $white;
      font-weight: 700;
      letter-spacing: 1.6px;
    }

    & &__button {
      @include hide-down(lg);
    }
  }
</style>
