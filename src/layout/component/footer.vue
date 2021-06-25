<template>
	<div class="layout-footer" v-show="isDelayFooter">
		<div class="layout-footer-warp">
			<div>freeVue，一个后台管理系统模板 {{'<(*￣▽￣*)/'}}</div>
			<div class="mt5">{{ $t('message.copyright.one5') }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue'
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

<style scoped lang="scss">
.layout-footer {
	width: 100%;
	display: flex;
  align-items: center;
  min-height: 60px;
	&-warp {
		margin: auto;
		color: #9e9e9e;
		text-align: center;
		animation: logoAnimation 0.3s ease-in-out;
	}
}
</style>
