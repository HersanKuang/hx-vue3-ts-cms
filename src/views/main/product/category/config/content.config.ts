export const contentTableConfig = {
  title: "类别列表",
  newBtnTitle: "添加商品",
  propList: [
    { prop: "name", label: "商品类别", minWidth: "120" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handle" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
