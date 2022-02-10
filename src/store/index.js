import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {},
  state: {
    user: {
      nome: String,
      id: Number,
      autenticated: Boolean,
    },
  },
  
  mutations: {
    logar(state, user, autenticated) {
      state.user = user;
      state.autenticated = autenticated;
    },
  },
});

export default store;
