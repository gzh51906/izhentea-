
<template>
  <div class="home">
    <div class="H_left">
      <div class="logo">
        <h1>后台管理系统</h1>
      </div>
      <!-- 下拉菜单 -->
      <div class="life_menu">
        <a-switch
          defaultChecked
          @change="changeTheme"
          checkedChildren="dark"
          unCheckedChildren="light"
        />
        <br />
        <br />
        <a-menu
          style="width: 300px"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          mode="inline"
          :theme="theme"
          :selectedKeys="[current]"
          @click="handleClick"
          class="siderbar"
        >
          <a-sub-menu :key="item.key" v-for="item in submenu">
            <span slot="title">
              <a-icon :type="item.icon" />
              <span>{{item.text}}</span>
            </span>
            <a-menu-item
              :key="ele.key"
              v-for="ele in item.list"
              @click="goto(`/home/${ele.path}`)"
            >{{ele.text}}{{ele.key}}{{ele.path}}</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>

    <div class="H_right">
      <a-row style="height:60px;background-color:#fff">
        <a-col :span="24">col-12</a-col>
      </a-row>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      submenu: [
        {
          text: "商品管理",
          key: "sub1",
          icon: "appstore",
          list: [
            {
              text: "商品列表",
              key: "1",
              name: "goodslist",
              path: "goodslist"
            },
            {
              text: "商品分类",
              key: "2",
              name: "goodskinds",
              path: "goodskinds"
            },
            {
              text: "添加商品",
              key: "3",
              name: "addgoods",
              path: "addgoods"
            }
          ]
        },
        {
          text: "用户管理",
          key: "sub2",
          icon: "setting",
          list: [
            {
              text: "用户列表",
              key: "4",
              name: "userlist",
              path: "userlist"
            },
            {
              text: "添加用户",
              key: "5",
              name: "addusers",
              path: "addusers"
            }
          ]
        },
        {
          text: "订单管理",
          key: "sub3",
          icon: "mail",
          list: [
            {
              text: "订单列表",
              key: "6",
              name: "orderlist",
              path: "orderlist"
            }
          ]
        }
      ],
      current: "1",
      theme: "dark"
    };
  },
  methods: {
    handleClick(e) {
      console.log("click ", e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
    goto(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
h1 {
  width: 232px;
  font-size: 20px;
}
.H_left {
  width: 300px;
  height: 100%;
  float: left;
  background-color: rgba(32, 34, 42, 1);
}
.H_left .logo {
  height: 60px;
  text-align: center;
}
.H_left .logo h1 {
  font-size: 20px;
  color: #c2c2c2;
}
.H_right {
  margin-left: 300px;
  height: 100%;
  background-color: #ccc;
}
.siderbar {
  width: 300px;
  /* height: 60px */
  font-size: 24px;
  color: #c2c2c2;
  /* padding-left: 50px; */
  background-color: rgba(32, 34, 42, 1);
}

.siderbar .a-sub-menu {
  width: 300px;
}
</style>

