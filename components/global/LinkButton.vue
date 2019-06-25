<template>
  <div class="wrapper" :class="{ left }">
    <nuxt-link
      class="button"
      :to="to"
    >
      {{ text }}
    </nuxt-link>
    <svg
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="15"
      viewBox="0 0 41 15"
    >
      <g
        class="arrow__shape"
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M1.87 7.875H41M7.957.875L1.435 7.438 7.957 14"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    z-index: 1;
    background: transparent;
    @include small-font;
    padding-left: 56px;
  }

  .wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .arrow {
    margin-left: 16px;
    margin-right: -32px;
    transform: rotate(180deg);

    .left & {
      order: -1;
      margin-left: 0;
      transform: rotate(0deg);
    }

    &__shape {
      stroke: $gray;
    }
  }
</style>
