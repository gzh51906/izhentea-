import Vue from 'vue';

import home from "../pages/home.vue"

import Goodslist from "../pages/Goodslist.vue"
import Goodskinds from "../pages/Goodskinds.vue"
import Addgoods from "../pages/Addgoods.vue"
import Addusers from "../pages/Addusers.vue"
import Orderlist from "../pages/Orderlist.vue"
import Userlist from "../pages/Userlist.vue"

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
        component: home,
        children: [
            {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'goodslist',
                path: 'goodslist',
                component: Goodslist
            }, {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'goodskinds',
                path: 'goodskinds',
                component: Goodskinds
            }, {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'addgoods',
                path: 'addgoods',
                component: Addgoods
            }, {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'addusers',
                path: 'addusers',
                component: Addusers
            }, {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'orderlist',
                path: 'orderlist',
                component: Orderlist
            }, {
                // 当浏览器路径为/home时，渲染Home组件内容
                name: 'userlist',
                path: 'userlist',
                component: Userlist
            },
        ]


    }, {
        // 当浏览器路径为/，重定向到/home
        path: '/',
        redirect: { name: 'home' }
    }]
})


export default router;

