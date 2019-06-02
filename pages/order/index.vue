<template>
  <div class="order">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <p class="p-t-25 f-fwb p-b-10">选择订单 <i class="el-icon-arrow-right"></i></p>
      <no-ssr>
        <el-form :inline="true" :model="searchForm" label-width="80px">
          <el-form-item label="开始日期" label-width="80px">
            <el-date-picker
              v-model="searchForm.periodStart"
              type="date"
              placeholder="开始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束日期" label-width="80px">
            <el-date-picker
              v-model="searchForm.periodEnd"
              type="date"
              placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="searchForm.type" placeholder="请选择订单状态">
              <el-option v-for="item in typeList"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="f-fr p-r-50">
            <el-button type="primary" @click="getOrderList">查询</el-button>
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
          current: 0,
          pageSize: 20,
          total: 0
        }
      }
    },
    methods: {
      goDetail (id) {
        // location.href = `order/detail?orderId=${id}`
        this.$router.push({path: 'order/detail', query: {orderId: id}})
      },
      handleCurrentChange (val) {
        console.log(val)
        this.pageInfo.current = val
      },
      getOrderList () {
        this.loading = true
        let periodStart = ''
        if (this.searchForm.periodStart) {
          periodStart = this.format(this.searchForm.periodStart, "yyyy-MM-dd hh:mm:ss")
        }
        let periodEnd = ''
        if (this.searchForm.periodEnd) {
          periodEnd = this.format(this.searchForm.periodEnd, "yyyy-MM-dd hh:mm:ss")
        }
        let queryString = `limit=${this.pageInfo.pageSize}&offset=${this.pageInfo.current}&status=${this.searchForm.status}&period_start=${periodStart}&period_end=${periodEnd}`
        this.$axios.$get(`${this.$store.state.baseUrl}order/list?${queryString}`).then((res) => {
          this.loading = false
          if (res.code == 200) {
            res.data.items.forEach((item) => {
              item.id = item.id.toString()
            })
            this.tableData = res.data.items || []
            this.pageInfo.total = res.data.page.cur_page
          } else {
            this.$message.error(res.msg)
          }
        }).catch(() => {
          this.loading = false
        })
      },
      format(date, fmt) {
        var that = new Date(date)
        var o = {
          "M+" : that.getMonth()+1,                 //月份
          "d+" : that.getDate(),                    //日
          "h+" : that.getHours(),                   //小时
          "m+" : that.getMinutes(),                 //分
          "s+" : that.getSeconds(),                 //秒
          "q+" : Math.floor((that.getMonth()+3)/3), //季度
          "S"  : that.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt)) {
          fmt=fmt.replace(RegExp.$1, (that.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
          if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
          }
        }
        return fmt;
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
