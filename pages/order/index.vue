<template>
  <div class="order">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <p class="p-t-25 f-fwb p-b-10">推广链接 <i class="el-icon-arrow-right"></i></p>
      <no-ssr>
        <el-form :inline="true" :model="orderForm" label-width="80px">
          <el-form-item label="订单号">
            <el-input v-model="orderForm.number" placeholder="请输入订单号"></el-input>
          </el-form-item>
          <el-form-item label="视频id">
            <el-input v-model="orderForm.videoId" placeholder="请输入视频id"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="订单类型">
            <el-select v-model="orderForm.type" placeholder="请选择订单类型">
              <el-option v-for="item in typeList"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="f-fr p-r-50">
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table
          class="p-t-10"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="订单号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="视频ID"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="下单数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="已刷数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="初始数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="当前数量">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建时间">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="goDetail(scope.row.id)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </no-ssr>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'order',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '我的订单', link: ''},
        ],
        typeList: [
          {name: '全部',value: 1},
          {name: '快手点赞',value: 2},
          {name: '抖音评论',value: 3}
        ],
        orderForm: {
          type: '',
          number: '',
          videoId: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      goDetail (id) {
        this.$router.push(`order/detail?orderid=${id}`)
      }
    },
    mounted () {
    }
  }
</script>
<style lang="less">
  .order{
    background-color: #fff;
    .content{
      padding-left: 35px;
    }
    .el-input{
      width: 240px;
    }
  }
</style>
