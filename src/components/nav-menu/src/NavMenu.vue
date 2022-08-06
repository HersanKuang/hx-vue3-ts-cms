<script lang="ts" setup>
import { computed, withDefaults, ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "@/store"
import { pathMapToMenu } from "@/utils/map-menus"
import { Monitor, Setting, Goods, ChatLineRound } from "@element-plus/icons-vue"

interface Props {
  collapse: boolean
}
const props = withDefaults(defineProps<Props>(), {
  collapse: false
})
// store
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)

// router
const router = useRouter()
const route = useRoute()
const currentPath = route.path

// data
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.id + "")

// element plus
const icons = [Monitor, Setting, Goods, ChatLineRound]
const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? "/not-found"
  })
}
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
    </div>

    <div class="box">
      <span v-show="!props.collapse" class="title">vue3 + TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><component :is="icons[index]" /></el-icon>
              <span v-if="item.name">{{ item.name }}</span>
            </template>
            <!-- 遍历里边的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <template #title>
                  <span v-if="subitem.name">{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }
  }
  .box {
    position: relative;
    padding: 0;
    margin: 0;
    height: 0;
    left: 60px;
    top: -124px;
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
