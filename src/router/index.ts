import { getSession, clearSession} from '@/utils/storage';
import { store } from '@/store/index';
import { getMenuAdmin, getMenuTest } from '@/api/menu/index';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 定义动态路由
export const dynamicRoutes = [
	{
		path: '/',
		name: '/',
		component: () => import('@/views/layout/index.vue'),
		redirect: '/home',
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
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
				path: '/order',
				name: 'order',
				component: () => import('@/views/layout/routerView/parent.vue'),
				redirect: '/order/index',
				meta: {
					title: '订单',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					auth: ['admin', 'test'],
					icon: 'iconfont icon-shouye',
				},
				children:[
					{
						path: '/order/index',
						name: 'orderIndex',
						component: () => import('@/views/order/index.vue'),
						meta: {
							title: '订单列表',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: true,
							isIframe: false,
							auth: ['admin', 'test'],
							icon: 'iconfont icon-shouye',
						},
					}
				]
			}
    ]
  }
]
const staticRoutes: Array<RouteRecordRaw> = [
  {
	path: '/login',
	name: 'login',
	component: () => import('@/views/login/index.vue'),
	meta: {
		title: '登陆',
	},
  },
  {
	  path:'/404',
	  name: 'notFound',
	  component: () => import('@/views/error/404.vue'),
	  meta: {
		  title:'找不到此页面'
	  }
  },
  {
	  path: '/401',
	  name: 'noPower',
	  component: () => import('@/views/error/401.vue'),
	  meta: {
		  title: '没有权限',
	  },
  },
]

// 定义404界面
const pathMatch = {
	path: '/:path(.*)*',
	redirect: '/404',
};

const dynamicViewsModules = import.meta.glob('../views/**/*.{vue,tsx}');

// 添加静态路由
const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes
})
// 后端控制路由
export function getBackEndControlRoutes(callback: any) {
	const token = getSession('token');
	if(!token) return false;
	store.dispatch('userInfos/setUserInfos');
	const auth = (store.state.userInfos.userInfos as any).authPageList[0]; // 模拟 admin 与 test
	if (auth === 'admin') {
		getMenuAdmin()
			.then((res: any) => {
				callback(res);
			})
			.catch(() => {});
	} else {
		getMenuTest()
			.then((res: any) => {
				callback(res);
			})
			.catch(() => {});
	}
}
// 后端控制路由，模拟执行路由数据初始化
export function setBackEndControlRoutesFun(res: any, callback?: any) {
	initBackEndControlRoutesFun(res);
	window.location.href = window.location.href; // 防止页面刷新时，出现空白或404
	callback(res);
}
// 后端控制路由，模拟执行路由数据初始化
const initBackEndControlRoutesFun = (res: any) => {
	
	// NextLoading.start();
	const oldRoutes = JSON.parse(JSON.stringify(res.data));
	store.dispatch('requestOldRoutes/setBackEndControlRoutes', oldRoutes);
	// dynamicRoutes[0].children = backEndRouter(res.data);
	resetRoute(); // 删除/重置路由
	router.addRoute(pathMatch); // 添加404界面
	setAddRoute(); // 添加动态路由
	setFilterMenu(); // 过滤权限菜单 
	setCacheTagsViewRoutes(); // 添加 keepAlive 缓存
};
// 后端控制路由，动态添加菜单时（刷新菜单）
export function setBackEndControlRefreshRoutes() {
	getBackEndControlRoutes((res: any) => {
		initBackEndControlRoutesFun(res);
	});
}
// 后端控制路由，后端路由 component 转换
export function backEndRouter(routes: any) {
	if (!routes) return;
	return routes.map((item: any) => {
		const { component } = item;
		const { children } = item;
		if (component) item.component = dynamicImport(dynamicViewsModules, component as string);
		children && backEndRouter(children);
		return item;
	});
}
// 后端控制路由，后端路由 component 转换函数
export function dynamicImport(dynamicViewsModules: Record<string, () => Promise<{ [key: string]: any }>>, component: string) {
	const keys = Object.keys(dynamicViewsModules);
	const matchKeys = keys.filter((key) => {
		const k = key.replace('../views', '');
		return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
	});
	if (matchKeys&&matchKeys.length === 1) {
		const matchKey = matchKeys[0];
		return dynamicViewsModules[matchKey];
	}
	if (matchKeys&&matchKeys.length > 1) {
		console.warn('Do not create files that do not end with. Vue');
		return false;
	}
}
// 多级嵌套数组处理成一维数组
export function formatFlatteningRoutes(arr: any) {
	if (arr.length < 0) return false;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].children) {
			arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1));
		}
	}
	return arr;
}

// 多级嵌套数组处理后的一维数组，再处理成 `定义动态路由` 的格式
// 只保留二级：也就是二级以上全部处理成只有二级，keep-alive 支持二级缓存
// isKeepAlive 处理 `name` 值，进行缓存。顶级关闭，全部不缓存
export function formatTwoStageRoutes(arr: any) {
	if (arr.length < 0) return false;
	const newArr: any = [];
	const cacheList: Array<string> = [];
	arr.forEach((v: any) => {
		if (v.path === '/') {
			newArr.push({ component: v.component, name: v.name, path: v.path, redirect: v.redirect, meta: v.meta, children: [] });
		} else {
			newArr[0].children.push(v);
			if (newArr[0].meta.isKeepAlive && v.meta.isKeepAlive) {
				cacheList.push(v.name);
				store.dispatch('keepAliveNames/setCacheKeepAlive', cacheList);
			}
		}
	});
	return newArr;
}
// 获取当前用户的权限去比对路由表，用于左侧菜单/横向菜单的显示
export function setFilterMenu() {
	store.dispatch('routesList/setRoutesList', setFilterMenuFun(dynamicRoutes[0].children, (store.state.userInfos.userInfos as any).authPageList));
}
// 递归过滤有权限的路由
export function setFilterMenuFun(routes: any, auth: any) {
	const menu: any = [];
	routes.forEach((route: any) => {
		const item = { ...route };
		if (hasAuth(auth, item)) {
			if (item.children) item.children = setFilterMenuFun(item.children, auth);
			menu.push(item);
		}
	});
	return menu;
}
// 判断路由 auth 中是否包含当前登录用户权限字段
export function hasAuth(auths: any, route: any) {
	if (route.meta && route.meta.auth) return auths.some((auth: any) => route.meta.auth.includes(auth));
	else return true;
}
// 缓存多级嵌套数组处理后的一维数组(tagsView、菜单搜索中使用：未过滤隐藏的(isHide))
export function setCacheTagsViewRoutes() {
	// 先处理有权限的路由，否则 tagsView、菜单搜索中无权限的路由也将显示
	let authsRoutes = setFilterMenuFun(dynamicRoutes, (store.state.userInfos.userInfos as any).authPageList);
	// 添加到 vuex setTagsViewRoutes 中
	store.dispatch('tagsViewRoutes/setTagsViewRoutes', formatTwoStageRoutes(formatFlatteningRoutes(authsRoutes))[0].children);
}
// 获取当前用户的权限去比对路由表，用于动态路由的添加
export function setFilterRoute(chil: any) {
	let filterRoute: any = [];
	chil.forEach((route: any) => {
		if (route.meta.auth)
			route.meta.auth.forEach((metaAuth: any) => {
				(store.state.userInfos.userInfos as any).authPageList.forEach((auth: any) => {
					if (metaAuth === auth) filterRoute.push({ ...route });
				});
			});
	});
	return filterRoute;
}
// 对比路由表，防止重复
export function setFilterRouteEnd() {
	let filterRouteEnd: any = formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes));
	filterRouteEnd[0].children = setFilterRoute(filterRouteEnd[0].children);
	return filterRouteEnd;
}
// 添加动态路由
export function setAddRoute(){
	setFilterRouteEnd().forEach((route: any) => {
		router.addRoute((route as unknown) as RouteRecordRaw);
	});	
}
// 删除/重置路由
export function resetRoute() {
	setFilterRouteEnd().forEach((route: any) => {
		const { name } = route;
		router.hasRoute(name) && router.removeRoute(name);
	});
}
// 初始化方法执行，防止刷新时丢失
export function init() {
	// NextLoading.start();
	const token = getSession('token');
	if(!token) return false;
	// 触发初始化用户信息	
	store.dispatch('userInfos/setUserInfos');
	setAddRoute();//添加动态路由
	router.addRoute(pathMatch)//添加404页面
	setFilterMenu()//过滤权限菜单
	setCacheTagsViewRoutes(); // 添加 keepAlive 缓存
}
// 是否开启后端路由控制
const requestRoutes = store.state.themeConfig.themeConfig.isRequestRoutes;
if(!requestRoutes) init()

// requestRoutes为true，开启后端控制路由
if(requestRoutes){
	getBackEndControlRoutes((res: any) => {
		setBackEndControlRoutesFun(res);
	});
}

// 路由前加载
router.beforeEach((to,from,next) => {
	// NProgress.configure({ showSpinner: false });
	// if (to.meta.title) NProgress.start();
	const token = getSession('token')	
	if(to.path === '/login' && !token) {
		next()
		// NProgress.done();
	}else {
		if(!token) {
			next('/login');
			clearSession();
			resetRoute();
			// NProgress.done();
		}else if (!token && to.path === '/login'){
			next('/home');
			// NProgress.done();
		}else {
			next()
		}
	}
})

// 加载后
// 关闭进度条加载
router.afterEach(() => {
	// NProgress.done();
	// NextLoading.done();
})

// 导出
export default router;
