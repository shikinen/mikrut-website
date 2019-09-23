const state = () => ({
  isMenuVisible: false,
  isMobileMenuVisible: false,
  pageLoaded: false
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
  },
  setPageLoaded (state, value) {
    state.pageLoaded = value
  }
}

export default {
  state,
  mutations
}
