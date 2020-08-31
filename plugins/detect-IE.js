export default ({ req, store }) => {
  let ua = ''
  let isIE = false

  if (typeof req !== 'undefined') {
    ua = req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    ua = navigator.userAgent
  }

  let msie = ua.indexOf('MSIE ')
  if (msie > 0) {
    isIE = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
  }

  let trident = ua.indexOf('Trident/')
  if (trident > 0) {
    let rv = ua.indexOf('rv:')
    isIE = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
  }

  let edge = ua.indexOf('Edge/')
  if (edge > 0) {
    isIE = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
  }

  store.commit('SET_IS_IE', !!isIE)
}