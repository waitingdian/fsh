<template>
  <div class="register">
    <div class="register-container" v-loading="loading">
      <h2 class="f-tac fsh-f-222 f-fs32 f-fwb">注册</h2>
      <ul v-loading="loading">
        <li>
          <span class="f-fs16">邀请码</span>
          <input type="text" @change="inviteError = ''" v-model="registerForm.invite_code" placeholder="请输入邀请码">
          <p class="error-txt" maxlength="12" v-show="inviteError">{{ inviteError }}</p>
        </li>
        <li>
          <span class="f-fs16">用户名</span>
          <input type="text" @change="nameError = ''" maxlength="50" v-model="registerForm.username" placeholder="请输入用户名">
          <p class="error-txt" v-show="nameError">{{ nameError }}</p>
        </li>
        <li>
          <span class="f-fs16">手机号</span>
          <input type="text" @change="phoneError = ''" maxlength="11" v-model="registerForm.phone" placeholder="请输入手机号">
          <p class="error-txt" v-show="phoneError">{{ phoneError }}</p>
        </li>
        <li>
          <span class="f-fs16">验证码</span>
          <input style="width: 190px"
                 @change="veriError = ''"
                 v-model="registerForm.verification_code"
                 maxlength="6"
                 placeholder="请输入验证码">
          <ActhCodeBtn ref="passwordAuthBtn" :phone="registerForm.phone" @click="getVerCode"></ActhCodeBtn>
          <p class="error-txt" v-show="veriError">{{ veriError }}</p>
        </li>
        <li>
          <span class="f-fs16">密码</span>
          <input type="text" @change="passwordError1 = ''" maxlength="16" v-model="registerForm.password" placeholder="请输入登录密码">
          <p class="error-txt" v-show="passwordError1">{{ passwordError1 }}</p>
        </li>
        <li>
          <span class="f-fs16">确认密码</span>
          <input type="text" @change="passwordError2 = ''" maxlength="16" v-model="registerForm.password2" placeholder="请再输一次">
          <p class="error-txt" v-show="passwordError2">{{ passwordError2 }}</p>
        </li>
        <no-ssr>
          <el-button style="width: 100%;margin-top:40px;" @click="register" type="primary">注册</el-button>
        </no-ssr>
        <p class="p-t-20 f-tar">已有账号? <span class="fsh-f-c f-csp">登录&#xe70b;</span></p>
      </ul>
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  import ActhCodeBtn from '@/components/acthCodeBtn'
  export default {
    name: 'register',
    components: {
      Nav,
      ActhCodeBtn
    },
    data() {
      return {
        registerForm: {},
        loading: false,
        text: '获取验证码',
        userInviteCode: '',
        inviteError: '',
        nameError: '',
        phoneError: '',
        veriError: '',
        passwordError1: '',
        passwordError2: ''
      }
    },
    methods: {
      getVerCode () {
        this.$axios.$get(`${this.$store.state.baseUrl}sms/send?phone=${this.registerForm.phone}`).then((res) => {
          if (res.code == '200') {
            this.$mesage.success("发送成功,请注意查收")
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      register () {
        if (!this.registerForm.invite_code) {
          this.inviteError = '邀请码不能为空'
          return false
        }
        if (!this.registerForm.username) {
          this.nameError = '用户名不能为空'
          return false
        }
        if (!this.registerForm.phone) {
          this.phoneError = '手机号不能为空'
          return false
        }
        if (this.registerForm.phone.length != 11) {
          this.phoneError = '请输入11位手机号'
          return false
        }
        if (!this.registerForm.verification_code || this.registerForm.verification_code.length < 6) {
          this.veriError = '请输入6位验证码'
          return false
        }
        if (!this.registerForm.password) {
          this.passwordError1 = '密码不能为空'
          return false
        }
        if (this.registerForm.password.length < 6) {
          this.passwordError1 = '请输入6-16位密码'
          return false
        }
        if (!this.registerForm.password2) {
          this.passwordError2 = '请再输一次'
          return false
        }
        if (this.registerForm.password != this.registerForm.password2) {
          this.passwordError2 = '两次输入密码不一致'
          return false
        }
        let params = {
          phone: this.registerForm.phone,
          username: this.registerForm.username,
          password: this.registerForm.password,
          verification_code: this.registerForm.verification_code,
          invite_code: this.registerForm.invite_code
        }
        var reg = new RegExp("^\d$");
        if (reg.test(this.registerForm.userInviteCode)) {
          params.user_invite_code = this.registerForm.userInviteCode
        }
        this.loading = true
        this.$axios.$post(`${this.$store.state.baseUrl}user/register`, params).then((res) => {
          this.loading = false
          if (res.code ==200) {
            this.$messge.success('注册成功')
            setTimeout(() => {
              this.$router.replace('/home')
            })
          } else {
            this.$message.error(res.msg)
          }
        }).catch(() => {
          this.loading = false
        })
      }
    },
    mounted () {
      this.userInviteCode = this.$route.query.user_invite_code
    }
  }
</script>
<style lang="less">
  .register-container{
    position: absolute;
    z-index: 2;
    top: 7%;
    right: 10%;
    padding: 35px;
    width: 450px;
    height: 780px;
    min-height: 430px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #f8f8f8;
    background-color: #fff;
    li{
      position: relative;
      padding: 18px 10px 8px 0;
      border-bottom: 1px solid #ecebeb;
      input{
        width: 300px;
        border: none;
        outline: none;
        padding: 10px 30px;
      }
      .error-txt{
        position: absolute;
        left: 0;
        bottom: -17px;
        color: #ff0000;
        font-size: 12px;
      }
    }
  }
</style>
