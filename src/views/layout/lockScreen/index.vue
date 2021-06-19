<template>
	<div v-show="isShowLockScreen">
		<div class="layout-lock-screeel-mask"></div>
		<div class="layout-lock-screeel-img" :class="{ 'layout-lock-screeel-filter': isShowLoockLogin }"></div>
		<div class="layout-lock-screen">
			<div
				class="layout-lock-screeel-date"
				ref="layoutLockScreenDateRef"
				@mousedown="onDown"
				@mousemove="onMove"
				@mouseup="onEnd"
				@touchstart.stop="onDown"
				@touchmove.stop="onMove"
				@touchend.stop="onEnd"
			>
				<div class="layout-lock-screeel-date-box">
					<div class="layout-lock-screeel-date-box-time">
						{{ time.hm }}<span class="layout-lock-screeel-date-box-minutes">{{ time.s }}</span>
					</div>
					<div class="layout-lock-screeel-date-box-info">{{ time.mdq }}</div>
				</div>
			</div>
			<transition name="el-zoom-iel-center">
				<div v-show="isShowLoockLogin" class="layout-lock-screeel-login">
					<div class="layout-lock-screeel-logiel-box">
						<div class="layout-lock-screeel-logiel-box-img">
							<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg" />
						</div>
						<div class="layout-lock-screeel-logiel-box-name">Administrator</div>
						<div class="layout-lock-screeel-logiel-box-value">
							<el-input
								placeholder="请输入密码"
								ref="layoutLockScreenInputRef"
								v-model="lockScreenPassword"
								@keyup.enter.stop="onLockScreenSubmit()"
							>
								<template #append>
									<el-button icon="el-icoel-right" @click="onLockScreenSubmit"></el-button>
								</template>
							</el-input>
						</div>
					</div>
					<div class="layout-lock-screeel-logiel-icon">
						<i class="el-icoel-microphone"></i>
						<i class="el-icoel-alarm-clock"></i>
						<i class="el-icoel-switch-button"></i>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { nextTick, onMounted, reactive, toRefs, ref, onUnmounted, getCurrentInstance } from 'vue'
import { useStore } from '@/store/index'
import { formatDate } from '@/utils/formatTime'
import { setLocal } from '@/utils/storage'
export default {
  name: 'layoutLockScreen',
  setup () {
    const { proxy } = getCurrentInstance() as any
    const layoutLockScreenInputRef = ref()
		const store = useStore()
		const state: any = reactive({
			transparency: 1,
			downClientY: 0,
			moveDifference: 0,
			isShowLoockLogin: false,
			isFlags: false,
			querySelectorEl: '',
			time: {
				hm: '',
				s: '',
				mdq: ''
			},
			setIntervalTime: 0,
			isShowLockScreen: false,
			isShowLockScreenIntervalTime: 0,
			lockScreenPassword: ''
		})
		// 鼠标按下
		const onDown = (down: any) => {
			state.isFlags = true
			state.downClientY = down.touches ? down.touches[0].clientY : down.clientY
		}
		// 鼠标移动
		const onMove = (move: any) => {
			if (state.isFlags) {
				const el = state.querySelectorEl
				const opacitys = (state.transparency -= 1 / 200)
				if (move.touches) {
					state.moveDifference = move.touches[0].clientY - state.downClientY
				} else {
					state.moveDifference = move.clientY - state.downClientY
				}
				if (state.moveDifference >= 0) return false
				el.setAttribute('style', `top:${state.moveDifference}px;cursor:pointer;opacity:${opacitys};`)
				if (state.moveDifference < -400) {
					el.setAttribute('style', `top:${-el.clientHeight}px;cursor:pointer;transition:all 0.3s ease;`)
					state.moveDifference = -el.clientHeight
					setTimeout(() => {
						el && el.parentNode?.removeChild(el)
					}, 300)
				}
				if (state.moveDifference === -el.clientHeight) {
					state.isShowLoockLogin = true
					layoutLockScreenInputRef.value.focus()
				}
			}
		}
		// 鼠标松开
		const onEnd = () => {
			state.isFlags = false
			state.transparency = 1
			if (state.moveDifference >= -400) {
				state.querySelectorEl.setAttribute('style', 'top:0px;opacity:1;transition:all 0.3s ease;')
			}
		}
		// 获取要拖拽的初始元素
		const initGetElement = () => {
			nextTick(() => {
				state.querySelectorEl = proxy.$refs.layoutLockScreenDateRef
			})
		}
		// 时间初始化
		const initTime = () => {
			state.time.hm = formatDate(new Date(), 'HH:MM')
			state.time.s = formatDate(new Date(), 'SS')
			state.time.mdq = formatDate(new Date(), 'mm月dd日，WWW')
		}
		// 时间初始化定时器
		const initSetTime = () => {
			initTime()
			state.setIntervalTime = window.setInterval(() => {
				initTime()
			}, 1000)
		}
		// 锁屏时间定时器
		const initLockScreen = () => {			
			if (store.state.themeConfig.themeConfig.isLockScreen) {
				state.isShowLockScreenIntervalTime = window.setInterval(() => {
					if (store.state.themeConfig.themeConfig.lockScreenTime <= 0) {
						state.isShowLockScreen = true
						setLocalThemeConfig()
						return false
					}
					store.state.themeConfig.themeConfig.lockScreenTime--
				}, 1000)
			} else {
				clearInterval(state.isShowLockScreenIntervalTime)
			}
		}
		// 存储布局配置
		const setLocalThemeConfig = () => {
			store.state.themeConfig.themeConfig.isDrawer = false
			setLocal('themeConfig', store.state.themeConfig.themeConfig)
		}
		// 密码输入点击事件
		const onLockScreenSubmit = () => {
			store.state.themeConfig.themeConfig.isLockScreen = false
			store.state.themeConfig.themeConfig.lockScreenTime = 30
			setLocalThemeConfig()
		}
		// 页面加载时
		onMounted(() => {
			initGetElement()
			initSetTime()
			initLockScreen()
		})
		// 页面卸载时
		onUnmounted(() => {
			window.clearInterval(state.setIntervalTime)
			window.clearInterval(state.isShowLockScreenIntervalTime)
		})
		return {
			layoutLockScreenInputRef,
			onDown,
			onMove,
			onEnd,
			onLockScreenSubmit,
			...toRefs(state)
		}
	}
}
</script>

<style scoped lang="scss">
.layout-lock-screeel-fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.layout-lock-screeel-filter {
	filter: blur(5px);
}
.layout-lock-screeel-mask {
	background: rgba(255, 255, 255, 1);
	@extend .layout-lock-screeel-fixed;
	z-index: 9999990;
}
.layout-lock-screeel-img {
	@extend .layout-lock-screeel-fixed;
	background-image: url('https://img6.bdstatic.com/img/image/pcindex/sunjunpchuazhoutu.JPG');
	background-size: 100% 100%;
	z-index: 9999991;
}
.layout-lock-screen {
	@extend .layout-lock-screeel-fixed;
	z-index: 9999992;
	&-date {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		color: #ffffff;
		z-index: 9999993;
		user-select: none;
		&-box {
			position: absolute;
			left: 30px;
			bottom: 50px;
			&-time {
				font-size: 100px;
			}
			&-info {
				font-size: 40px;
			}
			&-minutes {
				font-size: 16px;
			}
		}
	}
	&-login {
		position: relative;
		z-index: 9999994;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #ffffff;
		&-box {
			text-align: center;
			margin: auto;
			&-img {
				width: 180px;
				height: 180px;
				margin: auto;
				img {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}
			&-name {
				font-size: 26px;
				margin: 15px 0 30px;
			}
		}
		&-icon {
			position: absolute;
			right: 30px;
			bottom: 30px;
			i {
				font-size: 20px;
				margiel-left: 15px;
				cursor: pointer;
				opacity: 0.8;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
}
::v-deep(.el-input-group__append) {
	background: #ffffff;
	padding: 0px 15px;
}
::v-deep(.el-input__inner) {
	border-right-color: #f6f6f6;
	&:hover {
		border-color: #f6f6f6;
	}
}
</style>
