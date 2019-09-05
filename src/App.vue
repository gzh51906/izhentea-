<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

//引入ui组件vant
import Vant from "vant";
import "vant/lib/index.css";
import "./rem.js";

//引入vant组件
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Vant);

Vue.use(Antd);

export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background: ;
}
</style>
