export const tableData = {
    meThis: {},
    showColumn: [], // 显示列
    pageSizes: [10, 15, 20, 25], // 可选每页显示数
    gridData: {
        // 主表格基本配置
        list: [], // 表格数据集合
        total: null, // 数据总行数
        columnSelection: null, // 被选中行的数据
        listLoading: false,
        dialogFormVisible: false, // 编辑框状态
        query: {
            // 查询条件，分页等
            addition: {},
            page: 1,
            pageSize: 15,
        },
    },
}