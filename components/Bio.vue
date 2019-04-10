<template>
  <section-component id="bio">
    <template slot="main">
      <section-title
        title="Kamil Mikrut"
        underline
        left
      />
      <p class="text">
        {{ $t('bio.short') }}
      </p>
      <info concession license/>
    </template>
    <img
      slot="aside"
      v-lazy="'/img/bio-1x.png'"
      data-srcset="/img/bio-1x.png 1x,
                  /img/bio-2x.png 2x,
                  /img/bio-3x.png 3x"
      class="img"
    >
  </section-component>
</template>

<script>
import SectionComponent from '@/components/base/Section'
import Info from '@/components/base/Info'
import SectionTitle from '@/components/base/SectionTitle'

export default {
  components: {
    SectionComponent,
    SectionTitle,
    Info
  }
}
</script>

<style lang="scss" scoped>

  .text {
    @include subtitle-font-medium;
    @include margin-lg(top);
    margin-bottom: 48px;
  }
  .img {
    width: 100%;
  }
</style>
