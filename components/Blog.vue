<template>
  <section class="blog">
    <div class="blog__info">
      <section-title
        id="blog"
        :top="400"
        :title="$t('blog.title')"
        right
      />
      <link-button class="blog__button" :text="$t('cta.read-more')"/>
    </div>
    <ul class="blog__entries">
      <li v-for="(entry, index) in mockEntries" :key="index" class="blog__entry">
        <h4 class="blog__entry-title">
          {{ entry }}
        </h4>
        <link-button class="blog__entry-button" :text="$t('cta.read')" inline/>
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
    @include media-up(md) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 96px;
    }

    @include media-up(xlg) {
      grid-column-gap: 152px;
    }

    &__info {
      margin-bottom: 80px;

      @include media-up(md) {
        margin-bottom: 0;
        text-align: right;
      }
    }

    &__button {
      @include margin-lg(top);
    }

     &__text {
      margin-top: 96px;
      margin-bottom: 72px;
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
      line-height: 1.2;
      font-weight: 700;
      max-width: 336px;
      font-size: 24px;
      @include media-up(sm) {
        font-size: 32px;
      }
    }

    &__entry-button {
      align-self: end;
      justify-self: end;
    }

  }
</style>
