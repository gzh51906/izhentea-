<template>
  <div class="goodskinds">
    <!-- <h1>商品列表</h1> -->

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

for (let i = 1; i < 10; i++) {
  data.push({
    key: i,
    sort: i,
    name: `iphone - ${i}`,
    time: "2019-9-1" + i
  });
}

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default {
  data() {
    return {
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
<style  scoped>
.goodskinds {
  width: 100%;
  height: 84%;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}
</style>