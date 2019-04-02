<template>
  <section class="bio">
    <div>
      <section-title
        id="bio"
        title="Kamil Mikrut"
        underline
        left
      />
      <p class="bio__text subtitle-medium">
        {{ $t('bio.short') }}
      </p>
      <info concession license/>
    </div>
    <img
      v-lazy="'/img/bio-1x.png'"
      data-srcset="/img/bio-1x.png 1x,
                   /img/bio-2x.png 2x,
                   /img/bio-3x.png 3x"
      class="bio__img"
    >
  </section>
</template>

<script>
import Info from '@/components/base/Info'
import SectionTitle from '@/components/base/SectionTitle'

export default {
  components: {
    SectionTitle,
    Info
  }
}
</script>

<style lang="scss" scoped>
  .bio {

    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 600px));
    @include media-up(xlg) {
    }
    grid-column-gap: 16px;

    &__img {
      align-self: center;
    }

    &__text {
      margin-top: 96px;
      margin-bottom: 72px;
    }

  }
</style>
