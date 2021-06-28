<template>
    <div class="">
      <div class="flex justify-between ">
        <div class="mr20">
          <el-card shadow="never" >
              <div class="flex justify-end align-end"> 
                <img :src="getUserInfos.photo" class="round imgList"/>
                <div class="pl10 flex flex-direction ">
                  <div class="text-bold font24 ">
                    {{ currentTime }}，{{ getUserInfos.userName === '' ? 'test' : getUserInfos.userName }}！
                  </div>
                  <div class="color-info mt10">
                    前端工程师 | XXX有限公司-信息中心
                  </div>
                </div>
                <div class="flex flex-sub justify-end ">
                  <div class="flex flex-direction align-center ">
                    <span class="color-info">本周进度</span>
                    <span class="font24 mt10">80%</span>
                  </div>
                </div>
              </div>
            </el-card>
            <el-card shadow="never"  class="mt20">
              <div class=" flex ">
                <div v-for="(item,index) in iconList" :key="index"  class="tool-item">
                  <div class="roundList round" :style="{'background':item.background,'color':item.color}">
                    <i :class="item.icon"></i>
                  </div>
                  {{item.title}}
                </div>
              </div>
            </el-card>
        </div>
        <el-card shadow="never" class="mr20 flex-sub">
          <div style="height: 200px" ref="option"></div>
        </el-card>
        <el-card shadow="never" >
          <template #header>
            <div class="card-header">
              <span>版本信息</span>
            </div>
          </template>
            <el-descriptions class="margin-top"  :column="2"  border>
            <el-descriptions-item v-for="item in versionInfo" :key='item.title'>
              <template #label>
                {{item.title}}
              </template>
              {{item.detail}}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>

      <el-card shadow="never" class="mt20">
        <div class="color-info">
          <span class="mr10 color-primary">今日</span>
          <span class="mr10">本周</span>
          <span class="mr10">本月</span>
          <span class="mr10">本年</span>
          <el-date-picker
            v-model="value2"
            size="small"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
         <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="18">
              <div style="height: 400px" ref="option1"></div>
            </el-col>
            <el-col :span="6">
              <div class="text-bold">热销榜单</div>
              <div v-for="item in 9" :key='item' class="hot-item flex align-center mt20 color-info">
                <div class="hot-item-dot" :class="item<=3?'hot-item-dot-active':''">{{item}}</div>
                <span class="flex-sub ml20 mr20">嘉华水泉冷藏酷薄荷饮料</span>
                <span>134565</span>
              </div>
            </el-col>
          </el-row>
      </el-card>      
    </div>
</template>

<script lang="ts">
import { useStore } from '/@/store/index'
import * as echarts from 'echarts'
import { visitData, versionInfo, option, iconList, option1 } from './index'
import { formatAxis } from '/@/utils/formatTime'
import { reactive, toRefs, getCurrentInstance, onMounted, computed, nextTick } from 'vue'
export default {
  name: 'Home',
  setup() {
    const { proxy } = getCurrentInstance() as any
    const store = useStore()
    const state = reactive({
      visitData,
      versionInfo,
      iconList,
      shortcuts: [{
          text: '最近一周',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          })()
        }, {
          text: '最近一个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          })()
        }, {
          text: '最近三个月',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          })()
        }],
        value2: ''
    })

    // 获取用户信息
    const getUserInfos = computed(() => {
      return store.state.userInfos.userInfos
    })
    // 当前时间提示语
		const currentTime = computed(() => {
			return formatAxis(new Date());
		});
    // 
    // option
		const initOption = () => {
			const myChart = echarts.init(proxy.$refs.option);
			myChart.setOption(option);
			window.addEventListener('resize', () => {
				myChart.resize();
			});
		};
    // option1
		const initOption1 = () => {
			const myChart = echarts.init(proxy.$refs.option1);
			myChart.setOption(option1);
			window.addEventListener('resize', () => {
				myChart.resize({'height':400});
			});
		};
    // 页面加载时
		onMounted(() => {
			initOption();
      initOption1();
		});
    return {
      initOption,
      initOption1,
      getUserInfos,
      currentTime,
      ...toRefs(state)
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.countup-card-item {
	width: 100%;
	height: 103px;
	background: gray;
	border-radius: 4px;
	transition: all ease 0.3s;
	&:hover {
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
		transition: all ease 0.3s;
	}
}
.countup-card-item-box {
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	&:hover {
		i {
			right: 0px !important;
			bottom: 0px !important;
			transition: all ease 0.3s;
		}
	}
	i {
		position: absolute;
		right: -10px;
		bottom: -10px;
		font-size: 70px;
		transform: rotate(-30deg);
		transition: all ease 0.3s;
	}
	.countup-card-item-flex {
		padding: 0 20px;
		color: white;
		.countup-card-item-title,
		.countup-card-item-tip {
			font-size: 13px;
		}
		.countup-card-item-title-num {
			font-size: 18px;
		}
		.countup-card-item-tip-num {
			font-size: 13px;
		}
	}
}
.tool-item{
  width:100px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.roundList{
  width:40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
}
.imgList{
   width:80px;
  height: 80px;
}
.hot-item-dot {
  width:20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-info-light-8);
}
.hot-item-dot-active {
  background: var(--color-primary);
  color: var(--color-whites);
}
</style>
