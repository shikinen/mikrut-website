const state = () => ({
  isMenuVisible: false,
  isMobileMenuVisible: false,
  isPopupVisible: false
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
  openPopup (state) {
    state.isPopupVisible = true
  },
  closePopup (state) {
    state.isPopupVisible = false
  }
}

export default {
  state,
  mutations
}
