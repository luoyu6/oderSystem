<template>
    <div class="login-wrap">
      <el-form  label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username"  auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"  v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;"  @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
</script>

<style>
</style>