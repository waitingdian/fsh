<template>
  <div class="order">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <p class="p-t-25 f-fwb p-b-10">选择订单 <i class="el-icon-arrow-right"></i></p>
      <no-ssr>
        <el-form :inline="true" :model="searchForm" label-width="80px">
          <el-form-item label="日期" label-width="50px">
            <DateRangePicker
              :width="150"
              :startTime.sync="searchForm.periodStart"
              :endTime.sync="searchForm.periodEnd"
              ref="dateRangerPicker">
            </DateRangePicker>
          </el-form-item>
          <el-form-item label="订单类型">
            <el-select v-model="searchForm.type" placeholder="请选择订单类型">
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
          v-loading="loading"
          style="width: 100%">
          <el-table-column
            prop="oid"
            label="订单号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="gname"
            show-overflow-tooltip
            label="名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="status"
            label="订单状态"
            width="100">
          </el-table-column>
          <el-table-column
            prop="num"
            label="下单数量">
          </el-table-column>
          <el-table-column
            prop="nowNum"
            label="当前数量">
          </el-table-column>
          <el-table-column
            prop="startNum"
            label="初始数量">
          </el-table-column>
          <el-table-column
            prop="tnum"
            label="退单数量">
          </el-table-column>
          <el-table-column
            prop="orderPrice"
            label="下单金额">
          </el-table-column>
          <el-table-column
            prop="createdTime"
            label="下单时间"
            width="160">
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
            class="f-tac p-t-25 p-b-20"
            background
            layout="prev, pager, next"
            :total="pageInfo.total"
            :page-size="pageInfo.pageSize"
            @current-change = "handleCurrentChange">
          </el-pagination>
        </div>
      </no-ssr>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  import DateRangePicker from '@/components/DateRangePicker'
  export default {
    name: 'order',
    components: {
      Nav,
      DateRangePicker
    },
    data() {
      return {
        navs: [
          {title: '我的订单', link: ''},
        ],
        loading: false,
        typeList: [
          {name: '全部',value: 1},
          {name: '快手点赞',value: 2},
          {name: '抖音评论',value: 3}
        ],
        searchForm: {
          type: '',
          number: '',
          videoId: ''
        },
        searchForm: {
          status: 0,
          periodStart: '',
          periodEnd: ''
        },
        tableData: [],
        pageInfo: {
          current: 1,
          pageSize: 20,
          total: 0
        }
      }
    },
    methods: {
      goDetail (id) {
        location.href = `order/detail?orderId=${id}`
        // this.$router.push(`order/detail?orderId=${id}`)
      },
      handleCurrentChange (val) {
        console.log(val)
        this.pageInfo.current = val
      },
      getOrderList () {
        this.loading = true
        let queryString = `limit=${this.pageInfo.pageSize}&offset=${this.pageInfo.current}&status=${this.searchForm.status}&period_start=${this.searchForm.periodStart}&period_end=${this.searchForm.periodEnd}`
        this.$axios.$get(`${this.$store.state.baseUrl}order/list?${queryString}`).then((res) => {
          this.loading = false
          if (res.code == 200) {
            this.tableData = res.data.items || []
            this.pageInfo.total = res.data.page.cur_page
          } else {
            this.$message.error(res.msg)
          }
        }).catch(() => {
          this.loading = false
        })
      }
    },
    mounted () {
      this.getOrderList()
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
