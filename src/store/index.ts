import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"
import system from "./main/system/system"
import dashboard from "./main/analysis/dashboard"
import { getPageListData } from "@/service/main/system/system"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      // 起别名
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData("/menu/list", {})
      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit("changeEntireRole", roleList)
      commit("changeEntireDepartment", departmentList)
      commit("changeEntireMenu", menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  // store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
