<template>
  <div class="button__wrapper">
    <span v-if="phone || phoneBig" :class="{ 'bigger-font': phoneBig }" class="button__phone">{{ phoneBig ? '+48' : 'Zadzwoń' }}</span>
    <a
      :class="{ 'button--small': small, 'button--phone': phone, 'button--inline': inline, 'bigger-font': phoneBig }"
      class="button"
    >
      {{ phoneBig ? '519 734 926' : phone ? '+48 519 734 926' : text }}
    </a>
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
    phone: {
      type: Boolean,
      default: false
    },
    phoneBig: {
      type: Boolean,
      default: false
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
    @include base-button;
    background-color: $accent-color;
    box-shadow: $accent-shadow-blurred;
    color: $secondary-color;
    padding: 16px 8px;

    font-size: 18px;
    font-weight: 800;

    &, + svg {
      transition: $base-transition;
    }

    &:hover {
      + svg {
        transform: translateX(8px);
      }
    }
    &:active {
      transform: scale(.98);
    }

    &--small {
      padding: 16px 16px;
    }

    &--phone {
      font-size: 16px;
    }

    &--inline {
      padding: 0;
      background: transparent;
      box-shadow: none;
      @include text-link;
      &:hover {
        box-shadow: none;
        transform: none;
      }
    }

    &__arrow {
      stroke: #fff;

      &--black {
        stroke: #000;

        &:active {
          box-shadow: $primary-shadow-small;
        }

        &:hover {
          background-color: black;
          box-shadow: $primary-shadow;
        }
      }
    }

    &__phone {
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 8px;
    }
}

.bigger-font {
  font-size: 24px;
}
</style>
