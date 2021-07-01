<template>
    <div>
      <!-- 搜索 -->
        <div class="table-header">
          <el-row :gutter="20">
            <el-col :span="6"  class="input-box"  >
                <div class="input-label">
                    <span>姓名</span>
                </div>
                <el-input v-model="form.name" placeholder="请输入姓名" size="medium"></el-input>
            </el-col>
            <el-col :span="6"  class="input-box"  >
                <div class="input-label">
                    <span>性别</span>
                </div>
                <el-input v-model="form.sex" placeholder="请输入性别" size="medium"></el-input>
            </el-col>
             <el-col :span="6"  class="input-box"  >
                <div class="input-label">
                    <span>年龄</span>
                </div>
                <el-input v-model="form.age" placeholder="请输入年龄" size="medium"></el-input>
            </el-col>
             <el-col :span="6"  class="input-box"  v-if="openInquire">
                <div class="input-label">
                    <span>电话</span>
                </div>
                <el-input v-model="form.mobile" placeholder="请输入电话" size="medium"></el-input>
            </el-col>
            <el-col :span="6"  class="input-box"  v-if="openInquire">
                <div class="input-label">
                    <span>家庭住址</span>
                </div>
                <el-input v-model="form.address" placeholder="请输入家庭住址" size="medium"></el-input>
            </el-col>
            <el-col :span="6" :offset="offset"  class="input-box flex justify-end">
                <el-button type="primary" size="medium" @click="reset">重置</el-button>
                <el-button type="primary" size="medium" @click="searchData">搜索</el-button>
                <div class="ml20 color-primary" @click="openMore">
                    <span class="mr5">{{openInquire?'收起':'展开'}}</span>
                    <i :class="openInquire?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                </div>
            </el-col>
          </el-row>
        </div>

      <!-- 表格 -->

    </div>
</template>

<script lang="ts" src="./user.ts"></script>
