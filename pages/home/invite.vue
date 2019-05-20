<template>
  <div class="invite">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <no-ssr>
        <div>
          <el-button @click="show='invite'" plain>推广链接 <i class="el-icon-arrow-right el-icon-arrow-right"></i></el-button>
          <el-button @click="show='detail'" plain>我邀请的好友 <i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
        <div v-show="show =='invite'" class="link">
          <el-table
            class="p-t-10"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
        <div class="detail">
          <p class="p-t-30">以下链接是您的推广链接，你可以通过微信，QQ，微博等平台进行推广，通过该链接访问的人，注册后都属于您的用户
            您将获得丰厚的奖励</p>
          <p class="p-t-25 f-fwb p-b-10">推广链接 <i class="el-icon-arrow-right"></i></p>
          <el-input style="width: 405px"></el-input>
          <div class="p-t-10 p-b-50">
            <el-button type="primary">点击复制</el-button>
          </div>
          <p>推广10个好友注册充值，即可获得一年<span class="fsh-f-c f-fs16">VIP会员</span>资格</p>
        </div>
      </no-ssr>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'invite',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '邀请有礼', link: ''}
        ],
        show: 'invite',
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
    methods: {},
    mounted () {
    }
  }
</script>
<style lang="less">
  .invite{
    background-color: #fff;
    .content{
      padding: 30px 95px;
    }
    .detail{
      color: #333;
      padding-bottom: 90px;
    }
  }
</style>
