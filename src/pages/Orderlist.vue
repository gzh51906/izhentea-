<template>
  <div class="orderlist">
    <!-- <h1>商品列表</h1> -->

    <div style="margin-bottom: 16px">
      <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">Reload</a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">{{`Selected ${selectedRowKeys.length} items`}}</template>
      </span>
    </div>

    <a-table
      :columns="columns"
      :dataSource="list"
      @change="onChange"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
    >
      <span slot="action" slot-scope="text">
        <a href="javascript:;" @click="del(text)">删除</a>

        <!-- <a-divider type="vertical" /> -->
        <!-- <a href="javascript:;" class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
        </a>-->
      </span>
    </a-table>
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
    title: "价格",
    dataIndex: "price"
    // sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "数量",
    dataIndex: "num"
  },
  {
    title: "运费",
    dataIndex: "pay"
  },
  {
    title: "商品总额",
    dataIndex: "shopcount"
  },
  {
    title: "订单总额",
    dataIndex: "ordercount"
  },
  {
    title: "下单时间",
    dataIndex: "time"
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

// const data = [];

// for (let i = 1; i < 10; i++) {
//   data.push({
//     key: i,
//     sort: i,
//     name: `普洱 - ${i}`,
//     price: 10 + i * 20,
//     num: i,
//     pay: i * 9,
//     time: "2018-11-1" + i,
//     shopcount: i * 10,
//     ordercount: i * 8,
//     time: "2019-9-1" + i
//   });
// }

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default {
  data() {
    return {
      // data,
      list: [],
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
    },
    async del(id) {
      let { data } = await this.$axios.delete(
        "http://localhost:8888/goods/orderdel",
        {
          data: { _id: id._id }
        }
      );

      let newdata = await this.$axios.get(
        "http://localhost:8888/goods/orderlist",
        {}
      );
      this.list = newdata.data.data;
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  async created() {
    // 获取数据库里的商品信息
    let {
      data: { data }
    } = await this.$axios.get("http://localhost:8888/goods/orderlist", {});
    this.list = data;
  },
  watch: {
    data(a, b) {
      console.log(a, b);
    }
  }
};
</script>
<style  scoped>
.orderlist {
  width: 100%;
  height: 1000px;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}
</style>