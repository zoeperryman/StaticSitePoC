import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticated: false,
        user: null
    },
    mutations: {
        setAuthentication(state, user) {
            state.authenticated = !!(user?.userId);
            state.user = user;
        }
    },
    actions: {
    },
    modules: {
    }
})
