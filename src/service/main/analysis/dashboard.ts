import hxRequest from "@/service"

enum DashboardAPI {
  amountList = "/goods/amount/list",
  categoryGoodsCount = "goods/category/count",
  categoryGoodsSale = "goods/category/sale",
  categoryGoodsFavor = "goods/category/favor",
  addressGoodsSale = "goods/address/sale"
}

export function getAmountList() {
  return hxRequest.get({
    url: DashboardAPI.amountList
  })
}

export function getCategoryGoodsCount() {
  return hxRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hxRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return hxRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return hxRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
