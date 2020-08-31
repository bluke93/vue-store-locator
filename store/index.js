// import { } from '@/utils/constants'

const SET_IS_READY = 'SET_IS_READY'
const SET_IS_IE = 'SET_IS_IE'
const SET_OS = 'SET_OS'
const SET_CURRENT_BP = 'SET_CURRENT_BP'

export const state = () => ({
  isReady: false,
  isIE: false,
  os: false,
  currentBP: null,
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 992
  }
})

export const mutations = {
  [SET_IS_READY](state, value) {
    state.isReady = value
  },
  [SET_IS_IE](state, value) {
    state.isIE = value
  },
  [SET_OS](state, value) {
    state.os = value
  },
  [SET_CURRENT_BP](state, value) {
    state.currentBP = value
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app, $sentry }) {
    // try {
    //   const [site, menu, footer] = await Promise.all([
    //     app.$axios.$get(SITE_CONFIGURATION_ENDPOINT),
    //     app.$axios.$get(MENU_CONFIGURATION_ENDPOINT),
    //     app.$axios.$get(FOOTER_CONFIGURATION_ENDPOINT)
    //   ])
    //   commit('site/SET_SITE_CONFIGURATIONS', site)
    //   commit('site/SET_MENU_ITEMS', menu)
    //   commit('site/SET_FOOTER_DATA', footer)

    //   if (!!app.$cookies.get('CAC_L_ID')) {
    //     commit('user/SET_IS_TRACKABLE', app.$cookies.get('CAC_L_ID'))
    //   }
    // } catch (err) {
    //   if ($sentry) { $sentry.captureException(err) }
    //   console.error(err)
    // }
  }
}

export const getters = {
  currentBP: state => state.currentBP
}