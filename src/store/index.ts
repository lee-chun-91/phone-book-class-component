// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
//
// export default new Vuex.Store({
//   state: {
//     infoList: [] as InfoItem[],
//   },
//   getters: {
//   },
//   mutations: {
//     addItem (state, payload: InfoItem) {
//       state.infoList.push(payload)
//       console.log("addItem", state.infoList);
//     },
//     updateItem (state, payload: InfoItem) {
//       const foundIndex = state.infoList.findIndex((i) => i.id === payload.id);
//       state.infoList[foundIndex] = payload;
//       console.log("updateItem", state.infoList);
//     },
//     deleteItem (state, deleteItemId: number) {
//       state.infoList = state.infoList.filter(
//           (item) => item.id !== deleteItemId
//       )
//     },
//     deleteAll (state) {
//       state.infoList = []
//     },
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import ModuleInfoList from "./modules/moduleInfoList";
import {getModule} from 'vuex-module-decorators';

Vue.use(Vuex)

export interface InfoItem {
    name: string;
    email: string;
    phoneNumber: string;
    date: string;
    id: string;
}

export const store = new Vuex.Store({
    modules: {
        infoList: ModuleInfoList
    }
})

export const $infoListStore = getModule(ModuleInfoList, store);

//
// const modules = {
//     infoList: ModuleInfoList
// }
//
// export const store = new Vuex.Store({
//     modules
// })
//
// export const getStore = (name: string) => getModule(name, store);
//
// export const $infoListStore = getStore(ModuleInfoList);





// const modules = {
//     test: testModudle
// }

// export const getStore = (name: ConstructorOf<VuexModule>) => getModule(name, store)
// export const getStore = (name: string) => getModule(name, store)

//
// export const $myNameStore = getStore(myNameStoreClass);
//
// $myNameStore


