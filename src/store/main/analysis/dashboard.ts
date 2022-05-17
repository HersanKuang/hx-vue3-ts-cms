import { Module } from "vuex"
import { IDashboardState } from "./types"
import { IRootState } from "../../types"
import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    },
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const resultTopPanelDatas = await getAmountList()
      const categoryCountResult = await getCategoryGoodsCount()
      const categorySaleResult = await getCategoryGoodsSale()
      const categoryFavorResult = await getCategoryGoodsFavor()
      const addressGoodsResult = await getAddressGoodsSale()
      commit("changeTopPanelDatas", resultTopPanelDatas.data)
      commit("changeCategoryGoodsCount", categoryCountResult.data)
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      commit("changeAddressGoodsSale", addressGoodsResult.data)
    }
  }
}

export default dashboardModule
