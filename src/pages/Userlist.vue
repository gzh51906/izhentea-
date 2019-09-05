<template>
  <div class="userlist">
    <!-- <h1>商品列表</h1> -->

    <!-- 全选框 -->
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
        <a href="javascript:;">下架</a>
        <!-- <a-divider type="vertical" /> -->
        <!-- <a href="javascript:;" class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
        </a>-->
      </span>
    </a-table>
  </div>
</template>
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "Jim",
        value: "Jim"
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green"
          },
          {
            text: "Black",
            value: "Black"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London"
      },
      {
        text: "New York",
        value: "New York"
      }
    ],
    filterMultiple: true,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
  },
  {
    title: "性别",
    dataIndex: "gender"
  },
  {
    title: "职业",
    dataIndex: "profession"
  },
  {
    title: "签名",
    dataIndex: "sign"
  },
  {
    title: "评分",
    dataIndex: "scord"
  },
  {
    title: "注册时间",
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
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     time: "2018-11-11",
//     gender: "男",
//     profession: "作家",
//     sign: "user1",
//     scoped: 10,
//     city: "海南"
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//     time: "2018-11-11",
//     gender: "女",
//     profession: "作家",
//     sign: "user1",
//     scoped: 10,
//     city: "海南"
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//     time: "2018-11-11",
//     gender: "男",
//     profession: "作家",
//     sign: "user1",
//     scoped: 10,
//     city: "海南"
//   }
// ];

for (let i = 1; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    time: "2018-11-1" + i,
    gender: "男",
    profession: "作家",
    sign: "user" + i,
    scoped: i,
    city: "海南"
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
.userlist {
  width: 100%;
  height: 84%;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}
</style>