<template>
  <div class="goodslist">
    <div class="top">
      <div class="left">
        <!-- 按钮 -->
        <van-button icon="add-o" type="primary">添加</van-button>
        <van-button icon="delete">按钮</van-button>
      </div>
      <div class="right">
        <!-- 输入 -->
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入标题" />
        </van-cell-group>
        <!-- 分类 -->
        <van-collapse v-model="activeNames">
          <van-collapse-item title="请选择分类" name="1"></van-collapse-item>
        </van-collapse>
        <van-button type="primary">搜索</van-button>
      </div>
    </div>
    <!-- 表格 -->
    <table class="table" rules="all">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />全选
          </th>
          <th scope="col">#</th>
          <th scope="col">商品名称</th>
          <th scope="col">分类</th>
          <th scope="col">价格</th>
          <th scope="col">价格</th>
          <th scope="col">库存</th>
          <th scope="col">状态</th>
          <th scope="col">添加时间</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>iphone</td>
          <td>手机</td>
          <td>789</td>
          <td>789</td>
          <td>10</td>
          <td>上线</td>
          <td>2019-5-4</td>
          <td>
            <div class="caozuo">
              <van-button icon="edit" size="mini" color="green"></van-button>
              <van-button icon="delete" size="mini"></van-button>
              <van-button icon size="mini" color="#999">下架</van-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return { activeNames: ["1"], value: "" };
  }
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #000; */
  height: 1.333333rem;
  overflow: hidden;
}
.van-button {
  border: 0.013333rem solid rgba(201, 201, 201, 1);
  margin-left: 0.2rem;
}
.left {
  display: flex;
  align-items: center;
}
.van-collapse-item {
  position: relative !important;
  overflow: hidden;
  height: 0.666667rem;
}
.right {
  display: flex;
  justify-content: flex-start;
}
.van-cell-group {
  margin-right: 0.266667rem;
}
.van-collapse {
  margin-right: 0.266667rem;
  position: relative !important;
}
.right .van-button {
  margin-right: 0.533333rem;
}
.table {
  /* width: 90%; */
  border: 1px solid #999;
  margin: 0 0.2rem;
}
.table th {
  font-size: 0.266667rem;
  text-align: center;
  padding: 0.133333rem 0.3rem;
}
.table td {
  font-size: 0.186667rem;
  text-align: center;
  padding: 0.133333rem;
}
.caozuo {
}
</style>