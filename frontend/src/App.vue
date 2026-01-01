<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/login" v-if="!isLoggedIn">登录</router-link>
      <router-link to="/students" v-if="isLoggedIn">学生管理</router-link> |
      <router-link to="/courses" v-if="isLoggedIn">课程管理</router-link> |
      <router-link to="/profile" v-if="isLoggedIn">个人中心</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
</script>

<style>
/* 添加样式 */
</style>
