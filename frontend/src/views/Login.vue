<template>
  <div>
    <h1>登录页面</h1>
    <input v-model="username" placeholder="请输入用户名" />
    <input v-model="password" type="password" placeholder="请输入密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  if (username.value === 'admin' && password.value === '123456') {
    // 登录成功后
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/students');  // 跳转到学生管理页面
  } else {
    alert('登录失败');
  }
};
</script>

<style>
/* 添加样式 */
</style>
