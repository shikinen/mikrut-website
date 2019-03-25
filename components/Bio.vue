<template>
  <section class="bio">
    <div>
      <section-title title="Kamil Mikrut" underline/>
      <p class="bio__text subtitle-medium">
        {{ bio }}
      </p>
      <info concession license/>
    </div>
    <img
      srcset="/img/bio-1x.jpg 1x,
              /img/bio-2x.jpg 2x,
              /img/bio-3x.jpg 3x"
      src="/img/bio-1x.jpg"
      class="bio__img"
    >
  </section>
</template>

<script>
import Info from '@/components/base/Info'
import SectionTitle from '@/components/base/SectionTitle'
import data from '~/data/db.json'
export default {
  components: {
    SectionTitle,
    Info
  },
  data () {
    return {
      bio: data.bio.short
    }
  }
}
</script>

<style lang="scss" scoped>
  .bio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    &__content {}

    &__text {
      margin-top: 96px;
      margin-bottom: 72px;
    }

  }
</style>
