<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import setIntroduction from '@/utils/setIconfont'
export default defineComponent({
  name: 'App',
  setup() {
    // 设置初始化，防止刷新时恢复默认
    onBeforeMount(() => {
    // 设置批量第三方 icon 图标
      setIntroduction.cssCdn()
      // 设置批量第三方 js
      setIntroduction.jsCdn()
    })
  }
})
</script>
