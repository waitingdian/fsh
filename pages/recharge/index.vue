<template>
  <div class="recharge">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <div class="left">
        <p class="f-fwb p-b-20">用户名: {{ userName }}</p>
        <p class="p-b-50">当前积分: {{ integral }}</p>
        <p class="f-fwb p-b-15">充值说明及规则</p>
        <div>
          <p>第一步：扫码后直接输入您想要充值的金额</p>
          <p>第二步：支付宝充值备注填写xxxxx 未填写则不到账</p>
          <p>第三步：扫码后等待自动到账</p>
        </div>
      </div>
      <div id="qrcode">
        <img v-if="qrcodeObj" src="qrcodeObj" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'detail',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '充值中心', link: ''},
        ],
        userName: '哈哈哈',
        integral: 666,
        qrcodeObj: {}, // 二维码配置
      }
    },
    methods: {
      qrcode() {
        this.qrcodeObj = new QRCode('qrcode', {
          width: 132,
          height: 132,
          text: 'http://pic.58pic.com/58pic/13/16/16/19V58PICnbg_1024.jpg', // 二维码地址
          colorDark : "#000",
          colorLight : "#fff",
        })
        console.log(55555555555)
        console.log(this.qrcodeObj)
      },
    },
    mounted () {
      setTimeout(()=> {
        this.qrcode()
      },5000)
    }
  }
</script>
<style lang="less">
  .recharge{
    background-color: #fff;
    color: #222;
    .content{
      padding: 60px 50px 130px;
      display: flex;
      .left{
        width: 360px;
        text-align: center;
        div{
          text-align: left;
          line-height: 2;
        }
      }
    }
  }
</style>
