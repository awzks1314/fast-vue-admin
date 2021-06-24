<template>
	<div class="login-container">
		<ul class="bg-bubbles">
			<li v-for="i in 10" :key="i"></li>
		</ul>
		<div class="login-logo">
			<span>{{ getThemeConfig.globalViceTitle }}</span>
		</div>
		<div class="login-content" :class="{ 'login-content-mobile': tabsActiveName === 'mobile' }">
			<div class="login-content-main">
				<h4 class="login-content-title">{{ getThemeConfig.globalTitle }}</h4>
				<el-tabs v-model="tabsActiveName" @tab-click="onTabsClick">
					<el-tab-pane :label="$t('message.label.one1')" name="account" :disabled="tabsActiveName === 'account'">
						<transition name="el-zoom-in-center">
							<Account v-show="isTabPaneShow" />
						</transition>
					</el-tab-pane>
					<el-tab-pane :label="$t('message.label.two2')" name="mobile" :disabled="tabsActiveName === 'mobile'">
						<transition name="el-zoom-in-center">
							<Mobile v-show="!isTabPaneShow" />
						</transition>
					</el-tab-pane>
				</el-tabs>
				<div class="mt10">
					<el-button type="text" size="small">{{ $t('message.link.one3') }}</el-button>
					<el-button type="text" size="small">{{ $t('message.link.two4') }}</el-button>
				</div>
			</div>
		</div>
		<div class="login-copyright">
			<div class="mb5 login-copyright-company">{{ $t('message.copyright.one5') }}</div>
			<div class="login-copyright-msg">{{ $t('message.copyright.two6') }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, computed } from 'vue'
import Account from '/@/views/login/component/account.vue'
import Mobile from '/@/views/login/component/mobile.vue'
import { useStore } from '/@/store/index'
export default {
  name: 'Login',
  components: { Account, Mobile },
  setup() {
    const store = useStore()
    const state = reactive({
      tabsActiveName: 'account',
      isTabPaneShow: true
    })
    // 获取布局配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    // 切换密码、手机登录
    const onTabsClick = () => {
      state.isTabPaneShow = !state.isTabPaneShow
    }
    return {
      onTabsClick,
      getThemeConfig,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom right, #8ac1f8, #409eff);
	.login-logo {
		position: absolute;
		top: 30px;
		left: 50%;
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 20px;
		color: var(--color-whites);
		letter-spacing: 2px;
		width: 90%;
		transform: translateX(-50%);
	}
	.login-content {
		width: 500px;
		padding: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) translate3d(0, 0, 0);
		background-color: rgba(255, 255, 255, 0.99);
		box-shadow: 0 2px 12px 0 var(--color-primary-light-5);
		border-radius: 4px;
		transition: height 0.2s linear;
		height: 480px;
		overflow: hidden;
		z-index: 1;
		.login-content-main {
			margin: 0 auto;
			width: 80%;
			.login-content-title {
				color: #333;
				font-weight: 500;
				font-size: 22px;
				text-align: center;
				letter-spacing: 4px;
				margin: 15px 0 30px;
				white-space: nowrap;
			}
		}
	}
	.login-content-mobile {
		height: 418px;
	}
	.login-copyright {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 30px;
		text-align: center;
		color: white;
		font-size: 12px;
		opacity: 0.8;
		.login-copyright-company {
			white-space: nowrap;
		}
		.login-copyright-msg {
			@extend .login-copyright-company;
		}
	}
}
.bg-bubbles {
    position: absolute;
    // 使气泡背景充满整个屏幕；
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
    overflow: hidden;
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -160px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
    // 自定义 square 动画；
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }
  }
</style>
