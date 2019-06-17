import Vue from 'vue';
import axios from './common/axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/router';
import './permission';
import './error';
import store from './store';
import { loadStyle } from './common/util/util'
import * as urls from '@/common/config/env';
import Element from 'element-ui';
import {
    iconfontUrl,
    iconfontVersion
} from '@/common/config/env';
import i18n from './lang'
import './styles/common.scss';

require('./data/mock/index.js')

import basicContainer from './components/basic-container/main'

Vue.use(router)

Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})
Vue.use(window.AVUE, {
    i18n: (key, value) => i18n.t(key, value)
})

Vue.component('basicContainer', basicContainer)

// 加载相关url地址
Object.keys(urls).forEach(key => {
    Vue.prototype[key] = urls[key];
})

// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
    loadStyle(iconfontUrl.replace('$key', ele));
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
