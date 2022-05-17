import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入ID"
    },
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价格",
      placeholder: "请输入原价格"
    },
    {
      field: "newPrice",
      type: "input",
      label: "现价格",
      placeholder: "请输入现价格"
    },
    {
      field: "address",
      type: "input",
      label: "发货地址",
      placeholder: "请输入发货地址"
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
      ]
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
}
