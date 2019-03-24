<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a class="text-link" href="">
          Usługi
        </a>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          Blog
        </a>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          O detektywie
        </a>
      </li>
      <li class="navigation__item">
        <a class="text-link" href="">
          Kontakt
        </a>
      </li>
    </ul>
    <p class="navigation__phone">
      <img class="navigation__phone--icon" src="/img/phone.svg">
      <a class="text-link" href="tel:0048519734926">
        Zadzwoń +48 519 734 926
      </a>
    </p>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .navigation {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 80px;
      }
    }

    &__phone {
      margin-left: auto;
      display: flex;
      align-items: center;

      &--icon {
        margin-right: 16px;

        .navigation__phone:hover & {
          animation: phone 2s linear infinite;
        }
      }
    }
  }
</style>
