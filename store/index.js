const state = () => ({
  isMenuVisible: false
})

const mutations = {
  openMenu (state) {
    state.isMenuVisible = true
  },
  closeMenu (state) {
    state.isMenuVisible = false
  }
}

export default {
  state,
  mutations
}
