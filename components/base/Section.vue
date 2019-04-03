<template>
  <section class="section">
    <div class="section__main">
      <slot name="main"/>
    </div>
    <aside class="section__aside">
      <slot name="aside"/>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
  .section {
    display: grid;
    grid-template-columns: [full-start] repeat(2, 1fr) [full-end];
    @include media-up(xlg) {
    }
    grid-column-gap: 16px;

    &__main {
      @include media-down(md) {
        grid-column: full;
      }
    }

    &__aside {
      @include hide-down(md);
      align-self: center;
      max-width: 560px;
    }
  }
</style>
