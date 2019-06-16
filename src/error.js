import Vue from 'vue';
import store from './store';

Vue.config.errorHandler = function(err, vm, info) {
    Vue.nextTick(() => {
        store.commit('ADD_LOGS', {
            type: 'error',
            message: err.message,
            stack: err.stack,
            info
        });
        let groupMsg = (title, messages) => {
            console.group("%c%s", "color: red; background: transparent; font-size: 12px;", title);
            console.log(messages)
            console.groupEnd();
        };

        if (process.env.NODE_ENV === 'development') {
            groupMsg('错误信息', info);
            groupMsg('Vue 实例', vm);
            groupMsg('Error', err);
        }
    })
}
