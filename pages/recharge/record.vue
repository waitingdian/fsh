<template>
  <div class="order">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <p class="p-t-25 f-fwb p-b-10">充值记录 <i class="el-icon-arrow-right"></i></p>
      <no-ssr>
        <el-form :inline="true" :model="rechargeForm" label-width="80px">
          <el-form-item label="开始日期">
            <el-date-picker
              v-model="rechargeForm.startDate"
              type="date"
              placeholder="选择开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束日期">
            <el-date-picker
              v-model="rechargeForm.endDate"
              type="date"
              placeholder="选择结束日期">
            </el-date-picker>
          </el-form-item>
          <br>
          <el-form-item label="订单号">
            <el-input v-model="rechargeForm.number" placeholder="请输入订单号"></el-input>
          </el-form-item>
          <el-form-item label="支付单号">
            <el-input v-model="rechargeForm.payId" placeholder="请输入支付单号"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="订单状态">
            <el-select v-model="rechargeForm.type" placeholder="请选择订单状态">
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
            label="金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付方式">
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付单号">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态">
            <template slot-scope="scope">
              <span v-for="item in typeList" v-if="item.value == scope.row.status">{{ item.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
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
    name: 'record',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '充值记录', link: ''},
        ],
        typeList: [
          {name: '全部',value: ''},
          {name: '待处理',value: 0},
          {name: '处理中',value: 1},
          {name: '退单中',value: 2},
          {name: '有异常',value: 3},
          {name: '补单中',value: 4},
          {name: '已更新',value: 5},
          {name: '已完成',value: 90}
        ],
        rechargeForm: {
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
