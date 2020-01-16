// import Vue from 'vue'
// import Vuex from 'vuex'
import mutations from './mutations';
import actions from './action';
import getters from './getters';
// Vue.use(Vuex)
// let filePath = 'http://39.107.65.222:8090'//本地
let filePath = 'http://47.96.56.247:8090/'; // new本地
if (process.env.NODE_ENV === 'production') { filePath = ''; }

const state = {
  isLoading: false, // 设置属性
  filePath

};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
