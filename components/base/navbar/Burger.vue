<template>
  <div class="burger">
    <input
      id="nav-toggle"
      v-model="burger"
      type="checkbox"
      class="checkbox"
    >
    <label for="nav-toggle" class="button">
      <span class="icon"/>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isMobileMenuVisible']),
    burger: {
      get () {
        return this.isMobileMenuVisible
      },
      set (value) {
        this.$store.commit('toggleMobileMenu', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .burger {
    transform: rotate(90deg);

    &:hover {
      .icon::after {
        width: 20px;
      }
    }
  }

  .checkbox {
    display: none;

    &:checked + .button .icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    &:checked + .button .icon::after {
      top: 0;
      width: 20px;
      transform: rotate(-135deg);
    }
  }


  .icon {
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -10px;
      display: inline-block;
      height: 2px;
      background-color: currentColor;
      transition: $base-transition;
    }

    &::before {
      top: -4px;
      width: 20px;
    }

    &::after {
      top: 4px;
      width: 16px;
    }
  }

  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>
