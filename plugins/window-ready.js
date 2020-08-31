export default ({ store }) => {
  window.addEventListener('load', () => {
    store.commit('SET_IS_READY', true)
  })
}
