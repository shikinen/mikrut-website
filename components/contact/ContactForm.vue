<template>
  <form class="form" @submit.prevent>
    <input-component
      id="phone"
      type="phone"
      :placeholder="$t('contact.phone-placeholder')"
    />
    <input-component
      id="name"
      type="text"
      :placeholder="$t('contact.name-placeholder')"
      optional
    />
    <textarea-component
      id="message"
      :placeholder="$t('contact.phone-placeholder')"
    />
    <link-button
      class="form__button"
      :text="$t('cta.send')"
      small
      black
    />
  </form>
</template>

<script>
import InputComponent from '@/components/contact/Input'
import TextareaComponent from '@/components/contact/Textarea'

export default {
  components: {
    InputComponent,
    TextareaComponent
  }
}
</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    display: grid;
    grid-row-gap: 16px;

    &__button {
      justify-self: end;
    }
  }
</style>
