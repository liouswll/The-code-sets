<template>
  <div class="home">
    <div class="homeImg">
      <img  class="homeImgI"  src="@/img/banner.jpg" />
      <div class="box">
        <div class="text">能耗系统后台管理</div>
        <div class="boxOne">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="用户名" prop="user">
              <el-input v-model.number="ruleForm.user" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="boxOn">

        </div>
        <div class="boxTwo">
          <p class="boxRegistered">已有账号?
            <router-link to='/' class="registeredTxt">立即登录.</router-link>
          </p>
          <p class="boxForget">忘记密码?
            <router-link to='/registerPage' class="forgetTxt">发送邮件.</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"registerPage",
    data() {
      var checkUser = (rule, value, callback) => {
        if (value==='') {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          user: '',
          checkPass:''

        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: checkUser, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
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
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/registerPage.less";
</style>
