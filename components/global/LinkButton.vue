<template>
  <div class="button__wrapper">
    <nuxt-link
      :class="{ 'button--small': small, 'button--inline': inline }"
      class="button"
      :to="to"
    >
      {{ text }}
    </nuxt-link>
    <svg
      width="24px"
      height="9px"
      viewBox="0 0 24 9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin="round"
      >
        <g
          :class="{ 'button__arrow--black': black }"
          class="button__arrow"
          transform="translate(-647.000000, -7884.000000)"
          stroke-width="1.5"
        >
          <g transform="translate(152.000000, 7431.000000)">
            <g transform="translate(96.000000, 96.000000)">
              <g transform="translate(270.000000, 304.000000)">
                <g transform="translate(129.000000, 53.000000)">
                  <path id="Path" d="M23.25,4.497 L0.75,4.497"/>
                  <polyline id="Path" points="19.5 8.247 23.25 4.497 19.5 0.747"/>
                </g>
              </g>
            </g>
          </g>
        </g>
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
    small: {
      type: Boolean,
      default: false
    },
    black: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    @include button;
  }

.bigger-font {
  font-size: 24px;
}
</style>
