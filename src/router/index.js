import Vue from 'vue';

import home from "../pages/home.vue"



// 路由
// 1.引入路由
import VueRouter from 'vue-router';


// 2.安装（使用）路由
Vue.use(VueRouter);

// 3. 实例化router并配置参数
let router = new VueRouter({
    routes: [{
        // 当浏览器路径为/home时，渲染Home组件内容
        name: 'home',
        path: '/home',
        component: home
    },

    {
        // 当浏览器路径为/，重定向到/home
        path: '/',
        redirect: { name: 'home' }
    }]
})


export default router;

