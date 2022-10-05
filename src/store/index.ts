import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface InfoItem {
    name: string;
    email: string;
    phoneNumber: string;
    date: string;
    id: number;
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
      console.log("addItem", state.infoList);
    },
    updateItem (state, payload: InfoItem) {
      const foundIndex = state.infoList.findIndex((i) => i.id === payload.id);
      state.infoList[foundIndex] = payload;
      console.log("updateItem", state.infoList);
    },
    deleteItem (state, deleteItemId: number) {
      state.infoList = state.infoList.filter(
          (item) => item.id !== deleteItemId
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
