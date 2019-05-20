<template>
  <div class="header">
    <div class="container-1200">
      <div class="right f-fr f-fs16">
        <div class="item p-r-35">
          <i class="iconfont f-fs28">&#xe649;</i>
          积分: {{integral}}
        </div>
        <div class="item p-r-35">
          <i class="iconfont f-fs24" style="font-size: 24px">&#xe604;</i>
          充值
        </div>
        <div class="item p-r-25">
          <i class="iconfont" style="font-size: 22px">&#xe696;</i>
          帮助中心
        </div>
        <div class="item p-r-20">
          <i class="iconfont" style="font-size: 44px">&#xe643;</i>
        </div>
      </div>
      <h1><i class="logo f-vam"></i> 上热门 <i class="iconfont">&#xe630;</i> 就用<span class="f-fwb">粉丝盒</span> </h1>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    components: {
    },
    data() {
      return {
        integral: '',  // 积分
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style lang="less">
  .header{
    background-color: #172099;
    height: 95px;
    line-height: 95px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 25px;
    .right{
      .item{
        float: left;
      }
    }
    .logo{
      margin-top: -8px;
      margin-right: 8px;
      display: inline-block;
      width: 54px;
      height: 40px;
      background-image: url('../static/image/samll_logo.png');
      background-size: cover;
    }
  }
</style>
