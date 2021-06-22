<template>
    <el-main class="layout-main">
        <el-scrollbar
        class="layout-scrollbar"
        ref="layoutScrollbarRef"
        v-show="!currentRouteMeta.isLink && !currentRouteMeta.isIframe"
        :style="{ minHeight: `calc(100vh - ${headerHeight}` }"
      >
        <LayoutParentView />
        <Footer v-if="getThemeConfig.isFooter" />
      </el-scrollbar>
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
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
import Footer from '@/views/layout/footer/index.vue'
import LayoutParentView from '@/views/layout/routerView/parent.vue';
import Link from '@/views/layout/routerView/link.vue';
import Iframes from '@/views/layout/routerView/iframes.vue';
export default defineComponent({
  name: 'LayoutMain',
  components: { Footer, LayoutParentView, Link, Iframes },
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
      const { isTagsview } = store.state.themeConfig.themeConfig
      if (isTagsview) return (state.headerHeight = `84px`)
      else return (state.headerHeight = `50px`)
    }
    // 页面加载前
    onBeforeMount(() => {
      initCurrentRouteMeta(route.meta)
      initHeaderHeight()
    })
    // 监听 themeConfig的变化
    watch(store.state.themeConfig.themeConfig, (val) => {
      state.headerHeight = val.isTagsview ? '84px' : '50px'
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
