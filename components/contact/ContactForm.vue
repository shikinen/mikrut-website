<template>
  <form class="form" @submit.prevent>
    <input-component
      id="phone"
      type="phone"
      placeholder="Numer telefonu"
    />
    <input-component
      id="name"
      type="text"
      placeholder="Imię i nazwisko"
      optional
    />
    <textarea-component
      id="message"
      placeholder="Wiadomość"
    />
    <base-button
      class="form__button"
      text="Wyślij"
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
