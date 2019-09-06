<template>
  <div class="addgoods">
    <div class="goodsname">
      <label for="name">用户名</label>
      <input type="text" name id="name" placeholder="请输入名称" v-model="user" />
    </div>
    <div class="goodsname">
      <label for="two">昵称</label>
      <input type="text" name id="two" placeholder="请输入" v-model="name" />
    </div>

    <div class="goodsname">
      <label for="password2">密码</label>
      <input
        type="password"
        name
        id="password2"
        placeholder="请输入密码"
        v-model="password"
        @change="mima()"
      />
      <span v-if="block">请填写6到12位密码</span>
      <span v-else>{{scac?"密码格式不正确，请填写6到12位密码":"ok"}}</span>
    </div>

    <div class="goodsname">
      <label for="password">确认密码</label>
      <input
        type="password"
        name
        id="password"
        placeholder="请再次输入密码"
        v-model="password2"
        @change="mima2()"
      />
      <span v-if="block2">请再次填写密码</span>
      <span v-else>{{scac2?"密码不正确":"ok"}}</span>
    </div>

    <div class="goodsname">
      <label for="price">手机号</label>
      <input type="text" name id="price" placeholder="请输入" v-model="phone" @change="phone1()" />
      <span v-if="block3" id="phone2">请输入手机号码</span>
      <span v-else id="phone2">{{scac3?"手机号码格式不正确":"ok"}}</span>
      <label for="sale" id="sex">性别</label>
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
      <input type="text" name id="brit" placeholder="生日" v-model="brit" />
    </div>

    <!-- 邮箱 -->
    <div class="goodsname">
      <label for="youxiang">邮箱</label>
      <input type="text" name id="youxiang" placeholder="请输入" v-model="mail" />
    </div>

    <!-- 备注-->
    <div class="check">
      <p>备注</p>
      <a-textarea placeholder :rows="4" @change="miaoshu" v-model="text" />
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
      // 用户名
      user: "",
      // 昵称
      name: "",
      // 密码
      password: "",
      // 确认密码
      password2: "",
      // 密码格式
      scac: false,
      block: true,
      // 第二次密码
      scac2: false,
      block2: true,
      // 手机号
      phone: "",
      // 手机号校验
      scac3: false,
      block3: true,
      // 性别
      value: undefined,
      // 生日
      brit: "",
      // 邮箱
      mail: "",
      // 备注
      text: "",
      // 下拉选择

      treeData: [
        {
          title: "男",
          value: "男",
          key: "0-0"
        },
        {
          title: "女",
          value: "女",
          key: "0-1"
        }
      ],
      // 备注
      text: ""
    };
  },
  methods: {
    // 手机号
    phone1() {
      let regPhone = /^1[3-9]\d{9}$/;
      if (!regPhone.test(this.phone)) {
        this.scac3 = true;
        this.block3 = false;
        return;
      }
      this.block3 = false;
      this.scac3 = false;
    },
    // 密码
    mima(e) {
      let regPassword = /^[a-zA-Z0-9]{6,12}$/;
      if (!regPassword.test(this.password)) {
        this.scac = true;
        this.block = false;
        return;
      }
      this.block = false;
      this.scac = false;
    },
    // 第二次密码
    mima2() {
      if (this.password != this.password2) {
        this.scac2 = true;
        this.block2 = false;
        return;
      }
      this.block2 = false;
      this.scac2 = false;
    },
    // 备注
    miaoshu(e) {
      // console.log(e.path.)
      console.log(this.text);
    },
    //提交按钮
    async ok() {
      // 密码校对

      console.log(
        this.user,
        this.name,
        this.password,
        this.password2,
        this.phone,
        this.value,
        this.brit,
        this.mail,
        this.text
      );
      if (
        !this.scac &
        !this.scac2 &
        !this.scac3 &
        !this.block3 &
        !this.block2 &
        !this.block1
      ) {
        console.log("success");
        let { data } = await this.$axios.post(
          "http://localhost:8888/user/reg",
          {
            // id: this.id,
            user: this.user,
            name: this.name,
            password: this.password2,
            phone: this.phone,

            sex: this.value,
            brit: this.brit,
            mail: this.mail,
            text: this.text
          }
        );
        this.user = "";
        this.name = "";
        this.password = "";
        this.password2 = "";
        this.phone = "";
        this.value = "";
        this.brit = "";
        this.mail = "";
        this.text = "";
      } else {
        alert("填写的信息有错误");
      }
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
#sex {
  width: 0.596667rem;
  padding-right: 0.1rem;
  margin-left: 0.2rem;
}
#phone2 {
  width: 1.866667rem;
}
</style>