<template>
  <div class="input">
    <input
      :id="id"
      :type="type"
      :placeholder="optional ? placeholder + ' (opcjonalnie)' : placeholder + ' *'"
      class="input__field"
    >
    <label :for="id" class="input__label">{{ id }}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    optional: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    &__field {
      @include reset-input;
      @include form-field;
      width: 100%;
    }

    &__label {
      @include hide-visually;
    }
  }
</style>
