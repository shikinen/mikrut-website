<template>
  <section class="container">
    <div class="info">
      <section-title title="Kontakt"/>
      <h4 class="subtitle-semibold">
        Skontaktuj się z detektywem całkowicie anonimowo i bezpiecznie.
      </h4>
      <base-button class="info__button" phone black/>
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
    max-width: 1136px;
    padding: 96px 96px 80px;
    margin: 0 auto;
    margin-top: 500px;
    background: $secondary-color;
    color: $primary-color;

    display: grid;
    grid-template-columns: 384px 1fr;
    grid-column-gap: 60px;
  }

  .form {
    order: -1;
  }

  .info {
    text-align: right;
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-row-gap: 48px;

    &__button {
      align-self: end;
    }
  }
</style>
