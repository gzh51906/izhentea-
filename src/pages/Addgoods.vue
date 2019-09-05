<template>
  <div class="addgoods">
    <div class="goodsname">
      <label for="name">商品名称</label>
      <input type="text" name id="name" placeholder="请输入标题" />
      <span>50字以内</span>
    </div>
    <div class="goodsname">
      <label for="two">商品副标题</label>
      <input type="text" name id="two" placeholder="请输入" />
      <span>100字以内</span>
    </div>
    <div class="goodsname">
      <label for="price">商品价格</label>
      <input type="text" name id="price" placeholder="请输入" />
      <label for="sale">销售价格</label>
      <input type="text" name id="sale" placeholder="请输入" />
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
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        :fileList="fileList"
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
      <input type="text" name id="kucun" placeholder="请输入" />
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
      // 下拉选择
      value: undefined,
      treeData: [
        {
          title: "手机",
          value: "0-0",
          key: "0-0"
        },
        {
          title: "电脑",
          value: "0-1",
          key: "0-1"
        },
        {
          title: "电视",
          value: "0-2",
          key: "0-2"
        }
      ],
      // 上传图片
      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
      ],
      // 商品描述
      text: ""
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
    },
    // 选择
    onChange1(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onChange2(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onChange3(e) {
      console.log(`checked = ${e.target.checked}`);
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
</style>