import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  title: "新建用户",
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      type: "password",
      label: "用户密码",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "departmentId",
      type: "select",
      label: "选择部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "选择角色",
      placeholder: "请选择角色",
      options: []
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
    }
  ],
  colLayout: { span: 24 }
}
