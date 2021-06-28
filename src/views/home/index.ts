/**
 * 模拟 访问数据
 * @return 返回模拟数据
 */

export const  visitData = [
    {
        title: '今日访问',
        titleNum: 129,
        icon:''
    },
    {
        title: '昨日访问',
        titleNum: 1649,
        icon:''
    },
    {
        title: '本周累计',
        titleNum: 3129,
        icon:''
    },
    {
        title: '本月累计',
        titleNum: 35129,
        icon:''
    },
]

/**
 * 
 */
export const iconList = [
    {
        title: '个人信息',
        icon: 'el-icon-user',
        background: 'var(--color-primary)',
        color: '#fff'
    },
    {
        title: '订单管理',
        icon: 'el-icon-s-order',
        background: 'var(--color-success)',
        color: '#fff'
    },
    {
        title: '商品管理',
        icon: 'el-icon-goods',
        background: 'var(--color-warning)',
        color: '#fff'
    },
    {
        title: '部门管理',
        icon: 'el-icon-coin',
        background: 'var(--color-danger)',
        color: '#fff'
    }
]

  /**
   * 版本信息
   */
  export const versionInfo = [
    {
        title: 'vue',
        detail: '^3.0.11'
    },
    {
        title: 'vuex',
        detail: '^4.0.0'
    },
    {
        title: 'vue-router',
        detail: '^4.0.8'
    },{
        title: 'vite',
        detail: '^2.3.7'
    },{
        title: 'element-plus',
        detail: '^1.0.2-beta.48'
    },{
        title: 'echarts',
        detail: '^5.1.2'
    },
  ]

  /**
   * 
   */
  export const option = {
    title: {
        text: '本周工作计划',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '当前状态',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '已完成'},
                {value: 735, name: '待完成'},
                {value: 580, name: '已取消'}            
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

/**
 * 
 */
export const option1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};