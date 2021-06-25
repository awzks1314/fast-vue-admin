<template>
	<div class="borderNone">
		<div class="layout-logo" v-if="setShowLogo" @click="onThemeConfigChange">
			<img :src="getThemeConfig.globalLogo" class="layout-logo-medium-img" v-if="getThemeConfig.layout !== 'columns'"/>
			<span>{{ getThemeConfig.globalTitle }}</span>
		</div>  
		<div class="layout-logo-size" v-else @click="onThemeConfigChange">
			<img :src="getThemeConfig.globalLogo" class="layout-logo-size-img" v-if="getThemeConfig.layout !== 'columns'"/>
		</div>
		<!-- <el-divider content-position="center" class="divider" v-if="getThemeConfig.layout == 'columns'">功能菜单</el-divider> -->
	</div>
</template>

<script lang="ts">
import { computed, getCurrentInstance } from 'vue';
import { useStore } from '/@/store/index';
export default {
	name: 'layoutLogo',
	setup() {
		const { proxy } = getCurrentInstance() as any;
		const store = useStore();
		// 获取布局配置信息
		const getThemeConfig = computed(() => {
			return store.state.themeConfig.themeConfig;
		});
		// 设置 logo 的显示。classic 经典布局默认显示 logo
		const setShowLogo = computed(() => { 
			let { isCollapse, layout } = store.state.themeConfig.themeConfig;
			return !isCollapse  ||layout === 'classic' || layout === 'transverse' || document.body.clientWidth < 1000;
		});
		// logo 点击实现菜单展开/收起
		const onThemeConfigChange = () => {
			if (store.state.themeConfig.themeConfig.layout === 'transverse') return false;
			proxy.mittBus.emit('onMenuClick');
			store.state.themeConfig.themeConfig.isCollapse = !store.state.themeConfig.themeConfig.isCollapse;
		};
		return {
			setShowLogo,
			getThemeConfig,
			onThemeConfigChange,
		};
	},
};
</script>

<style scoped lang="scss">
// .borderNone{
// 	border-right:1px solid transparent;
// }
.divider{
	margin: 8px 0!important;
}
.layout-logo {
	width: 220px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
	color: var(--color-primary);
	font-size: 20px;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	&:hover {
		span {
			color: var(--color-primary-light-2);
		}
	}
	&-medium-img {
		width: 20px;
		margin-right: 5px;
	}
}
.layout-logo-size {
	width: 100%;
	height: 60px;
	display: flex;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	&-img {
		width: 20px;
		margin: auto;
	}
	&:hover {
		img {
			animation: logoAnimation 0.3s ease-in-out;
		}
	}
}
</style>
