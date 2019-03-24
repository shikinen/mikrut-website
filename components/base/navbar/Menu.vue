<template>
  <transition name="fade" mode="out-in">
    <div v-if="isMenuVisible" class="menu" @mouseleave="$store.commit('closeMenu')">
      <div class="info">
        <h4 class="title">
          Usługi detektywa
        </h4>
        <p class="paragraph">
          Poznaj usługi świadczone
          <br>
          przez Agencję Detektywistyczną.
        </p>
      </div>
      <ul class="services-list">
        <li v-for="service in services" :key="service" class="services-list__service">
          <a class="accent-link" href="">
            <h3 class="services-list__title">
              {{ service }}
            </h3>
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import data from '~/data/db.json'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      services: data.services.map(service => service.title)
    }
  },
  computed: mapState(['isMenuVisible'])
}
</script>

<style lang="scss" scoped>
  .menu {
    height: 240px;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 56px 40px;

    display: flex;
    align-items: center;
  }

  .info {
    margin-right: 80px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .services-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 808px;
    margin-top: 64px;
    &__service {
      margin-bottom: 64px;
      &:not(:last-child) {
        margin-right: 80px;
      }
    }
    &__title {
      @include subtitle-font;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
