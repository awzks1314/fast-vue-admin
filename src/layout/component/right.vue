<template>
    <div class="layout-right">
        <div
        v-for="(item,index) in List"
        :key="index"
        class="layout-right-item"
        :class="`layout-right-item-${index}`"
        :style="{'color':item.color,'background':item.background}"
        @click="itemClick(index)"
        >
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>
<script lang="ts"> 
import { reactive, toRefs,getCurrentInstance } from 'vue'
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';
import {  Session } from '/@/utils/storage'
import { resetRoute } from '/@/router/index';
import { useRouter } from 'vue-router'
export default {
  name: 'LayoutRight',
  setup() {
    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    const state = reactive({
      List: [
        {
          name: '基本配置',
          icon: 'el-icon-setting',
          color: 'var(--color-primary)',
          background: 'var(--color-primary-light-8)'
        },
        {
          name: '打印页面',
          icon: 'el-icon-printer',
          color: 'var(--color-success)',
          background: 'var(--color-success-light-8)'
        },
        {
          name: '全屏预览',
          icon: 'iconfont icon-fullscreen',
          color: 'var(--color-warning)',
          background: 'var(--color-warning-light-8)'
        },
        {
          name: '源码仓库',
          icon: 'fa fa-github',
          color: 'var(--color-danger)',
          background: 'var(--color-danger-light-8)'
        },
        {
          name: '清除缓存',
          icon: 'el-icon-delete',
          color: 'var(--color-info)',
          background: 'var(--color-info-light-8)'
        }
      ]
    })
    const itemClick = (index: number) => {
        switch(index){
            case 0:
                // 打开基本配置
                proxy.mittBus.emit('openSetingsDrawer');
                break;
            case 2:
                if (!screenfull.isEnabled) { 
                    ElMessage.warning('暂不不支持全屏');
                    return false;
                }
                state.List[2].icon = state.List[2].icon === 'iconfont icon-fullscreen'?'iconfont icon-tuichuquanping':'iconfont icon-fullscreen'
                state.List[2].name = state.List[2].name === '退出全屏'? '全屏预览':'退出全屏'
                screenfull.toggle();
                break;
            case 3:
                // 全局仓库
                window.open('https://github.com/awzks1314/fast-vue-admin');
                break;
            case 4:
                // 清除缓存
                Session.clear(); // 清除缓存/token等
                resetRoute(); // 删除/重置路由
                router.push('/login')
                break;
            default:
                break;
        }
    }
    return {
        itemClick,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
    .layout-right{
        position: fixed;
        top: 50%;
        right: 0;
        z-index: 2000;
        padding:  8px 8px 0;
        margin: 0;
        text-align: center;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-top-left-radius: 5.5px;
        border-bottom-left-radius: 5.5px;
        box-shadow: 0 0 50px 0 rgba(82,63,105,.15);
        transform: translateY(-50%);
    }
    .layout-right-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        margin-bottom: 8px;
        span{
            margin-top: 5px;
        }
        &-0:hover{
            background: var(--color-primary) !important;
            color: var(--color-whites) !important;
        }
        &-1:hover{
            background: var(--color-success) !important;
            color: var(--color-whites) !important;
        }
        &-2:hover{
            background: var(--color-warning) !important;
            color: var(--color-whites) !important;
        }
        &-3:hover{
            background: var(--color-danger) !important;
            color: var(--color-whites) !important;
        }
        &-4:hover{
            background: var(--color-info) !important;
            color: var(--color-whites) !important;
        }
    }
</style>
