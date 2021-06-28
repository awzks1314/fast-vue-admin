<template>
    <div>
        <div class="table-header">
            <el-row :gutter="20" >
                <el-col :span="6" v-for="(item,index) in form.length" :key="index" class="input-box">
                    <div class="input-label">
                        <span>{{form[index]}}</span>
                    </div>
                    <el-input v-model="form.name" placeholder="请输入用户姓名" size="medium"></el-input>
                </el-col>
                <el-col :span="6" :offset="6"  class="input-box flex justify-end">
                    <el-button type="primary" size="medium">重置</el-button>
                    <el-button type="primary" size="medium">搜索</el-button>
                    <div class="ml20 color-primary">
                        <span class="mr5">收起</span>
                        <i class="el-icon-arrow-up"></i>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
  name: 'SystemUser',
  setup() {
    const state = reactive({
      form: {
        name: '',
        sex: '',
        age: '',
        aaaa: ''
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
