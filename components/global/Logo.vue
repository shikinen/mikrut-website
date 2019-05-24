<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 12.9 12.9"
      width="32"
      height="32"
      class="logo--mobile"
    >
      <path fill="#fff" d="M6.4,12.4c-3.3,0-5.9-2.7-5.9-5.9c0-3.3,2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9C12.4,9.7,9.7,12.4,6.4,12.4z"/>
      <path :fill="color" d="M6.4,1c3,0,5.4,2.4,5.4,5.4s-2.4,5.4-5.4,5.4S1,9.4,1,6.4S3.4,1,6.4,1 M6.4,0C2.9,0,0,2.9,0,6.4s2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4S10,0,6.4,0L6.4,0z"/>
      <circle
        cx="6.4"
        cy="6.4"
        r="3.6"
      />
      <circle
        fill="#fff"
        cx="4.2"
        cy="4.1"
        r="1.5"
      />
    </svg>
    <div class="logo--desktop">
      <h2 class="title">
        Detektyw Mikrut
      </h2>
      <div class="line"/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 12.9 12.9"
        width="16"
        height="16"
      >
        <path fill="#fff" d="M6.4,12.4c-3.3,0-5.9-2.7-5.9-5.9c0-3.3,2.7-5.9,5.9-5.9s5.9,2.7,5.9,5.9C12.4,9.7,9.7,12.4,6.4,12.4z"/>
        <path :fill="color" d="M6.4,1c3,0,5.4,2.4,5.4,5.4s-2.4,5.4-5.4,5.4S1,9.4,1,6.4S3.4,1,6.4,1 M6.4,0C2.9,0,0,2.9,0,6.4s2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4S10,0,6.4,0L6.4,0z"/>
        <circle
          cx="6.4"
          cy="6.4"
          r="3.6"
        />
        <circle
          fill="#fff"
          cx="4.2"
          cy="4.1"
          r="1.5"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    color () {
      return this.black ? '#000' : '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    &--mobile {
      @include hide-up(sm);
    }

    &--desktop {
      @include hide-down(sm);
      display: flex;
      align-items: center;
    }
  }


  .title {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.9px;
  }

  .line {
    margin: 0 16px;
    width: 80px;
    height: 1px;
    background: $gray;
  }
</style>

