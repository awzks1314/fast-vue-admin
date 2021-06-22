<template>
    <div class="layout-footer mt15" v-show="isDelayFooter">
        <div class="layout-footer-warp">
			<div>vue-next-admin，Made by lyt with ❤️</div>
			<div class="mt5">{{ $t('message.copyright.one5') }}</div>
		</div>
    </div>
</template>
 
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
export default {
  name: 'LayoutFooter',
  setup() {
    const state = reactive({
      isDelayFooter: true
    })
    // 路由改变时，等主界面动画加载完毕再显示 footer
    onBeforeRouteUpdate(() => {
      state.isDelayFooter = false
      setTimeout(() => {
        state.isDelayFooter = true
      }, 800)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
