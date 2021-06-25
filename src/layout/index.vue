<template>
	<Defaults v-if="getThemeConfig.layout === 'defaults'" />
	<Classic v-else-if="getThemeConfig.layout === 'classic'" />  
	<Transverse v-else-if="getThemeConfig.layout === 'transverse'" />
	<Subfield v-else-if="getThemeConfig.layout === 'columns'" />
</template>
  
<script lang="ts">
import { defineAsyncComponent, computed, getCurrentInstance, onBeforeMount, onUnmounted } from 'vue'
import { useStore } from '/@/store/index'
import { Local } from '/@/utils/storage'
export default {
  name: 'Layout', 
  components: {
    Defaults: defineAsyncComponent(() => import('/@/layout/main/defaults.vue')),
    Classic: defineAsyncComponent(() => import('/@/layout/main/classic.vue')),
    Transverse: defineAsyncComponent(() => import('/@/layout/main/transverse.vue')),
    Subfield: defineAsyncComponent(() => import('/@/layout/main/subfield.vue'))
  },
  setup() {  
    const { proxy } = getCurrentInstance() as any;
    const store = useStore()
    // 获取布局配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    // 窗口大小改变时(适配移动端) 
    const onLayoutResize = () => {
      const clientWidth = document.body.clientWidth
      if (clientWidth < 1000) {
        getThemeConfig.value.isCollapse = false
        proxy.mittBus.emit('layoutMobileResize', {
          layout: 'defaults',
          clientWidth
        })
      } else {
        proxy.mittBus.emit('layoutMobileResize', {
          layout: Local.get('oldLayout') ? Local.get('oldLayout') : getThemeConfig.value.layout,
          clientWidth
        })
      }
    }
    // 页面加载前
    onBeforeMount(() => {
      onLayoutResize()
      window.addEventListener('resize', onLayoutResize)
    })
    // 页面卸载时
    onUnmounted(() => {
      window.removeEventListener('resize', onLayoutResize)
    })
    return {
      getThemeConfig
    }
  }
}
</script>
