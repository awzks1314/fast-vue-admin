import { onMounted, reactive, toRefs } from 'vue'
import TableMixin from '/@/mixins/tableMinxin'
import { ElMessageBox } from 'element-plus'
export default {
  mixins:[TableMixin],
  name: 'SystemUser',
  setup() {
    const state: any = reactive({
      form: {
        name: '',
        sex: '',
        age: '', 
        mobile: '',
        address: ''
      },
      offset: 0,
      openInquire: false,
      tableConfig: [
        { prop: 'createDate', label: '下单时间', show: true, sortable: true },
        { prop: 'sn', label: '订单号', show: true },
        { prop: 'receiverName', label: '收货人', show: true },
        { prop: 'receiverMobile', label: '联系电话', show: true },
        { prop: 'receiverAddress', label: '收货地址', width: 180, show: true }
      ]
    })
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
    // 页面加载前
    onMounted(() => {
        console.log(state.gridData)
      offset()
    })
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
      ...toRefs(state)
    }
  }
}