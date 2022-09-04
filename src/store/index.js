import { createStore } from "vuex";

export default createStore({
  state: {
    uuid: "",
    result: null,
  },
  getters: {},
  mutations: {
    reviseResult(state, result) {
      localStorage.setItem("result", JSON.stringify(result));
      state.result = result;
    },
    initResult(state,result) {
      state.result = JSON.parse(result);
    }
  },
  actions: {},
  modules: {},
});
