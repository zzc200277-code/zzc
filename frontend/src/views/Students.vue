<template>
  <div v-if="isLoggedIn">
    <h1>学生管理</h1>
    <ul>
      <li>张三</li>
      <li>李四</li>
      <li>王五</li>
    </ul>
  </div>
  <div v-else>
    <p>请先登录</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
</script>

<style>
/* 添加样式 */
</style>
