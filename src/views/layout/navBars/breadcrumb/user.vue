<template>
    <div class="layout-navbars-breadcrumb-user">
        <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" @command="onLanguageChange">
            <div class="layout-navbars-breadcrumb-user-icon">
				<i class="iconfont " :class="disabledI18n === 'en' ? 'icon-fuhao-yingwen' : 'icon-fuhao-zhongwen'" :title="$t('message.user.title1')"></i>
			</div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="zh-cn" :disabled="disabledI18n === 'zh-cn'">简体中文</el-dropdown-item>
					<el-dropdown-item command="en" :disabled="disabledI18n === 'en'">English</el-dropdown-item>
					<el-dropdown-item command="zh-tw" :disabled="disabledI18n === 'zh-tw'">繁體中文</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <!-- 菜单搜索 -->
        <div class="layout-navbars-breadcrumb-user-icon" @click="onSearchClick">
			<i class="el-icon-search" :title="$t('message.user.title2')"></i>
		</div>
        <!-- 布局配置 -->
        <div class="layout-navbars-breadcrumb-user-icon" @click="onLayoutSetingClick">
			<i class="icon-skin iconfont" :title="$t('message.user.title3')"></i>
		</div>
        <!-- 消息通知 -->
        <div class="layout-navbars-breadcrumb-user-icon">
			<el-popover placement="bottom" trigger="click" v-model:visible="isShowUserNewsPopover" :width="300" popper-class="el-popover-pupop-user-news">
				<template #reference>
					<el-badge :is-dot="true" @click="isShowUserNewsPopover = !isShowUserNewsPopover">
						<i class="el-icon-bell" :title="$t('message.user.title4')"></i>
					</el-badge>
				</template>
				<transition name="el-zoom-in-top">
                    <!-- 消息通知 -->
					<UserNews v-show="isShowUserNewsPopover" />
				</transition>
			</el-popover>
		</div>
        <!-- 全屏开关 -->
        <div class="layout-navbars-breadcrumb-user-icon mr10" @click="onScreenfullClick">
			<i
				class="iconfont"
				:title="isScreenfull ? $t('message.user.title5') : $t('message.user.title6')"
				:class="!isScreenfull ? 'icon-fullscreen' : 'icon-tuichuquanping'"
			></i>
		</div>
        <el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
			<span class="layout-navbars-breadcrumb-user-link">
				<img :src="getUserInfos.photo" class="layout-navbars-breadcrumb-user-link-photo mr5" />
				{{ getUserInfos.userName === '' ? 'test' : getUserInfos.userName }}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="/home">{{ $t('message.user.dropdown1') }}</el-dropdown-item>
					<el-dropdown-item command="/404">{{ $t('message.user.dropdown3') }}</el-dropdown-item>
					<el-dropdown-item command="/401">{{ $t('message.user.dropdown4') }}</el-dropdown-item>
					<el-dropdown-item divided command="logOut">{{ $t('message.user.dropdown5') }}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
        <!-- <Search ref="searchRef" /> -->
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed, onMounted } from 'vue'
import { useStore } from '@/store/index'
import { getLocal } from '@/utils/storage'
import UserNews from '@/views/layout/navBars/breadcrumb/userNews.vue'
// import Search from '@/views/layout/navBars/breadcrumb/search.vue'
export default {
  name: 'LayoutBreadcrumbUser',
  components: { UserNews },
  setup() {
    const store = useStore()
    const state: any = reactive({
      disabledI18n: false,
      isScreenfull: false,
      isShowUserNewsPopover: false
    })

    // 获取用户信息
    const getUserInfos = computed(() => {
      return store.state.userInfos.userInfos
    })
    // 获取系统配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    // 初始化言语国际化
    const initI18n = () => {
      switch (getLocal('themeConfig').globalI18n) {
        case 'zh-cn':
          state.disabledI18n = 'zh-cn'
          break
        case 'en':
          state.disabledI18n = 'en'
          break
        case 'zh-tw':
          state.disabledI18n = 'zh-tw'
          break
      }
    }
    // 页面加载时
    onMounted(() => {
      if (getLocal('themeConfig')) initI18n()
    })
    return {
      getUserInfos,
      getThemeConfig,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-user {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&-link {
		height: 100%;
		display: flex;
		align-items: center;
		white-space: nowrap;
		&-photo {
			width: 25px;
			height: 25px;
			border-radius: 100%;
		}
	}
	&-icon {
		padding: 0 10px;
		cursor: pointer;
		color: var(--bg-topBarColor);
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
		&:hover {
			background: rgba(0, 0, 0, 0.04);
			i {
				display: inline-block;
				animation: logoAnimation 0.3s ease-in-out;
			}
		}
	}
	::v-deep(.el-dropdown) {
		color: var(--bg-topBarColor);
	}
	::v-deep(.el-badge) {
		height: 40px;
		line-height: 40px;
		display: flex;
		align-items: center;
	}
	::v-deep(.el-badge__content.is-fixed) {
		top: 12px;
	}
}
</style>
