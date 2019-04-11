<template>
  <main class="main">
    <h1 class="title">
      {{ $t('bio.title') }}
    </h1>
    <p v-for="(paragraph, index) in $t('bio.long')" :key="index" class="paragraph">
      {{ paragraph }}
    </p>
    <div class="signature__wrapper">
      <img v-lazy="'/img/signature.png'" class="signature">
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .main {
    @include main-container;
    margin-top: $header-offset;
    margin-bottom: 144px;
    @include media-up(lg) {
      margin-bottom: 196px;
    }
  }

  .title {
    @include margin-lg(bottom);
  }

  .paragraph {
    font-size: 18px;
    margin-bottom: 32px;
  }

  .signature {
    @include media-down(sm) {
      display: block;
      max-width:230px;
      max-height:95px;
      width: auto;
      height: auto;
    }
    &__wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
