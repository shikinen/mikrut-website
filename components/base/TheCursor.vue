<template lang="html">
  <div class="cursor-wrap">
    <div ref="cursor" class="cursor"/>
  </div>
</template>

<script>
import throttle from 'raf-throttle'

export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  mounted () {
    const move = throttle(e => {
      // Move cursor
      this.x = e.clientX - 84
      this.y = e.clientY - 84

      this.$el.style.transform = `matrix(1, 0, 0, 1, ${this.x}, ${this.y}`

      // Show cursor on page mouse enter
      this.$refs.cursor.classList.remove('cursor--hidden')

      // Handle hover state
      const hover = e.target.matches('a, a *, button, button *, label, label *, input, .custom-hover, .custom-hover *')
      this.$refs.cursor.classList[hover ? 'add' : 'remove']('cursor--hover')
    })

    const leave = () => {
      this.$refs.cursor.classList.add('cursor--hidden')
    }

    document.addEventListener('mouseleave', leave)
    window.addEventListener('mousemove', move)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousemove', move)
    })
  }
}
</script>

<style lang="scss" scoped>
  .cursor-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

    pointer-events: none;
    mix-blend-mode: difference;
  }

  .cursor {
    $scale: 4;
    width: 42px * $scale;
    height: 42px * $scale;

    border-radius: 42px * $scale;
    border: 1px * $scale solid #fff;

    transition: opacity 0.2s, transform 0.2s, border-color 0.1s;
    transform: scale(1 / $scale);

    position: relative;

    &--hidden {
      opacity: 0 !important;
      transform: scale(0) !important;
    }

    &--black {
      border-color: black;
    }

    &--hover {
      transform: scale(0.4);
      border: 2px * $scale solid #fff;
    }
  }
</style>
