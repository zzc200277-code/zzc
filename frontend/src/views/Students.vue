<template>
  <div class="card">
    <h2>学生管理</h2>

    <!-- 新增学生 -->
    <div class="add-box">
      <input v-model="newName" placeholder="姓名" />
      <input v-model="newAge" placeholder="年龄" />
      <button @click="addStudent">添加</button>
    </div>

    <!-- 学生列表 -->
    <ul class="list">
      <li v-for="(stu, index) in students" :key="stu.id">
        <span>{{ stu.name }}（{{ stu.age }}岁）</span>
        <button class="del" @click="removeStudent(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 初始学生（固定有）
const students = ref([
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 }
])

const newName = ref('')
const newAge = ref('')

const addStudent = () => {
  if (!newName.value || !newAge.value) {
    alert('请输入完整信息')
    return
  }

  students.value.push({
    id: Date.now(),
    name: newName.value,
    age: newAge.value
  })

  newName.value = ''
  newAge.value = ''
}

const removeStudent = (index) => {
  students.value.splice(index, 1)
}
</script>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 600px;
}

.add-box {
  margin-bottom: 20px;
}

.add-box input {
  margin-right: 10px;
  padding: 6px;
}

.add-box button {
  padding: 6px 12px;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.del {
  width: 80px;
  height: 40px;
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 1px;
  cursor: pointer;
}
</style>
