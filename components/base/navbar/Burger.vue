<template>
  <div class="burger">
    <input
      id="nav-toggle"
      v-model="burger"
      type="checkbox"
      class="burger__checkbox"
    >
    <label for="nav-toggle" class="burger__button">
      <span class="burger__icon"/>
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
    .burger__icon::after {
      width: 20px;
    }
  }
  &__checkbox {
    display: none;

    &:checked + .burger__button .burger__icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    &:checked + .burger__button .burger__icon::after {
      top: 0;
      width: 20px;
      transform: rotate(-135deg);
    }
  }

  &__icon {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -10px;
      transition: transform .3s;
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

  &__button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
