<template>
  <section class="container">
    <div class="info">
      <section-title
        id="contact"
        :top="400"
        :title="$t('contact.title')"
        right
      />
      <h4 class="subtitle-semibold" v-html="$t('contact.subtitle')"/>
      <phone-button class="info__button" black/>
    </div>
    <contact-form class="form"/>
  </section>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm'
import SectionTitle from '@/components/base/SectionTitle'
export default {
  components: {
    ContactForm,
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
  .container {

    background: $secondary-color;
    color: $primary-color;

    padding: 48px 24px;

    @include media-up(sm) {
      padding: 80px 48px;
    }

    @include media-up(md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 60px;
    }

    @include media-up(lg) {
      padding: 96px 96px 80px;
    }

  }

  .form {
    order: -1;
  }

  .info {
    margin-bottom: 48px;
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-row-gap: 24px;
    @include media-up(md) {
      text-align: right;
      margin-bottom: 0;
      grid-row-gap: 48px;
    }

    &__button {
      align-self: end;
    }
  }
</style>
