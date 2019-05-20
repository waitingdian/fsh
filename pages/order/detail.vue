<template>
  <div class="order-detail">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <div class="left">
        <p>订单号: </p>
        <p>下单数量: </p>
        <p>初始数量:</p>
        <p>状态:</p>
        <p>创建时间:</p>
      </div>
      <div>
        <p>视频ID:</p>
        <p>已刷数量</p>
        <p>当前数量</p>
        <p>备注</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'orderdetail',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '我的订单', link: '/order/list'},
          {title: '订单详情', link: ''},
        ],
        typeList: [
          {name: '全部',value: 1},
          {name: '快手点赞',value: 2},
          {name: '抖音评论',value: 3}
        ]
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style lang="less">
  .order-detail{
    background-color: #fff;
    .content{
      padding: 50px 105px;
      display: flex;
      color: #222;
      p{
        padding-bottom: 35px;
      }
      .left{
        width: 320px;
      }
    }
  }
</style>
