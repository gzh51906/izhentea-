<template>
  <div class="addgoods">
    <div class="goodsname">
      <label for="name">用户名</label>
      <input type="text" name id="name" placeholder="请输入名称" />
    </div>
    <div class="goodsname">
      <label for="two">昵称</label>
      <input type="text" name id="two" placeholder="请输入" />
    </div>

    <div class="goodsname">
      <label for="password">密码</label>
      <input type="password" name id="password" placeholder="请输入密码" />
      <span>请填写6到12位密码</span>
    </div>

    <div class="goodsname">
      <label for="price">手机号</label>
      <input type="text" name id="price" placeholder="请输入" />
      <label for="sale">性别</label>
      <a-tree-select
        style="width: 200px"
        :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
        :treeData="treeData"
        placeholder="请选择"
        treeDefaultExpandAll
        v-model="value"
      >
        <span
          style="color: #08c"
          slot="title"
          slot-scope="{key, value}"
          v-if="key='0-0-1'"
        >Child Node1 {{value}}</span>
      </a-tree-select>
    </div>

    <div class="goodsname">
      <label for="brit">生日</label>
      <input type="password" name id="brit" placeholder="生日" />
    </div>

    <!-- 邮箱 -->
    <div class="goodsname">
      <label for="youxiang">邮箱</label>
      <input type="text" name id="youxiang" placeholder="请输入" />
    </div>

    <!-- 备注-->
    <div class="check">
      <p>备注</p>
      <a-textarea placeholder="Basic usage" :rows="4" @change="miaoshu" v-model="text" />
    </div>
    <!-- 提交 -->
    <div class="check">
      <p></p>
      <a-button type="primary" @click="ok">提交</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 下拉选择
      value: undefined,
      treeData: [
        {
          title: "男",
          value: "0-0",
          key: "0-0"
        },
        {
          title: "女",
          value: "0-1",
          key: "0-1"
        }
      ],
      // 备注
      text: ""
    };
  },
  methods: {
    // 备注
    miaoshu(e) {
      // console.log(e.path.)
      console.log(this.text);
    },
    //提交按钮
    ok() {
      console.log("success");
    }
  },
  watch: {
    // 下拉选择监听
    value(value) {
      console.log(value);
    }
  }
};
</script>
<style  scoped>
.goodsname {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.266667rem;
  margin-bottom: 0.266667rem;
}
.goodsname label {
  font-size: 0.24rem;
  padding-right: 0.4rem;
  width: 1.666667rem;
}
.goodsname input {
  width: 7.666667rem;
  height: 0.466667rem;
  font-size: 0.2rem;
  border: 1px solid #999;
  margin-right: 0.2rem;
}
.goodsname span {
  font-size: 0.2rem;
}
.goodsname #price,
#sale {
  width: 200px;
}
.clearfix {
  display: flex;
  justify-content: center;
}
#kucun {
  width: 200px;
}
.check {
  display: flex;
  padding: 0 0.266667rem;
  margin-bottom: 0.266667rem;
}
.check p {
  font-size: 0.24rem;
  padding-right: 0.4rem;
  width: 1.666667rem;
}
#brit {
  width: 2.666667rem;
}
#youxiang {
  width: 2.666667rem;
}
</style>