import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface InfoItem {
    name: string;
    email: string;
    phoneNumber: string;
    date: string;
    id?: number;
}

export default new Vuex.Store({
  state: {
    infoList: [] as InfoItem[],
  },
  getters: {
  },
  mutations: {
    addItem (state, payload: InfoItem) {
      state.infoList.push(payload)
      console.log(state.infoList);
    },
    updateItem (state, payload) {
      const foundIndex = state.infoList.findIndex((i) => i.id === payload.id);
      state.infoList[foundIndex] = payload;
    },
    deleteItem (state, deleteItemIndex) {
      state.infoList = state.infoList.filter(
          (item, index) => index !== deleteItemIndex
      )
    },
    deleteAll (state) {
      state.infoList = []
    },
  },
  actions: {
  },
  modules: {
  }
})
