<template>
  <el-form  label-width="100px" class="demo-dynamic">
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
    >
      <el-input v-model="domain.value"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    },
    mounted () {
      setTimeout(() => {
        this.dynamicValidateForm.domains = [{
          value: '',
          key: Date.now()
        },
          {
            value: '',
            key: Date.now()
          },
          {
            value: '',
            key: Date.now()
          },
          {
            value: '',
            key: Date.now()
          }]
      }, 5000)
    }
  }
</script>
