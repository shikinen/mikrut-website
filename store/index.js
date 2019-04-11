const state = () => ({
  isMenuVisible: false,
  isMobileMenuVisible: false
})

const mutations = {
  openMenu (state) {
    state.isMenuVisible = true
  },
  closeMenu (state) {
    state.isMenuVisible = false
  },
  toggleMobileMenu (state, value) {
    state.isMobileMenuVisible = value
  },
  closeMobileMenu (state) {
    state.isMobileMenuVisible = false
  }
}

export default {
  state,
  mutations
}
