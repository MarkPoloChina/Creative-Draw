import { createStore } from "vuex";

export default createStore({
  state: {
    uuid: "",
    result: null,
  },
  getters: {},
  mutations: {
    reviseResult(state, result) {
      state.result = result;
    },
  },
  actions: {},
  modules: {},
});
