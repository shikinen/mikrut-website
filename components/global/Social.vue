<template>
  <ul :class="{ 'socials--boxed': boxed, vertical }" class="socials">
    <li v-if="all || instagram" class="socials__icon">
      <a
        class="socials__link"
        href="https://www.instagram.com/detektywmikrut/"
        rel="nofollow"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          viewBox="0 0 169 169"
          class="socials__svg"
        >
          <title>Detektyw Mikrut Instagram</title>
          <g>
            <path
              d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
              c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
              c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
              c17.455,0,31.656,14.201,31.656,31.655V122.407z"
            />
            <path
              d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
              C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
              c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
            />
            <path
              d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
              c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
              C135.661,29.421,132.821,28.251,129.921,28.251z"
            />
          </g>
        </svg>
      </a>
    </li>
    <li v-if="all || facebook" class="socials__icon">
      <a
        class="socials__link"
        href="https://www.facebook.com/detektyw.mikrut/"
        rel="nofollow"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 58 58"
          width="16"
          height="16"
          class="socials__svg"
        >
          <title>Detektyw Mikrut Facebook</title>
          <path
            d="M53.85,0H3.15A3.15,3.15,0,0,0,0,3.15v50.7A3.15,3.15,0,0,0,3.15,57h27.3V35H23V26.33h7.41V20c0-7.37,4.49-11.38,11.06-11.38A62.15,62.15,0,0,1,48.15,9v7.69H43.61c-3.57,0-4.26,1.69-4.26,4.18v5.5H47.9L46.79,35H39.35V57h14.5A3.15,3.15,0,0,0,57,53.85V3.15A3.15,3.15,0,0,0,53.85,0Z"
          />
        </svg>
      </a>
    </li>
    <li v-if="all || linkedin" class="socials__icon">
      <a
        class="socials__link"
        href="https://www.linkedin.com/in/kamilmikrut/"
        rel="nofollow"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          viewBox="0 0 430.117 430.118"
          class="socials__svg"
        >
          <title>Detektyw Mikrut Linkedin</title>
          <g>
            <path
              d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
              c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
              M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
              c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
              M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
              c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
              c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
              c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"
            />
          </g>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    boxed: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    all: {
      type: Boolean,
      default: false
    },
    instagram: {
      type: Boolean,
      default: false
    },
    facebook: {
      type: Boolean,
      default: false
    },
    linkedin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .socials {
    display: flex;
    align-items: flex-start;

    &__icon {
      &:not(:last-child) {
        margin-right: 40px;
      }

      transition: $base-transition;
      &:hover {
        transform: translateY(-4px);
      }
    }

    &__svg {
      fill: $secondary-color;
    }

    &--boxed {
      .socials__icon {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
      .socials__link {
        width: 32px;
        height: 32px;
        @include center-content;
        background-color: currentColor;
      }
      .socials__svg {
        fill: $primary-color;
      }
    }
  }

  .vertical {
    flex-direction: column;
    .socials__icon {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 40px;
      }

      &:hover {
        transform: translateX(-4px);
      }
    }


    .socials--boxed {
      .socials__icon {
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 16;
        }
      }
    }
  }
</style>

