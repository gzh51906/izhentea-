
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
    <div class="list">
      <div style="margin-bottom: 16px">
        <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">Reload</a-button>
        <span style="margin-left: 8px">
          <template v-if="hasSelected">{{`Selected ${selectedRowKeys.length} items`}}</template>
        </span>
      </div>

      <a-table
        :columns="columns"
        :dataSource="data"
        @change="onChange"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      >
        <span slot="action">
          <a href="javascript:;">修改</a>
          <a-divider type="vertical" />
          <a href="javascript:;">删除</a>
          <a-divider type="vertical" />
          <a href="javascript:;">上架</a>
          <!-- <a-divider type="vertical" /> -->
          <!-- <a href="javascript:;" class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
          </a>-->
        </span>
      </a-table>
    </div>
  </div>
</template>


<script>
const columns = [
  {
    title: "#",
    dataIndex: "sort"
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "商品名称",
    dataIndex: "name"
  },
  {
    title: "分类",
    dataIndex: "kinds"
  },
  {
    title: "价格(原价)",
    dataIndex: "oldpirce"
  },
  {
    title: "价格(现价)",
    dataIndex: "currentpirce"
  },
  {
    title: "库存",
    dataIndex: "Stock"
  },
  {
    title: "状态",
    dataIndex: "status"
  },
  {
    title: "添加时间",
    dataIndex: "time"
  },
  {
    title: "操作",
    key: "操作",
    scopedSlots: { customRender: "action" }
  }
];

const data = [];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     time: "2018-11-11",
//     gender: "女",
//     profession: "作家",
//     sign: "user1",
//     scoped: 10,
//     city: "海南"
//   }]

for (let i = 1; i < 100; i++) {
  data.push({
    key: i,
    sort: i,
    name: `茶叶 - ${i}`,
    kinds: "赛亚人" + i,
    oldpirce: i * 10,
    currentpirce: i * 9,
    Stock: i * 100,
    status: i % 2 == 0 ? "上线" : "下线",
    time: "2019-9-1" + i
  });
}

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}
export default {
  data() {
    return {
      activeNames: ["1"],
      value: "",
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  methods: {
    onChange,

    //选择和操作
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
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

.list {
  width: 100%;
  height: 64%;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}
</style>

