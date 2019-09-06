
<template>
  <div class="goodslist">
    <div class="top">
      <div class="left">
        <!-- 按钮 -->
        <van-button icon="add-o" type="primary" @click="goto('addgoods')">添加</van-button>
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
        <span slot="action" slot-scope="text">
          <a href="javascript:;" @click="goto('goodspatch')">修改</a>
          <a-divider type="vertical" />
          <a-button click="delete" @click="deleteDate(text)">删除</a-button>
          <a-divider type="vertical" />
          <a href="javascript:;">上架</a>
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
    // key: "sort",
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "商品名称",
    dataIndex: "goodstitle",
    key: "goodstitle"
  },
  {
    title: "分类",
    dataIndex: "kinds",
    key: "kinds",
    filters: [
      {
        text: "铁观音",
        value: "铁观音"
      },
      {
        text: "普洱茶",
        value: "普洱茶"
      },
      {
        text: "茉莉花茶",
        value: "茉莉花茶"
      },
      {
        text: "碧螺春",
        value: "碧螺春"
      },
      {
        text: "白茶",
        value: "白茶"
      },
      {
        text: "绿茶",
        value: "绿茶"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      // console.log(value, record);

      return record.kinds.indexOf(value) === 0;
    },
    sorter: (a, b) => a.kinds.length - b.kinds.length
  },
  {
    title: "商品价格(原价)",
    dataIndex: "goodsprice",
    key: "goodsprice",
    sorter: (a, b) => a.goodsprice - b.goodsprice
  },
  {
    title: "出售价格(现价)",
    dataIndex: "salepirce",
    key: "salepirce",
    sorter: (a, b) => a.salepirce - b.salepirce
  },
  {
    title: "库存",
    dataIndex: "stock",
    key: "stock"
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "添加时间",
    dataIndex: "time",
    key: "time",
    sorter: (a, b) => a.time - b.time
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

//数据删除
async function deleteDate(data) {
  console.log(data.key);

  await this.$axios.get(
    `http://localhost:8888/goods/mgoodslist/${data.key}`,
    {}
  );

  let getdata = await this.$axios.get(
    "http://localhost:8888/goods/mgoodslist",
    {}
  );
  this.data = getdata.data.data;
}

//商品上下架

export default {
  async created() {
    let getdata = await this.$axios.get(
      "http://localhost:8888/goods/mgoodslist",
      {}
    );
    this.data = getdata.data.data;
    // console.log(getdata.data.data);
  },
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
    deleteDate,
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
    },
    goto(name) {
      this.$router.push({ name });
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
  height: 1000px;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}
</style>

