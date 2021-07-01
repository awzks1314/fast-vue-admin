import { onMounted, reactive, toRefs } from 'vue'
import { ElMessageBox } from 'element-plus'
import { tableData } from '/@/mixins/tableMinxin'
export default {
  name: 'SystemUser',
  setup() {
    const state: any = reactive({
      elementLoadingText: '正在加载...',
      form: {
        name: '',
        sex: '',
        age: '', 
        mobile: '',
        address: ''
      },
      queryForm: {
        pageSize: 10,
        pageNo:1
      },
      tableData:tableData,
      offset: 0,
      openInquire: false,
      tableConfig: [
        { prop: 'num', label: '编号', show: true },
        { prop: 'name', label: '收货人', show: true },
        { prop: 'photo', label: '联系电话', show: true, type:'image'},
        { prop: 'phone', label: '联系电话', show: true },
        { prop: 'sex', label: '联系电话', show: true },
        { prop: 'email', label: '联系电话', show: true },
        { prop: 'time', label: '收货地址', width: 180, show: true }
      ]
    })
    // 页面加载前
    onMounted(() => {
      initTableData()
      offset()
    })
    // 初始化表格数据
		const initTableData = () => {
			const data: Array<object> = [];
			for (let i = 0; i < 20; i++) {
				data.push({
					num: `00${i + 1}`,
					name: (Math.round(Math.random() * 20901) + 19968).toString(16),
					photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1633081619,2004077072&fm=26&gp=0.jpg',
					phone: Math.floor(Math.random() * 10000000000),
					email: `${Math.floor(Math.random() * 1000)}@qq.com`,
					sex: i % 2 === 0 ? '男' : '女',
					time: new Date().toLocaleDateString(),
				});
			}
			state.tableData.gridData.list = data;
			state.tableData.gridData.total = data.length;
		};
    const handleSizeChange = (val: object) => {
      console.log(val)
      // 切换每页显示数
      state.queryForm.pageNo = 1
      state.queryForm.pageSize = val
    }
    const handlePageChange = (val: object) => {
      // 切换页码事件
      state.queryForm.pageNo = val
    }
    // 偏移量
    const offset = () => {
      const len = Object.keys(state.form).length
      console.log(len)
      if (!state.openInquire && len >= 3) state.offset = 0
      else if (!state.openInquire && len === 1) state.offset = 12
      else if (!state.openInquire && len === 2) state.offset = 6
      else if (state.openInquire && (len % 4) === 1) state.offset = 12
      else if (state.openInquire && (len % 4) === 2) state.offset = 6
      else if (state.openInquire && (len % 4) === 3) state.offset = 0
      else state.offset = 18
    }
    
    // 查询
    const openMore = () => {
      state.openInquire = !state.openInquire
      offset()
    }
    // 重置
    const reset = () => {
      state.form = {
        name: '',
        age: '',
        tel: '',
        sex: '',
        address: ''
      }
    }
    // 搜索
    const searchData = () => {
      ElMessageBox.alert(`
        <div>姓名:${state.form.name}</div>
        <div>性别:${state.form.sex}</div>
        <div>年龄:${state.form.age}</div>
        <div>电话:${state.form.mobile}</div>
        <div>地址:${state.form.address}</div>
      `, '提示', {
        showCancelButton: true,
        dangerouslyUseHTMLString: true
      })
        .then(() => {})
        .catch(() => {})
    }
    return {
      offset,
      openMore,
      reset,
      searchData,
      handleSizeChange,
      handlePageChange,
      ...toRefs(state)
    }
  }
}