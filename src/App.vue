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
Vue.use(Vant);
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
}
</style>
