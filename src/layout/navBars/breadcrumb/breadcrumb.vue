<template>
    <div  class="layout-navbars-breadcrumb" v-show="getThemeConfig.isBreadcrumb">
        <!-- 图标 --> 
        <i
			class="layout-navbars-breadcrumb-icon"
			:class="getThemeConfig.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
			@click="onThemeConfigChange" 
		></i>
        <el-breadcrumb class="layout-navbars-breadcrumb-hide">
            <transition-group name="breadcrumb" mode='out-in'>
                <el-breadcrumb-item v-for="(v, k) in breadcrumbList" :key='v.meta.title'>
                    <span v-if="k == breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
                        <i class="layout-navbars-breadcrumb-iconfont" :class='v.meta.icon'
                        v-if="getThemeConfig.isBreadcrumbIcon" 
                        ></i>{{ $t(v.meta.title) }}
                    </span>
                    <a v-else @click.prevent="onBreadcrumbClick(v)">
                        <i class="layout-navbars-breadcrumb-iconfont" :class='v.meta.icon'
                        v-if="getThemeConfig.isBreadcrumbIcon" 
                        ></i>{{ $t(v.meta.title) }}
                    </a>  
                </el-breadcrumb-item>
            </transition-group>  
        </el-breadcrumb>
    </div> 
</template>

<script lang="ts">
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useStore } from '/@/store/index'
export default {
  name: 'LayoutBreadcrumb',
  setup() {
    const { proxy } = getCurrentInstance() as any
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const state: any = reactive({
        breadcrumbList: [],//
        routeSplit: [],
        routeSplitFirst: '',
        routeSplitIndex:1
    })

    // 获取配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    // 面包屑点击展开跳转
    const onBreadcrumbClick = (v: any) => {
      const { redirect, path } = v
      if (redirect) router.push(redirect)
      else router.push(path)
    }
    // 展开/收起左侧菜单点击
    const onThemeConfigChange = () => {
        // 监听onMenuClick事件
        proxy.mittBus.emit('onMenuClick')
        store.state.themeConfig.themeConfig.isCollapse = !store.state.themeConfig.themeConfig.isCollapse
    }
    // 处理面包屑数据
    const getBreadcrumbList = (arr: Array<object>) => {
        arr.map((item: any) => {
            state.routeSplit.map((v: any,k: number, arrs:any) => {
                if(state.routeSplitFirst === item.path) {
                    state.routeSplitFirst += `/${arrs[state.routeSplitIndex]}`
                    state.breadcrumbList.push(item)
                    state.routeSplitIndex++
                    if(item.children) getBreadcrumbList(item.children)
                }
            })
        }) 
        // console.log(state.breadcrumbList)
    } 
    const initRouteSplit = (path:string) => {
        // /home
        if(!store.state.themeConfig.themeConfig.isBreadcrumb) return false;
        // state.breadcrumbList = [store.state.routesList.routesList[0]]
        state.breadcrumbList = []
        state.routeSplit = path.split('/')
        state.routeSplit.shift()
        state.routeSplitFirst = `/${state.routeSplit[0]}`
        state.routeSplitIndex = 1

        getBreadcrumbList(store.state.routesList.routesList)
    }
    // 页面加载时
    onMounted(() => {
        initRouteSplit(route.path)
    })
    // 路由更新时
    onBeforeRouteUpdate((to) => {
        initRouteSplit(to.path)
    })
    return {
        onThemeConfigChange,
        onBreadcrumbClick,
        getThemeConfig,
        ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb {
	flex: 1;
	height: inherit;
	display: flex;
	align-items: center;
	padding-left: 15px;
	.layout-navbars-breadcrumb-icon {
		cursor: pointer;
		font-size: 18px;
		margin-right: 15px;
		color: var(--bg-topBarColor);
	}
	.layout-navbars-breadcrumb-span {
		opacity: 0.7;
		color: var(--bg-topBarColor);
	}
	.layout-navbars-breadcrumb-iconfont {
		font-size: 14px;
		margin-right: 5px;
	}
	::v-deep(.el-breadcrumb__separator) {
		opacity: 0.7;
		color: var(--bg-topBarColor);
	}
}
</style>
