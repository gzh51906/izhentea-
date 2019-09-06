<template>
  <div class="userlist">
    <div class="top">
      <div class="left">
        <!-- 按钮 -->
        <van-button icon="add-o" type="primary" @click="goto">添加</van-button>
        <van-button icon="delete">按钮</van-button>
      </div>
    </div>

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
      <span slot="action" slot-scope="text">
        <a href="javascript:;">修改</a>
        <a-divider type="vertical" />
        <a href="javascript:;" @click="deleteData(text)">删除</a>
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
    title: "city",
    dataIndex: "city",
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
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

//数据删除
async function deleteData(data) {
  console.log(data.key);
  await this.$axios.get(
    `http://localhost:8888/goods/muserlist/${data.key}`,
    {}
  );

  let getdata = await this.$axios.get(
    "http://localhost:8888/goods/muserlist",
    {}
  );
  this.data = getdata.data.data;
}

export default {
  async created() {
    let getdata = await this.$axios.get(
      "http://localhost:8888/goods/muserlist",
      {}
    );

    this.data = getdata.data.data;
  },

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
    deleteData,
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
    goto() {
      this.$router.push({ name: "addusers" });
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
  height: 1000px;
  /* margin-top: 100px; */
  background: #ccc;
  overflow: hidden;
}

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
</style>