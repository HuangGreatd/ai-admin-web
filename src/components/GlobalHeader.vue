<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <div class="title">遇龙河智能客服后台管理系统</div>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <!-- 用户信息展示栏 -->
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            <a-dropdown>
              <a-space>
                <a-avatar :src="loginUserStore.loginUser.userAvatar" />
                {{ loginUserStore.loginUser.userName ?? '无名' }}
              </a-space>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="doLogout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { computed, h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import { MenuProps, message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/userLoginUserStore.ts'
import { userLogoutUsingPost } from '@/api/userController.ts'
import { routes } from '@/router/routes.ts'

const router = useRouter()
const loginUserStore = useLoginUserStore()

const current = ref<string[]>([])

// 监听路由变化，更新当前选中菜单
router.afterEach((to, from, next) => {
  current.value = [to.path]
})

//自动生成菜单项,并根据 hide 字段过滤隐藏项
const items = computed<MenuProps['items']>(() => {
  return routes
    .filter(route => route.meta?.menu && !route.meta.menu.hide) // 过滤出有 meta.menu 的路由
    .map(route => ({
      key: route.path,
      icon: () => h(route.meta.menu.icon), // 使用路由中定义的图标
      label: route.meta.menu.label, // 使用路由中定义的标签
      title: route.meta.menu.title // 使用路由中定义的标题
    }))
})


// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key
  })
}

// 用户注销
const doLogout = async () => {
  const res = await userLogoutUsingPost()
  console.log(res)
  if (res.data.code === 0) {
    loginUserStore.setLoginUser({
      userName: '未登录'
    })
    message.success('退出登录成功')
    await router.push('/user/login')
  } else {
    message.error('退出登录失败，' + res.data.message)
  }
}
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 10px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}

</style>

