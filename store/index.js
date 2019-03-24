const state = () => ({
  isMenuVisible: false
})

const mutations = {
  toggleMenu (state, flag) {
    state.isMenuVisible = flag
  }
}


export default {
  state,
  mutations
}
