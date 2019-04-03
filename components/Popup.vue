<template>
  <div :class="{ open: isPopupVisible }" class="popup">
    <div class="popup__inner">
      <div class="content">
        <p v-for="(paragraph, index) in $t('bio.long')" :key="index" class="content__paragraph">
          {{ paragraph }}
        </p>
      </div>
      <span class="close" @click="$store.commit('closePopup')"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      hidden: false
    }
  },
  computed: mapState(['isPopupVisible'])
}
</script>

<style lang="scss" scoped>
 .popup {
   position: fixed;
   top: 0;
   left: 50%;
   transition: all .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
   transform: translateX(-50%) translateY(100vh);
   margin: 96px auto;
   width: 100%;
   max-width: 1000px;
   height: 88vh;
   background-color: $secondary-color;
   color: $primary-color;
   z-index: 1000000;
   padding: 48px $container-padding-sm;

   @include media-up(sm) {
    padding: $container-padding;
   }

   &__inner {
     position: relative;
   }
 }

  .content {
    overflow-y: scroll;
    height: 88vh;
    font-size: 18px;
    line-height: $paragraph-line-height;
    font-weight: 500;
    overflow-y: scroll;

    &__paragraph {
      &:not(:last-child) {
        margin-bottom: 48px;
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: -8px;
    right: -8px;
    @include media-down(sm) {
      top: -24px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      transition: transform .3s;
      display: inline-block;
      height: 2px;
      background-color: currentColor;
      width: 20px;
    }
    &::before {
      transform: rotate(135deg);

    }

    &::after {
      transform: rotate(-135deg);
    }
  }

  .open {
    transform: translateX(-50%) translateY(0);
  }
</style>
