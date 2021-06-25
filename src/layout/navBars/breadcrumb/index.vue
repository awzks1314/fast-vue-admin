<template>
    <div class="layout-navbars-breadcrumb-index">
        <Logo v-if="setIsShowLogo"/> 
        <!-- 头部左侧面包屑 首页/订单/列表 经典和横向模式不展示面包屑-->
        <Breadcrumb v-if="isShowBreadcrumb"/>
        <!-- 设置是否显示横向导航菜单 layout == 'transverse' -->
        <Horizontal :menuList="menuList" v-if="isLayoutTransverse"/>
        <User />
    </div>
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted, toRefs, watch } from 'vue'
import { getCurrentInstance, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '/@/store/index'
import Logo from '/@/layout/logo/index.vue'
import User from '/@/layout/navBars/breadcrumb/user.vue';
import Breadcrumb from '/@/layout/navBars/breadcrumb/breadcrumb.vue'
import Horizontal from '/@/layout/navMenu/horizontal.vue'
export default {
  name: 'LayoutBreadcrumbIndex',
  components: { Logo, Breadcrumb, Horizontal, User },
  setup() {
      const { proxy } = getCurrentInstance() as any
      const store = useStore()
      const route = useRoute()
      const state: any = reactive({
          menuList:[]
      })

    //   获取布局配置信息
    const getThemeConfig = computed(() => {
        return store.state.themeConfig.themeConfig;
    })

    // 设置logo 显示/隐藏
    const setIsShowLogo = computed(() => {
        let { isShowLogo, layout } = store.state.themeConfig.themeConfig;
        return (isShowLogo && layout === 'classic') || (isShowLogo && layout === 'transverse');
    })

    // 判断面包屑显示情况
    const isShowBreadcrumb = computed(() => {
        let { layout, isClassicSplitMenu } = store.state.themeConfig.themeConfig;
        if (layout === 'transverse') return false
        else if (layout === 'classic' && isClassicSplitMenu) return false
        else return true
    }) 
    // 设置是否显示横向导航菜单
    const isLayoutTransverse = computed(() => {
        let { layout,isClassicSplitMenu } = store.state.themeConfig.themeConfig;
        return layout === 'transverse' || (isClassicSplitMenu && layout === 'classic')
    }) 

    // 设置/过滤路由(非晶态路由/是否显示在菜单中)
    const setFilterRoutes = () => {
        let { layout, isClassicSplitMenu } = store.state.themeConfig.themeConfig;
        if(layout === 'classic' && isClassicSplitMenu) {
            state.menuList = delClassicChildren(filterRoutesFun(store.state.routesList.routesList))
            const resData = setSendClassicChildren(route.path)
            proxy.mittBus.emit('setSendClassicChildren', resData);
        }else {
            state.menuList = filterRoutesFun(store.state.routesList.routesList);
        }
    }
    // 经典模式，分割菜单，删除children
    const delClassicChildren = (arr: Array<object>) => {
        arr.map((v: any) => {
            if(v.children) delete v.children
        })
        return arr
    }
    // 路由过滤递归函数
    const filterRoutesFun = (arr: Array<object>) => {
        return arr
            .filter((item: any) => !item.meta.isHide)
            .map((item: any) => {
                // 拷贝
                item = Object.assign({},item)
                if(item.children) item.children = filterRoutesFun(item.children)
                return item
            })
    }
    // 传递当前子级数据到菜单中
    const setSendClassicChildren = (path:string)  => {
        const currentPathSplit = path.split('/');
        let currentData: any = {}

        filterRoutesFun(store.state.routesList.routesList).map((v,k) => {
            if(v.path === `/${currentPathSplit[1]}`){
                v['k'] = k
                currentData['item'] = [{...v}]
                currentData['children'] = [{...v}]
                if(v.children) currentData['children'] = v.children
            }
        })
        return currentData;
    }
    // 监听路由变化
    watch(store.state,(val: any) => {
        if(val.routesList.routesList.length === state.menuList.length) return false
        setFilterRoutes()
    })
    // 页面加载时
    onMounted(() => {
        setFilterRoutes()
        proxy.mittBus.on('getBreadcrumbIndexSetFilterRoutes', () => {
            setFilterRoutes();
        });
    })
    // 页面卸载时
    onUnmounted(() => {
        proxy.mittBus.off('getBreadcrumbIndexSetFilterRoutes');
    })
    return {
        getThemeConfig,
        setIsShowLogo,
        isShowBreadcrumb,
        isLayoutTransverse,
        ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-index {
	height: 60px;
	display: flex;
	align-items: center;
	padding-right: 15px;
	background: var(--bg-topBar);
	overflow: hidden;
	border-bottom: 1px solid #f1f2f3;
}
</style>
