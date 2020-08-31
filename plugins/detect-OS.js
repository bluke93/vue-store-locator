export default ({ req, store }) => {
  let ua = ''

  if (typeof req !== 'undefined') {
    ua = req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent
  }

  const win = ua.match(/Win/gi)
  const mac = ua.match(/Mac/gi)

  if (win?.length) {
    store.commit('SET_OS', 'win')
  } else if (mac?.length) {
    store.commit('SET_OS', 'mac')
  } else {
    store.commit('SET_OS', 'other')
  }
}
