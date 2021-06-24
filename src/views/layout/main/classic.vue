<template>
    <el-container class="layout-container flex-center">
        <Header />
        <el-container class="layout-mian-height-50">
            <Aside />
            <div class="flex-center layout-backtop">
				<TagsView v-if="getThemeConfig.isTagsview" />
				<Main />
			</div>
        </el-container>
        <el-backtop target=".layout-backtop .el-main .el-scrollbar__wrap"></el-backtop>
    </el-container>
</template>

<script lang="ts">
import Aside from '/@/views/layout/component/aside.vue'
import Header from '/@/views/layout/component/header.vue'
import Main from '/@/views/layout/component/main.vue'
import TagsView from '/@/views/layout/navBars/tagsView/tagsView.vue'
import { computed } from 'vue'
import { useStore } from '/@/store/index'
export default {
  name: 'LayoutClassic',
  components: { Aside, Header, Main, TagsView },
  setup() {
    const store = useStore()
    //  获取配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig
    })
    return {
      getThemeConfig
    }
  }
}
</script>
