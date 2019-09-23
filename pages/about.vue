<template>
  <main class="main">
    <h1 class="title" v-html="$t('bio.title')"/>
    <p v-for="(paragraph, index) in $t('bio.long')" :key="index" class="paragraph">
      {{ paragraph }}
    </p>
    <div class="signature__wrapper">
      <img v-lazy="'/img/signature.png'" class="signature" alt="Podpis detektyw Mikrut">
    </div>
    <img class="picture" src="/img/detektyw.png" alt="Detektyw Mikrut Warszawa">
  </main>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        {
          hid: 'title',
          meta: 'title',
          content: 'Doświadczony prywatny detektyw Kamil Mikrut'
        },
        {
          hid: 'description',
          meta: 'description',
          content: 'Doświadczony prywatny detektyw Kamil Mikrut – usługi detektywwistyczne na terenie całej Polski – Warszawa, Łódź, Gdańsk, Kraków, Katowwice, Wrocław, Poznań '
        }
      ]
    }
  }
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

  .paragraph,
  .signature__wrapper {
    @include media-up(lg) {
      max-width: 800px;
    }

    @include media-up(xlg) {
      max-width: 600px;
    }
  }

  .paragraph {
    position: relative;
    z-index: 1;
    margin-bottom: 32px;
    font-size: 18px;
    text-align: justify;
  }

  .signature {
    max-width: 180px;
    max-height: 72px;

    &__wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }

  .picture {
    position: fixed;
    top: $header-offset;
    right: 5%;
    max-width: 400px;
    @include hide-down(xlg);
  }
</style>
