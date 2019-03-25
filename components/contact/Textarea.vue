<template>
  <div class="textarea">
    <textarea
      :id="id"
      :placeholder="optional ? placeholder + ' (opcjonalnie)' : placeholder + ' *'"
      :rows="rows"
      class="textarea__field"
    />
    <label class="textarea__label" for="id">{{ id }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 5
    },
    optional: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea {
    &__field {
      @include reset-input;
      @include form-field;
      line-height: $paragraph-line-height;
      width: 100%;
      resize: none;
    }

    &__label {
      @include hide-visually;
    }
  }
</style>
