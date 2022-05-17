// 编写规则
export const rules = {
  name: [
    {
      required: true,
      message: "用户名是必填内容",
      // 失去焦点时验证规则
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: "用户名必须是3~10个字母或者数字",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码是必填内容",
      // 失去焦点时验证规则
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: "密码必须是6位以上字母或者数字",
      trigger: "blur"
    }
  ]
}
