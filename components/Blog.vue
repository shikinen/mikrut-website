<template>
  <section class="blog">
    <div class="blog__info">
      <section-title :title="$t('blog.title')"/>
      <base-button :text="$t('cta.read-more')"/>
    </div>
    <ul class="blog__entries">
      <li v-for="(entry, index) in mockEntries" :key="index" class="blog__entry">
        <h4 class="blog__entry-title">
          {{ entry }}
        </h4>
        <base-button class="blog__entry-button" :text="$t('cta.read')" inline/>
      </li>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/base/SectionTitle'
export default {
  components: {
    SectionTitle
  },
  data () {
    return {
      mockEntries: [
        'Na czym polega praca detektywistyczna?',
        'Jak rozponać kłamstwo',
        'Jak przeciwdziałać szpiegostwu przemysłowemu?'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 152px;

    &__text {
      margin-top: 96px;
      margin-bottom: 72px;
    }

    &__info {
      text-align: right;
      display: grid;
      grid-row-gap: 96px;
    }

    &__entries {
      order: -1;
    }

    &__entry {
      display: grid;
      grid-row-gap: 48px;
      &:not(:last-child) {
        margin-bottom: 48px;
      }

      transition: $base-transition;
      &:hover {
        color: $accent-color;
      }
    }

    &__entry-title {
      font-size: 32px;
      line-height: 1.2;
      font-weight: 700;
      max-width: 336px;
    }

    &__entry-button {
      align-self: end;
      justify-self: end;
    }

  }
</style>
