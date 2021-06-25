<template>
    <el-main class="layout-main">
        <el-scrollbar
        class="layout-scrollbar"
        ref="layoutScrollbarRef"
        v-show="!currentRouteMeta.isLink && !currentRouteMeta.isIframe"
        :style="{ minHeight: `calc(100vh - ${headerHeight}` }"
      >
        <LayoutParentView />
      </el-scrollbar>
      <Right />
      <Footer v-if="getThemeConfig.isFooter" />
        <Link :style="{ height: `calc(100vh - ${headerHeight}` }" :meta="currentRouteMeta" v-if="currentRouteMeta.isLink && !currentRouteMeta.isIframe" />
        <Iframes
          :style="{ height: `calc(100vh - ${headerHeight}` }"
          :meta="currentRouteMeta"
          v-if="currentRouteMeta.isLink && currentRouteMeta.isIframe && isShowLink"
          @getCurrentRouteMeta="onGetCurrentRouteMeta"
        />
    </el-main>
</template>

<script lang="ts">
import { computed, defineComponent, watch, toRefs, getCurrentInstance, reactive, onBeforeMount } from 'vue'
import { useStore } from '/@/store/index'
import { useRoute } from 'vue-router'
import LayoutParentView from '/@/layout/routerView/parent.vue';
import Link from '/@/layout/routerView/link.vue';
import Iframes from '/@/layout/routerView/iframes.vue';
import Footer from '/@/layout/component/footer.vue'
import Right from '/@/layout/component/right.vue'
export default defineComponent({
  name: 'LayoutMain',
  components: { Footer, LayoutParentView, Link, Iframes,Right },
  setup() {
    const { proxy } = getCurrentInstance() as any
    const store = useStore()
    const route = useRoute()
    const state = reactive({
      headerHeight: '',
      currentRouteMeta: {},
      isShowLink: false
    }) 
    // 获取布局配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    // 子组件触发更新
    const onGetCurrentRouteMeta = () => {
      initCurrentRouteMeta(route.meta)
    }
    // 初始化当前路由meta信息
    const initCurrentRouteMeta = (meta: object) => {
      state.isShowLink = false
      state.currentRouteMeta = meta
      setTimeout(() => {
        state.isShowLink = true
      }, 100)
    } 
    // 设置main的高度
    const initHeaderHeight = () => {
      const { isTagsview, isFooter } = store.state.themeConfig.themeConfig
      if (isTagsview && !isFooter) return (state.headerHeight = `100px`)
      else if (isTagsview && isFooter) return (state.headerHeight = `160px`)
      else if (!isTagsview && isFooter) return (state.headerHeight = `120px`)
      else return (state.headerHeight = `60px`)
    }
    // 页面加载前
    onBeforeMount(() => {
      initCurrentRouteMeta(route.meta)
      initHeaderHeight()
    })
    // 监听 themeConfig的变化
    watch(store.state.themeConfig.themeConfig, (val) => {
      state.headerHeight = val.isTagsview && val.isFooter ? '160px' : val.isTagsview && !val.isFooter ? '100px' : 
      !val.isTagsview && val.isFooter ? '120px' :'60px'
      if (val.isFixedHeaderChange !== val.isFixedHeader) {
        if (!proxy.$ref.layoutScrollbarRef) return false
        proxy.$refs.layoutScrollbarRef.update()
      }
    })
    // 监听路由的变化
    watch(
      () => route.path,
      () => {
        initCurrentRouteMeta(route.meta)
        proxy.$refs.layoutScrollbarRef.wrap.scrollTop = 0
      }
    )
    return {
      getThemeConfig,
      initCurrentRouteMeta,
      onGetCurrentRouteMeta,
      ...toRefs(state)
    }
  }
})
</script>
