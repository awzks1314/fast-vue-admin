<template>
    <el-header class="layout-header" :height="setHeaderHeight">
      <NavBarsIndex />
    </el-header>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from '/@/store/index'
import NavBarsIndex from '/@/layout/navBars/index.vue'
export default {
  name: 'LayoutHeader',
  components: { NavBarsIndex },
  setup() {
    const store = useStore()
    //   设置header高度
    const setHeaderHeight = computed(() => {
      const { isTagsview, layout } = store.state.themeConfig.themeConfig
      if (isTagsview && layout !== 'classic') return '100px'
      else return '60px'
    })
    return {
      setHeaderHeight
    }
  }
}
</script>
