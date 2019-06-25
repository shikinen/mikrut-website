<template>
  <a :href="'tel:' + $t('phone.href')" class="phone-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 26"
    >
      <path
        fill="none"
        fill-rule="evenodd"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16.396 24.067l.014.01a6.007 6.007 0 0 0 7.419-.807l.833-.825a1.958 1.958 0 0 0 0-2.784l-3.515-3.477a1.998 1.998 0 0 0-2.811 0 2.002 2.002 0 0 1-2.81 0l-5.62-5.565a1.954 1.954 0 0 1 0-2.782 1.958 1.958 0 0 0 0-2.784L6.392 1.576a2.002 2.002 0 0 0-2.81 0l-.835.825a5.858 5.858 0 0 0-.813 7.345l.007.014a53.534 53.534 0 0 0 14.455 14.307z"
      />
    </svg>
  </a>
</template>

<style lang="scss" scoped>
  .phone-button {
    @include center-content;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: $accent;
    box-shadow: $accent-shadow-small;

    &:hover {
      @include media-up(sm) {
        transform: scale(1.1);
      }
    }
  }
</style>
