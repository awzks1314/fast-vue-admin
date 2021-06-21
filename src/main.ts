import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
// import { authDirective } from '/@/utils/authDirective';
import { i18n } from '@/i18n/index';
 
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import mitt from 'mitt';
// 截屏 
// import screenShort from 'vue-web-screen-shot';

const app = createApp(App);
app
    .use(store, key)
    .use(ElementPlus, { i18n: i18n.global.t })
    .use(router)
    .use(i18n)
    .mount('#app');
    
app.config.globalProperties.mittBus = mitt();

