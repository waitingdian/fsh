<template>
  <div class="userinfo">
    <Nav :navs="navs"></Nav>
    <div class="info">
      <div class="left f-pr">
        <img class="avator" src="http://pic75.nipic.com/file/20150821/9448607_145742365000_2.jpg" alt="">
        <div class="detail fsh-f-222">
          <p>用户名: {{userInfo.name}}</p>
          <p>可用积分: {{userInfo.integral}}</p>
          <p>用户等级: {{userInfo.level}}</p>
          <p>我的用户数: {{userInfo.user}}</p>
        </div>
      </div>
      <div class="right">
        <p class="p-b-15">客服微信号</p>
        <img src="http://pic75.nipic.com/file/20150821/9448607_145742365000_2.jpg" alt="">
      </div>
    </div>
    <div class="news">
      <h6 class="f-fs18 p-b-20">最新公告</h6>
      <p class="p-b-10" v-for="item in newsList">
        <i class="iconfont">&#xe630;</i>{{ item.title }}
        <span class="p-l-25">{{item.date}}</span>
      </p>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'userinfo',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '个人中心', link: ''},
        ],
        userInfo: {
          name: '某某某',
          integral: 118,
          level: 'VIP1用户',
          user: 888
        },
        newsList: [
          {
            title: '公共哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈',
            date: '2019-05-05'
          },
          {
            title: '公共哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈',
            date: '2019-05-05'
          },
          {
            title: '公共哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈',
            date: '2019-05-05'
          }
        ]
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style lang="less">
  .info{
    display: flex;
    padding: 55px 115px 85px 50px;
    background-color: #fff;
    margin-bottom: 5px;
    .left{
      width: 435px;
      display: flex;
      &:after{
         position: absolute;
         top: 0;
         right: 0;
         content: '';
         width: 1px;
         height: 170px;
         background-color: #d6d6d6;
       }
      .avator{
        margin-right: 66px;
      }
      .detail{
        line-height: 2.2;
        font-size: 16px;
      }
    }
    .right{
      padding-left: 120px;
      text-align: center;
    }
    img{
      width: 145px;
      height: 145px;
    }
  }
  .news{
    height: 180px;
    padding: 15px 30px;
    background-color: #fff;
    p{
      line-height: 1.2;
    }
  }
</style>
