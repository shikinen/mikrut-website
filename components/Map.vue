<template>
  <section class="map">
    <div>
      <section-title :title="$t('map.title')" underline left/>
      <p class="map__text subtitle-medium">
        {{ $t('map.description') }}
      </p>
    </div>
    <img src="/img/map.svg">
  </section>
</template>

<script>
import SectionTitle from '@/components/base/SectionTitle'

export default {
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
  .map {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;

    &__text {
      margin-top: 96px;
      margin-bottom: 72px;
      max-width: 378px;
    }

  }
</style>
