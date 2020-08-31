export default ({ store }) => {
  window.onNuxtReady(() => {
    const getCurrentBPFromStyle = () => window.getComputedStyle(document.body, '::after').content.replace(/['"]+/g, '')

    store.commit('SET_CURRENT_BP', getCurrentBPFromStyle())

    window.addEventListener('resize', () => {
      const currentBP = getCurrentBPFromStyle()
      if (currentBP !== store.state.currentBP) {
        store.commit('SET_CURRENT_BP', currentBP)
      }
    })
  })
}
