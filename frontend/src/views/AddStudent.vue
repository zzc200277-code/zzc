<template>
  <div>
    <h1>添加学生</h1>
    <form @submit.prevent="addStudent">
      <input v-model="name" placeholder="姓名" required />
      <input v-model="age" type="number" placeholder="年龄" required />
      <input v-model="gender" placeholder="性别" required />
      <input v-model="major" placeholder="专业" required />
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const age = ref('');
const gender = ref('');
const major = ref('');
const router = useRouter();

const addStudent = () => {
  // 模拟添加学生
  console.log(`添加学生：${name.value}, 年龄: ${age.value}, 性别: ${gender.value}, 专业: ${major.value}`);
  router.push('/students');  // 提交后跳转到学生管理页面
};
</script>

<style>

</style>
