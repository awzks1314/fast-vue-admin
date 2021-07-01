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
        <div class="bg-white mt20 p20">
          <div class="pb20 flex align-center justify-between">
              <span>查询表格</span>
              <div class="flex align-center">
                  <el-button type="primary" icon="el-icon-plus" size="medium">新建</el-button>
                  <el-tooltip class="ml10"  content="刷新" placement="top">
                    <i class="el-icon-refresh font20"></i>
                  </el-tooltip>
                  <el-tooltip class="ml10"  content="布局设置" placement="top">
                    <i class="el-icon-setting font20"></i>
                  </el-tooltip>
              </div>
          </div>
          <!-- 表格 -->
          <div>
              <el-table
                ref="newProductTable"
                v-loading="tableData.gridData.listLoading"
                :data="tableData.gridData.list"

                class="margin-top"
                :cell-style="{'text-align': 'center'}"
                :header-cell-style="{'background-color': '#f1f1f1','text-align': 'center'}"
                :element-loading-text="elementLoadingText"

                >
                <template v-for="(config, index) in tableConfig">
                    <template v-if="config.show && config.formatter">
                    <el-table-column
                        :key="index"
                        :prop="config.prop"
                        :label="config.label"
                        :width="config.width"
                        :formatter="config.formatter"
                    ></el-table-column>
                    </template>
                    <template v-else-if="config.show && config.options">
                    <el-table-column
                        :key="index"
                        :prop="config.prop"
                        :label="config.label"
                        :width="config.width"
                    >
                    11
                        <!-- <template v-slot="scope">
                        <table-combox
                            :data="meThis[config.options]"
                            :valu="scope.row[config.prop]"
                        ></table-combox>
                        </template> -->
                    </el-table-column>
                    </template>
                    <template v-else-if="config.show">
                    <el-table-column
                        :key="index"
                        :prop="config.prop"
                        :label="config.label"
                        :width="config.width"
                        :sortable="config.sortable"
                    >
                        <template v-slot="{ row }">
                        <el-image
                            v-if="config.type == 'image'"
                            :src="row[config.prop]"
                            :preview-src-list="[row[config.prop]]"
                            style="width: 50px; height: 50px"
                        >
                        </el-image>
                        <span v-else>{{
                            row[config.prop] ? row[config.prop] : '___'
                        }}</span>
                        </template>
                    </el-table-column>
                    </template>
                </template>
                <el-table-column label="操作" width="200">
                    <template v-slot="scope">
                    <el-tooltip class="item" effect="dark" content="打印小票功能" placement="top">
                        <el-button
                        type="primary"
                        icon="el-icon-printer"
                        size="medium"
                        circle
                        @click="handleChange(scope.$index, scope.row)"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="确认送达" placement="top">
                        <el-button
                        type="info"
                        icon="el-icon-s-promotion"
                        size="medium"
                        circle
                        @click="handleEdit(scope.$index, scope.row)"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="查看详情" placement="top">
                        <el-button
                        type="success"
                        icon="el-icon-view"
                        circle
                        size="medium"
                        @click="handleDelete(scope.$index, scope.row)"
                        ></el-button>
                    </el-tooltip>

                    </template>
                </el-table-column>
                </el-table>
              <el-pagination
                background
                class="mt10"
                layout="total, sizes,prev, pager, next,jumper"
                :page-size="queryForm.pageSize"
                :page-sizes="tableData.pageSizes"
                :current-page="queryForm.pageNo"
                :total="tableData.gridData.total"
                @size-change="handleSizeChange"
                @current-change="handlePageChange"
            >
            </el-pagination>
          </div>
        </div>
    </div>
</template>

<script lang="ts" src="./user.ts"></script>
