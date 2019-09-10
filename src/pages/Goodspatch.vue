<template>
  <div class="addgoods">
    <div class="goodsname">
      <label for="name">商品名称</label>
      <input type="text" name id="name" v-model="goodstitle" />
      <span>50字以内</span>
    </div>
    <div class="goodsname">
      <label for="two">商品副标题</label>
      <input type="text" name id="two" placeholder="请输入" v-model="goodstitle2" />
      <span>100字以内</span>
    </div>
    <div class="goodsname">
      <label for="price">商品价格</label>
      <input type="text" name id="price" placeholder="请输入" v-model="goodsprice" />
      <label for="sale">销售价格</label>
      <input type="text" name id="sale" placeholder="请输入" v-model="saleprice" />
    </div>
    <div class="goodsname">
      <label for="two">商品分类</label>
      <a-tree-select
        style="width: 300px"
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
    <!-- 上传图片 -->
    <div class="clearfix">
      <a-upload
        action="http://localhost:8888/upload/goods"
        listType="picture-card"
        :fileList="fileList"
        name="goods"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 3">
          <a-icon type="plus" />
          <div class="ant-upload-text">上传图片</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
    <!-- 库存 -->
    <div class="goodsname">
      <label for="kucun">库存</label>
      <input type="text" name id="kucun" placeholder="请输入" v-model="stock" />
    </div>
    <!-- 选择 -->
    <div class="check">
      <p>商品属性</p>
      <a-checkbox @change="onChange1">热卖</a-checkbox>
      <a-checkbox @change="onChange2">推荐</a-checkbox>
      <a-checkbox @change="onChange3">促销</a-checkbox>
    </div>
    <!-- 上架 -->
    <div class="check">
      <p>上架</p>
      <a-switch checkedChildren="YES" unCheckedChildren="NO" defaultChecked @change="shangjia" />
    </div>
    <!-- 商品描述 -->
    <div class="check">
      <p>商品描述</p>
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
      // 商品标题
      goodstitle: "",
      // 商品副标题
      goodstitle2: "",
      // 商品价格
      goodsprice: "",
      // 商品售价
      saleprice: "",
      // 商品类别
      // sort: "",
      // 库存
      stock: "",
      // 商品属性
      nature: [],
      // 上架
      status: "上线",
      // 描述
      text: "",
      // 下拉选择
      value: undefined,
      treeData: [
        {
          title: "铁观音",
          value: "铁观音",
          key: "0-0"
        },
        {
          title: "大红袍",
          value: "大红袍",
          key: "0-1"
        },
        {
          title: "白茶",
          value: "白茶",
          key: "0-2"
        },
        {
          title: "碧螺春",
          value: "碧螺春",
          key: "0-3"
        },
        {
          title: "普洱",
          value: "普洱",
          key: "0-4"
        },
        {
          title: "红茶",
          value: "红茶",
          key: "0-5"
        },
        {
          title: "绿茶",
          value: "绿茶",
          key: "0-6"
        }
      ],
      // 上传图片
      previewVisible: false,
      previewImage: "",
      fileList: [],
      src: []
    };
  },
  methods: {
    // 上传图片
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
      console.log(this.fileList);
    },
    // 选择
    onChange1(e) {
      if (e.target.checked) {
        this.nature.push("热卖");
      } else {
        let a = this.nature.indexOf("热卖");
        this.nature.splice(a, 1);
      }
    },
    onChange2(e) {
      if (e.target.checked) {
        this.nature.push("推荐");
      } else {
        let a = this.nature.indexOf("推荐");
        this.nature.splice(a, 1);
      }
    },
    onChange3(e) {
      if (e.target.checked) {
        this.nature.push("促销");
      } else {
        let a = this.nature.indexOf("促销");
        this.nature.splice(a, 1);
      }
    },
    // 上架
    shangjia(e) {
      console.log(`checked = ${e}`);
    },
    // 商品描述
    miaoshu(e) {
      // console.log(e.path.)
      console.log(this.text);
    },
    //提交按钮
    async ok() {
      let now = new Date();
      // 年
      let year = now.getFullYear();
      //月
      let m = now.getMonth() + 1;
      // 日
      let day = now.getDate();
      // 日期拼接
      let shijian = `${year}-${m}-${day}`;
      // 图片
      this.fileList.forEach(item => {
        this.src.push("http://47.96.238.230:1907/" + item.response[0].path);
      });
      console.log(this.src);
      let {
        data: { data }
      } = await this.$axios.patch(
        "http://47.96.238.230:1907/goods/upgoodlist",
        {
          _id: this.$route.params.id,
          goodstitle: this.goodstitle,
          goodstitle2: this.goodstitle2,
          goodsprice: this.goodsprice,
          saleprice: this.saleprice,
          stock: this.stock,
          nature: this.nature,
          status: this.status,
          text: this.text,
          kinds: this.value,
          src: this.src,
          time: shijian
        }
      );
      alert("修改成功");
      this.goodstitle = "";
      this.goodstitle2 = "";
      this.goodsprice = "";
      this.saleprice = "";
      this.stock = "";
      this.nature = [];
      this.status = "上线";
      this.text = "";
      this.value = undefined;
      this.src = [];
      this.fileList = [];
    }
  },
  watch: {
    // 下拉选择监听
    value(value) {
      console.log(value);
    }
  },
  async created() {
    let id = this.$route.params.id;
    console.log(id);
    let {
      data: { data }
    } = await this.$axios.get("http://47.96.238.230:1907/goods/mgoodslist", {
      params: { _id: id }
    });
    this.goodstitle = data[0].goodstitle;
    this.goodstitle2 = data[0].goodstitle2;
    this.goodsprice = data[0].goodsprice;
    this.salesprice = data[0].salesprice;
    this.stock = data[0].stock;
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
</style>