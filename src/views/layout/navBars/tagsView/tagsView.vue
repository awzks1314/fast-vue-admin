<template>
    <div class="layout-navbars-tagsview" :class="{ 'layout-navbars-tagsview-shadow': getThemeConfig.layout === 'classic' }">
        <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll">
            <ul class="layout-navbars-tagsview-ul" :class="setTagsStyle" ref="tagsUlRef">
                <li
                    v-for="(v, k) in tagsViewList"
                    :key='k'
                    class="layout-navbars-tagsview-ul-li"
                    @click="onTagsClick(v,k)"
                    :data-name="v.name"
                    @contextmenu.prevent="onContextmenu(v, $event)"
                    :class="{ 'is-active': isActive(v.path) }"
                    :ref="
                        (el) => {
                            if (el) tagsRefs[k] = el
                        }
                    "
                >
                    <i class="iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont font14" v-if="isActive(v.path)"></i>
                    <i class="layout-navbars-tagsview-ul-li-iconfont" :class="v.meta.icon" v-if="!isActive(v.path) && getThemeConfig.isTagsviewIcon"></i>
                    <span>{{ $t(v.meta.title) }}</span>
                    <template v-if="isActive(v.path)">
						<i class="el-icon-refresh-right ml5" @click.stop="refreshCurrentTagsView(v.path)"></i>
						<i
							class="el-icon-close layout-navbars-tagsview-ul-li-icon layout-icon-active"
							v-if="!v.meta.isAffix"
							@click.stop="closeCurrentTagsView(v.path)"
						></i>
					</template> 
                    <i
						class="el-icon-close layout-navbars-tagsview-ul-li-icon layout-icon-three"
						v-if="!v.meta.isAffix"
						@click.stop="closeCurrentTagsView(v.path)"
					></i>
                </li>
            </ul>
        </el-scrollbar>
        <Contextmenu :dropdown="dropdown" ref="contextmenuRef" @currentContextmenuClick="onCurrentContextmenuClick" />
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store/index'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { computed, ref, getCurrentInstance, reactive,nextTick, toRefs, watch, onBeforeMount, onUnmounted, onBeforeUpdate, onMounted } from 'vue'
import { Session } from '@/utils/storage'
import Sortable from 'sortablejs'  
import screenfull from 'screenfull'
import Contextmenu from '@/views/layout/navBars/tagsView/contextmenu.vue';
export default {  
    name:'layoutNavbarsTagsView',
    components: { Contextmenu }, 
    setup() {
        const { proxy } = getCurrentInstance() as any
        const tagsRefs = ref([]);
        const scrollbarRef = ref();
        const contextmenuRef = ref();
        const tagsUlRef = ref();
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const state: any = reactive({
            routePath: route.path,//当前路由地址
            dropdown: { x:'', y:'' },//偏移
            tagsRefsIndex: 0,//当前tags下标
            tagsViewList: [],//tags数组
            sortable: '',
            tagsViewRoutesList: []
        })
        // 获取配置信息
        const getThemeConfig = computed(() => {
            return store.state.themeConfig.themeConfig;
        }) 
        // 获取 tagsView 风格
        const setTagsStyle = computed(() => {
            return store.state.themeConfig.themeConfig.tagsStyle;
        })
        // 储存 tagsViewList 到缓存，页面刷新时，保留记录
        const addBrowserSetSession = (tagsViewList: Array<Object>) => {
            Session.set('tagsViewList', tagsViewList)
        }
        // 获取 vuex 中的tagsViewRoutes 列表
        const getTagsViewRoutes = () => {
            state.routePath = route.path;
            state.tagsViewList = [];
            if(!store.state.themeConfig.themeConfig.isCacheTagsView) Session.remove('tagsViewList');
            state.tagsViewRoutesList = store.state.tagsViewRoutes.tagsViewRoutes;
            initTagsView()
        }
        // vuex 中获取路由信息，如果设置了固定的(isAffix),进行初始化显示
        const initTagsView = () => {
            if (Session.get('tagsViewList') && store.state.themeConfig.themeConfig.isCacheTagsView) {
                state.tagsViewList = Session.get('tagsViewList');
            } else {
                state.tagsViewRoutesList.map((v: any) => {
                    if (v.meta.isAffix && !v.meta.isHide) state.tagsViewList.push({ ... v });
                })
                addTagsView(route.path)
            }
            // 初始化当前元素(li)的下标
            getTagsRefsIndex(route.path)
            // 添加初始化横向滚动条移动到对应位置
            tagsViewmoveToCurrentTag()
        }
        // 1. 添加 tagsView： 未设置隐藏(isHide) 也加到 tagsView 中
        const addTagsView = (path: string, to?: any) => {
            if (state.tagsViewList.some((v: any) => v.path === path)) return false;
            const item = state.tagsViewRoutesList.find((v: any) => v.path === path);
            if (item.meta.isLink && !item.meta.isIframe) return false;
            // item.query = to?.query ? to?.query : route.query;
            item.query = to&&to.query ? to.query:route.query;
            state.tagsViewList.push({ ...item });
            addBrowserSetSession(state.tagsViewList);
        }
        // 2. 刷新当前tagsView
        const refreshCurrentTagsView = (path: string) => {
            proxy.mittBus.emit('onTagsViewRefreshRouterView', path)
        }
        // 3.关闭当前tagsView 如果是设置了固定的isAffix,不可关闭
        const closeCurrentTagsView = (path: string) => {
            state.tagsViewList.map((v: any, k: number, arr: any) => {
                if (!v.meta.isAffix) {
                    if (v.path === path) {
                        state.tagsViewList.splice(k, 1);
                        setTimeout(() => {
                            // 最后一个
                            if(state.tagsViewList.length === k) router.push({ path: arr[arr.length - 1].path, query: arr[arr.length - 1].query });
                            // 否则跳转
                            else router.push({ path: arr[k].path, query: arr[k].query });
                        },0)
                    }
                }
            })
            addBrowserSetSession(state.tagsViewList)
        }
        // 4.关闭其他 tagsView： 如果设置了固定isAffix，不进行关闭
        const closeOtherTagsView = (path: string) => {
            state.tagsViewList = []
            state.tagsViewRoutesList.map((v: any) => {
                if(v.meta.isAffix && !v.meta.isHide) state.tagsViewList.push({ ...v });
            })
            addTagsView(path)
        }
        // 5. 关闭全部，设置了固定的isAffix，不进行关闭
        const closeAllTagsView = (path: string) => {
            state.tagsViewList = []
            state.tagsViewRoutesList.map((v: any) => {
                if (v.meta.isAffix && !v.meta.isHide) {
                    // 有固定或者不隐藏，添加到tagsViewList
                    state.tagsViewList.push({ ...v })
                    // 如果tagsViewList有的话，跳转路由
                    if (state.tagsViewList.some((v: any) => v.path === path)) router.push({ path, query:route.query})
                    else router.push({ path: v.path, query: route.query});
                }
            })
            // 添加浏览器，方便缓存
            addBrowserSetSession(state.tagsViewList);
        }
        // 6.开启当前页面全屏
        const openCurrentFullScreen = (path: string) => {
            const item = state.tagsViewList.find((v: any) => v.path === path);
            nextTick(() => {
                router.push({ path, query: item.query})
                const element = document.querySelector('.layout-main');
                const screenfulls: any = screenfull;
                screenfulls.request(element)
            })
        }
        // 当前项右键菜单点击
        const onCurrentContextmenuClick = (data: any) => {
            let { id, path } = data;
            // 找到当前路由对象信息
            let currentTag = state.tagsViewList.find((v: any) => v.path === path)
            switch (id) {
                case 0:
                    // 刷新路由
                    refreshCurrentTagsView(path);
                    router.push({ path, query: currentTag.query });
                    break;
                case 1:
                    // 关闭当前项
                    closeCurrentTagsView(path);
                    break;
                case 2:
                    // 关闭其他
                    router.push({ path, query: currentTag.query });
                    closeOtherTagsView(path);
                case 3:
                    // 关闭所有
                    closeAllTagsView(path);
                    break;
                case 4:
                    // 当前页全屏
                    openCurrentFullScreen(path)
                default:
                    break;
            }
        }
        // 判断页面高亮
        const isActive = (path: string) => {
            return path === state.routePath;
        }
        // 右键点击时，传递x，y 坐标值到子组件中
        const onContextmenu = (v: any, e: any) => {
            const { clientX, clientY } = e;
			state.dropdown.x = clientX;
			state.dropdown.y = clientY;
			contextmenuRef.value.openContextmenu(v);
        }
        // 当前的 tagsView 项点击
        const onTagsClick = (v: any, k:number) => {
            state.routePath = v.path;
            state.tagsRefsIndex = k;
            router.push(v)
        }
        // 更新滚动条显示
        const updateScrollbar = () => {
            proxy.$refs.scrollbarRef.update()
        }
        // 鼠标滚轮滚动
        const onHandleScroll = (e: any) => {
            proxy.$refs.scrollbarRef.$refs.wrap.scrollLeft += e.wheelDelta / 4
        }
        // tagsView 横向滚动
        const tagsViewmoveToCurrentTag = () => {
            nextTick(() => {
                if (tagsRefs.value.length <= 0) return false;
                // 当前li元素
                let liDom = tagsRefs.value[state.tagsRefsIndex];
                // 当前li元素下标
                let liIndex = state.tagsRefsIndex;
                // 当前ul下li元素总长度
                let liLength = tagsRefs.value.length;
                // 第一个li
                let liFirst: any = tagsRefs.value[0]
                // 最后一个li
                let liLast: any = tagsRefs.value[tagsRefs.value.length - 1]
                // 当前滚动条的值
                let scrollRefs = proxy.$refs.scrollbarRef.$refs.wrap;
                // 当前滚动条滚动宽度
                let scrollS = scrollRefs.scrollWidth;
                // 当前滚动条皮偏移宽度
                let offsetW = scrollRefs.offsetWidth;
                // 当前滚动条偏移距离
                let scrollL = scrollRefs.scrollLeft;
                // 上一个 tags li dom
				let liPrevTag: any = tagsRefs.value[state.tagsRefsIndex - 1];
				// 下一个 tags li dom
				let liNextTag: any = tagsRefs.value[state.tagsRefsIndex + 1];
				// 上一个 tags li dom 的偏移距离
				let beforePrevL: any = '';
				// 下一个 tags li dom 的偏移距离
				let afterNextL: any = '';
                if (liDom === liFirst){
                    // 首
                    scrollRefs.scrollLeft = 0
                }else if (liDom === liLast){
                    // 尾
                    scrollRefs.scrollLeft = scrollS - offsetW
                }else {
                    if (liIndex === 0) beforePrevL = liFirst.offsetLeft - 5;
                    else beforePrevL = liPrevTag && liPrevTag.offsetLeft - 5;
                    if (liIndex === liLength) afterNextL = liLast.offsetLeft +liLast.offsetWidth + 5
                    else afterNextL = liNextTag.offsetLeft + liNextTag.offsetWidth + 5;
                    if (afterNextL > scrollL + offsetW) {
						scrollRefs.scrollLeft = afterNextL - offsetW;
					} else if (beforePrevL < scrollL) {
						scrollRefs.scrollLeft = beforePrevL;
					}
                }
                // 更新滚动条，防止不出现
                updateScrollbar();
            })
        }
        // 获取tagsView的下标：用于处理tagsView点击时的横向滚动
        const getTagsRefsIndex = (path: string) => {
            if(state.tagsViewList.length > 0) {
                state.tagsRefsIndex = state.tagsViewList.findIndex((item: any) => item.path === path);
            }
        }
        // 设置tagsView可以拖拽
        const initSortable = () => {
            const el: any = document.querySelector('.layout-navbars-tagsview-ul');
            if (!el) return false;
            if (!getThemeConfig.value.isSortableTagsView) state.sortable && state.sortable.destory()
            if (getThemeConfig.value.isSortableTagsView) {
                state.sortable = Sortable.create(el, {
                    animation: 300,
                    dadaIdAtte: 'data-name',
                    onEnd: () => {
                        const sortEndList: any = [];
                        state.sortable.toArray().map((val: any) => {
                            state.tagsView.map((v: any) => {
                                if (v.name === val) sortEndList.push({ ...v})
                            });
                        });
                        addBrowserSetSession(sortEndList);
                    },
                });
            }
        };
        // 监听路由的变化，动态赋值给 tagsView
        watch(store.state, (val) => {
            if (val.tagsViewRoutes.tagsViewRoutes.length === state.tagsViewRoutesList.length) return false;
            getTagsViewRoutes()
        })
        // 页面加载前
        onBeforeMount(() => {
            // 监听非本页面调用0 刷新当前，1 关闭当前，2关闭其他，3 关闭全部， 4 当前页全屏
            proxy.mittBus.on('onCurrentContextmenuClick', (data: object) => {
                onCurrentContextmenuClick(data)
            })
            // 兼容布局配置界面开启/关闭拖拽
            proxy.mittBus.on('openOrCloseSortable', () => {
                // 设置可以拖拽
                initSortable()
            })
        })
        // 页面卸载时
        onUnmounted(() => {
            // 取消非本页面调用监听
            proxy.mittBus.off('onCurrentContextmenuClick');
            // 取消监听布局配置界面开启/关闭拖拽
            proxy.mittBus.off('openOrCloseSortable');
        })
        // 页面更新时
        onBeforeUpdate(() => {
            tagsRefs.value = []
        })
        // 页面加载时
        onMounted(() => {
            // 初始化 vuex 中的tagsViewRoutes 列表
            getTagsViewRoutes();
            initSortable();
        })
        // 路由更新时
        onBeforeRouteUpdate((to) => {
            state.routePath = to.path;
            addTagsView(to.path,to);
            getTagsRefsIndex(to.path);
            tagsViewmoveToCurrentTag();
        })
        return {
            isActive,//高亮
            onContextmenu,//右键点击
            onTagsClick,//当前项点击
            getTagsViewRoutes,// 获取 vuex 中的tagsViewRoutes 列表
            tagsRefs,//
            contextmenuRef,//子组件ref
            scrollbarRef,//ref
            tagsUlRef,
            onHandleScroll,//鼠标滚轮滚动
            refreshCurrentTagsView,//刷新当前路由
            closeCurrentTagsView,//关闭当前
            onCurrentContextmenuClick,//菜单右键点击
            setTagsStyle,//tagsViewList风格
            getThemeConfig,//配置信息
            ...toRefs(state)
        }
    }
}
</script>


<style scoped lang="scss">
.layout-navbars-tagsview {
	flex: 1;
	background-color: #ffffff;
	border-bottom: 1px solid #f1f2f3;
	::v-deep(.el-scrollbar__wrap) {
		overflow-x: auto !important;
	}
	&-ul {
		list-style: none;
		margin: 0;
		padding: 0;
		height: 34px;
		display: flex;
		align-items: center;
		color: #606266;
		font-size: 12px;
		white-space: nowrap;
		padding: 0 15px;
		&-li {
			height: 26px;
			line-height: 26px;
			display: flex;
			align-items: center;
			border: 1px solid #e6e6e6;
			padding: 0 15px;
			margin-right: 5px;
			border-radius: 2px;
			position: relative;
			z-index: 0;
			cursor: pointer;
			justify-content: space-between;
			&:hover {
				background-color: var(--color-primary-light-9);
				color: var(--color-primary);
				border-color: var(--color-primary-light-6);
			}
			&-iconfont {
				position: relative;
				left: -5px;
				font-size: 12px;
			}
			&-icon {
				border-radius: 100%;
				position: relative;
				height: 14px;
				width: 14px;
				text-align: center;
				line-height: 14px;
				right: -5px;
				&:hover {
					color: #fff;
					background-color: var(--color-primary-light-3);
				}
			}
			.layout-icon-active {
				display: block;
			}
			.layout-icon-three {
				display: none;
			}
		}
		.is-active {
			color: #ffffff;
			background: var(--color-primary);
			border-color: var(--color-primary);
		}
	}
	// 风格2
	.tags-style-two {
		.layout-navbars-tagsview-ul-li {
			height: 34px !important;
			line-height: 34px !important;
			border: none !important;
			.layout-navbars-tagsview-ul-li-iconfont {
				display: none;
			}
			.layout-icon-active {
				display: none;
			}
			.layout-icon-three {
				display: block;
			}
		}
		.is-active {
			background: none !important;
			color: var(--color-primary) !important;
			border-bottom: 2px solid !important;
			border-color: var(--color-primary) !important;
			border-radius: 0 !important;
		}
	}
	// 风格3
	.tags-style-three {
		.layout-navbars-tagsview-ul-li {
			height: 34px !important;
			line-height: 34px !important;
			border-right: 1px solid #f6f6f6 !important;
			border-top: none !important;
			border-bottom: none !important;
			border-left: none !important;
			border-radius: 0 !important;
			margin-right: 0 !important;
			&:first-of-type {
				border-left: 1px solid #f6f6f6 !important;
			}
			.layout-icon-active {
				display: none;
			}
			.layout-icon-three {
				display: block;
			}
		}
		.is-active {
			background: white !important;
			color: var(--color-primary) !important;
			border-top: 1px solid !important;
			border-top-color: var(--color-primary) !important;
		}
	}
	// 风格4
	.tags-style-four {
		.layout-navbars-tagsview-ul-li {
			margin-right: 0 !important;
			border: none !important;
			position: relative;
			border-radius: 3px !important;
			.layout-icon-active {
				display: none;
			}
			.layout-icon-three {
				display: block;
			}
			&:hover {
				background: none !important;
			}
		}
		.is-active {
			background: none !important;
			color: var(--color-primary) !important;
		}
	}
}
.layout-navbars-tagsview-shadow {
	box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
}
</style>