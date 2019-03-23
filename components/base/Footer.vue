<template>
  <footer class="footer">
    <logo/>
    <ul class="links">
      <li class="links__link">
        <nuxt-link to="">
          Obserwacja
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="">
          Kontrobserwacja
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="">
          Blog
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="">
          O detektywie
        </nuxt-link>
      </li>
      <li class="links__link">
        <nuxt-link to="">
          Kontakt
        </nuxt-link>
      </li>
    </ul>
    <div class="info">
      <span>
        detektyw
      </span>
      <hr class="info__line">
      <span class="info__text">
        Kamil Mikrut
      </span>
      <span>
        koncesja MSWiA
      </span>
      <hr class="info__line">
      <span>
        RD-19/2016
      </span>
      <span>
        nr licencji
      </span>
      <hr class="info__line">
      <span>
        0001899
      </span>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  .footer {
    @include main-container;
    border: 1px solid gray;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }

  .links {
    &__link {
      text-transform: uppercase;
      letter-spacing: 1.4px;
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
  }

  .info {
    display: grid;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: max-content 48px max-content;
    grid-gap: 32px;
    &__line {
      align-self: center;
    }
  }
</style>
