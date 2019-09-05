<template>
  <div class="top-box">
    <div class="top">
      <div class="top-left">
        <span>首页</span>
        <span>/</span>
        <span>商品管理</span>
        <span>/</span>
        <span>商品分类</span>
      </div>
      <div class="top-right">退出</div>
    </div>
    <div class="white"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.026667rem solid #999;
}
.top .top-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.133333rem 0;
  padding-left: 0.266667rem;
}
.top span {
  font-size: 0.226667rem;
  margin-left: 0.133333rem;
  color: #999;
}
.top-right {
  font-size: 0.186667rem;
  color: violet;
  margin-right: 0.266667rem;
}
.white {
  height: 0.533333rem;
}
</style>