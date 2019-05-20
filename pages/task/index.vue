<template>
  <div class="task">
    <Nav :navs="navs"></Nav>
    <div class="content">
      <div>
        <div class="left f-pr">
          <no-ssr>
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
              <p class="p-t-25 f-fwb p-b-10">选择平台 <i class="el-icon-arrow-right"></i></p>
              <el-form-item label="选择平台">
                <el-select v-model="form.platform" placeholder="请选择平台">
                  <el-option v-for="item in platformList"
                             :key="item.value"
                             :label="item.name"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <p class="p-t-25 f-fwb p-b-10">选择平台 <i class="el-icon-arrow-right"></i></p>
              <el-form-item label="选择平台">
                <el-select v-model="form.platform" placeholder="请选择平台">
                  <el-option v-for="item in platformList"
                             :key="item.value"
                             :label="item.name"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </no-ssr>
        </div>
        <div class="right">
          <p class="f-fs18 p-b-10">内容简介</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
        </div>
      </div>
      <div class="p-t-30 p-l-15">
        <div class="bot-left f-pr">
          <p class="f-fs18 p-b-20">商品信息</p>
          <p class="p-b-10">商品编号: </p>
          <p class="p-b-10">余额: </p>
          <p class="p-b-10">单价: </p>
          <p class="p-b-10">简介: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis</p>
        </div>
        <div class="bot-right p-l-40">
          <p class="f-fs18 p-b-20">下单</p>
          <no-ssr>
            <el-form ref="form" :model="sizeForm" label-width="110px" size="mini">
              <el-form-item label="商品编号">
                <template></template>
              </el-form-item>
              <el-form-item label="抖音视频ID">
                <el-input v-model="sizeForm.name" placeholder="请输入抖音视频ID"></el-input>
              </el-form-item>
              <el-form-item label="视频短链接地址">
                <el-input v-model="sizeForm.name" placeholder="请输入视频短链接地址"></el-input>
              </el-form-item>
              <el-form-item label="单价">
                <el-input v-model="sizeForm.name" placeholder="请输入单价">
                  <template slot="append">元</template>
                </el-input>
              </el-form-item>
              <el-form-item label="下单数量">
                <el-input-number v-model="sizeForm.name" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </el-form-item>
              <el-form-item label="总价">
                <el-input v-model="sizeForm.name">
                  <template slot="append">元</template>
                </el-input>
              </el-form-item>
              <div class="f-tac">
                <el-button style="width: 60%" type="primary">下单</el-button>
              </div>
            </el-form>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  export default {
    name: 'login',
    components: {
      Nav
    },
    data() {
      return {
        navs: [
          {title: '发布任务', link: ''}
        ],
        platformList: [
          {name: 'pingtai1', value: 1},
          {name: 'pingtai2', value: 2},
          {name: 'pingtai3', value: 3}
        ],
        typeList: [
          {name: 'pingtai1', value: 1},
          {name: 'pingtai2', value: 2},
          {name: 'pingtai3', value: 3}
        ],
        form: {
          platform: '',
          type: ''
        },
        sizeForm: {}
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    mounted () {
    }
  }
</script>
<style lang="less">
  .task{
    background-color: #fff;
    .content{
      padding: 26px 32px;
      color: #222;
      >div{
        display: flex;
      }
      .left{
        width: 412px;
        height: 340px;
        border-bottom: 1px dotted #8d8b8c;
      }
      .left,.bot-left{
        &:after{
          position: absolute;
          top: 0;
          right: 0;
          content: '';
          width: 1px;
          height: 260px;
          background-color: #d6d6d6;
        }
      }
      .right{
        width: 420px;
        height: 340px;
        padding: 72px 45px;
        line-height: 1.5;
        border-bottom: 1px dotted #8d8b8c;
      }
      .bot-left{
        width: 397px;
        line-height: 1.5;
      }
      .bot-right{
        width: 405px;
      }
    }
  }
</style>
