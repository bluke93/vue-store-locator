const SET_MODAL_ID = 'SET_MODAL_ID'
const SET_MODAL_CLOSED = 'SET_MODAL_CLOSED'
const SET_MODAL_DATA = 'SET_MODAL_DATA'

const defaultState = {
  id: null,
  isVisible: false,
  data: null
}

export const state = () => ({
  ...defaultState
})

export const mutations = {
  [SET_MODAL_ID](state, id) {
    if (id) { state.isVisible = true }
    state.id = id
  },
  [SET_MODAL_DATA](state, data) {
    state.data = data
  },
  [SET_MODAL_CLOSED](state) {
    state.isVisible = false
    state.data = null
  }
}
