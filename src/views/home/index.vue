<template>
    <div class="home">
      <el-row :gutter="20">
        <el-col :sm="8">
          <el-card shadow="hover" :header="$t('message.card.title1')">
            <div style="height: 200px" ref="homeLaboratoryRef"></div>
          </el-card>
        </el-col>
        <el-col :sm="8">
          <el-card class="box-card" shadow="hover">
            <div class="flex justify-between align-center">
              <span class="el-card-title">新留言</span>
              <span class="font12 ">更多</span>
            </div>
            <div>
              45646777
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script lang="ts">
import { useStore } from '/@/store/index'
import * as echarts from 'echarts'
import { visitData } from './index'
import { CountUp } from 'countup.js'
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    const { proxy } = getCurrentInstance() as any
    const state = reactive({
      visitData
    })
    // 实验室使用情况
    const initHomeLaboratory = () => {
      const myChart = echarts.init(proxy.$refs.homeLaboratoryRef)
      const option = {
        grid: {
          top: 50,
          right: 20,
          bottom: 30,
          left: 30
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['预购队列', '最新成交价'],
          right: 13
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: [
          {
            type: 'value',
            name: '价格'
          }
        ],
        series: [
          {
            name: '预购队列',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: '最新成交价',
            type: 'line',
            data: [15, 20, 16, 20, 30, 8]
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
    // 页面加载时
		onMounted(() => {
			initHomeLaboratory();
		});
    return {
      initHomeLaboratory,
      ...toRefs(state)
    }
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

</style>
