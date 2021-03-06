import { RouteRecordRaw } from 'vue-router'
/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      auth：          当前路由权限标识（多个请用逗号隔开），最后转成数组格式，用于与当前用户权限进行对比，控制路由显示、隐藏
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

// 定义动态路由
export const dynamicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/layout/index.vue'),
		redirect: '/home',
		meta: {  
			isKeepAlive: true,
		},
		children: [
			{ 
				path: '/home',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false, 
					auth: ['admin', 'test'],
					icon: 'iconfont icon-shouye', 
				}
			}, 
			{ 
				path: '/system',
				name: 'system',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/system/user',
				meta: {
					title: 'message.router.system',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false, 
					auth: ['admin', 'test'],
					icon: 'el-icon-setting', 
				},
				children: [
					{
						path: '/system/menu',
						name: 'systemMenu',
						component: () => import('../views/system/menu/menu.vue'),
						meta: {
							title: 'message.router.systemMenu',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'el-icon-s-operation',
						},
					},
					{
						path: '/system/user',
						name: 'systemUser',
						component: () => import('/@/views/system/user/user.vue'),
						meta: {
							title: 'message.router.systemUser',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'el-icon-user',
						},
					},
				]
			},
			{
				path: '/menu',
				name: 'menu',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/menu/menu1',
				meta: {
					title: 'message.router.menu',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					auth: ['admin', 'test'],
					icon: 'iconfont icon-caidan',
				},
				children: [
					{
						path: "/menu/menu1",
						name: 'menuMenu1',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/menu/menu1/menu11',
						meta: {
							title: 'message.router.menu1',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'iconfont icon-caidan',
						},
						children: [
							{
								path: "/menu/menu1/menu11",
								name: 'menuMenuMenu1',
								component: () => import('/@/views/menu/menu1/menu11.vue'),
								meta: {
									title: 'message.router.menu11',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									auth: ['admin', 'test'],
									icon: 'iconfont icon-caidan',
								},
							},
							{
								path: "/menu/menu1/menu12",
								name: 'menuMenuMenu12',
								component: () => import('/@/views/menu/menu1/menu12.vue'),
								meta: {
									title: 'message.router.menu12',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									auth: ['admin', 'test'],
									icon: 'iconfont icon-caidan',
								},
							}
						]
					},
					{
						path: "/menu/menu2",
						name: 'menuMenu2',
						component: () => import('/@/views/menu/menu2/menu2.vue'),
						meta: {
							title: 'message.router.menu2',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'iconfont icon-caidan',
						}
					}
				]
			},
			{
				path: '/function',
				name: 'function',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/function/icon',
				meta: {
					title: 'message.router.funIndex',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					auth: ['admin', 'test'],
					icon: 'el-icon-link',
				},
				children:[
					{
						path: '/function/icon',
						name: 'functionIcon',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/function/icon/element',
						meta: {
							title: 'message.router.funIcon',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'fa fa-lastfm',
						},
						children: [
							{
								path: '/function/icon/element',
								name: 'functionIconElement',
								component: () => import('/@/views/function/icon/element.vue'),
								meta: {
									title: 'message.router.pagesElement',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									auth: ['admin', 'test'],
									icon: 'el-icon-eleme',
								},
							},
							{
								path: '/function/icon/iconfont',
								name: 'functionIconIconfont',
								component: () => import('/@/views/function/icon/iconfont.vue'),
								meta: {
									title: 'message.router.pagesIocnfont',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									auth: ['admin', 'test'],
									icon: 'fa fa-italic',
								},
							},
							{
								path: '/function/icon/awesome',
								name: 'functionIconAwesome',
								component: () => import('/@/views/function/icon/awesome.vue'),
								meta: {
									title: 'message.router.pagesAwesome',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									auth: ['admin', 'test'],
									icon: 'fa fa-font',
								},
							}
						]
					},
					{
						path: '/function/countup',
						name: 'functionCountup',
						component: () => import('/@/views/function/countup/index.vue'),
						meta: {
							title: 'message.router.funCountup', 
							isLink: '',
							isHide: false, 
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'el-icon-odometer',
						},
					},
					{
						path: '/function/printPage',
						name: 'functionPrintPage',
						component: () => import('/@/views/function/printPage/index.vue'),
						meta: {
							title: 'message.router.funPrintJs', 
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'el-icon-printer',
						},
					}
				]
			}
    ]
  }
]

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
 export const staticRoutes: Array<RouteRecordRaw> = [
    {
      path: '/login',
      name: 'login',
      component: () => import('/@/views/login/index.vue'),
      meta: {
          title: '登陆',
      },
    },
    {
        path:'/404',
        name: 'notFound',
        component: () => import('/@/views/error/404.vue'),
        meta: {
            title:'找不到此页面'
        }
    },
    {
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/error/401.vue'),
        meta: {
            title: '没有权限',
        },
    },
  ]