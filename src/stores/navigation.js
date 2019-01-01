import { CHANGE_STATE } from './navigation.mutations'

const state = {
    navState: false
}
const getter = {
    navState: state => {
        return state.navState
    }
}
const mutations = {
    [CHANGE_STATE] (state) {
        state.navState = ! state.navState
    }
}
const actions = {
    [CHANGE_STATE] ({ commit }) {
        commit(CHANGE_STATE)
    }
}

export default {
    namespaced: true,
    state,
    getter,
    mutations,
    actions
}