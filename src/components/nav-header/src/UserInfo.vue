<script lang="ts" setup>
import { computed, reactive, toRefs } from "vue"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
import localCache from "@/utils/cache"
import {
  Tools,
  UserFilled,
  Fold,
  Bell,
  ChatDotRound,
  Postcard
} from "@element-plus/icons-vue"

const store = useStore()
const userInfo = reactive({
  circleUrl:
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
})
const { circleUrl } = toRefs(userInfo)
const name = computed(() => store.state.login.userInfo.name)

const router = useRouter()
const handleExitClick = () => {
  localCache.deleteCache("token")
  localCache.deleteCache("userInfo")
  localCache.deleteCache("userMenus")
  router.push("/main")
}
</script>

<template>
  <div class="user-info">
    <div class="user-icon">
      <el-icon :size="20"><bell /></el-icon>
      <el-icon :size="20"><chat-dot-round /></el-icon>
      <el-icon :size="20"><postcard /></el-icon>
      <div class="dot"></div>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="32" :src="circleUrl" />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick"
            ><el-icon><fold /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided
            ><el-icon><user-filled /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><tools /></el-icon>系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less">
.user-info {
  position: relative;
  text-align: left;
  width: 134px;
  .user-icon {
    position: absolute;
    top: 6px;
    right: 160px;
    width: 100px;
    z-index: 9;
    display: flex;
    .el-icon {
      margin-right: 20px;
      cursor: pointer;
    }
    .dot {
      position: absolute;
      top: -3px;
      right: -8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: red;
      display: inline-block;
      cursor: pointer;
    }
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;

    .el-avatar {
      margin-right: 6px;
    }
  }
}
</style>
