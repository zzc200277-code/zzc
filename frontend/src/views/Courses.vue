<template>
  <div class="card">
    <h2>课程管理</h2>

    <!-- 新增课程 -->
    <div class="add-box">
      <input v-model="newCourse" placeholder="课程名称" />
      <button @click="addCourse">添加</button>
    </div>

    <!-- 课程列表 -->
    <ul class="list">
      <li v-for="(course, index) in courses" :key="course.id">
        <span>{{ course.name }}</span>
        <button class="del" @click="removeCourse(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  { id: 1, name: '高等数学' },
  { id: 2, name: '大学英语' },
  { id: 3, name: '计算机基础' }
])

const newCourse = ref('')

const addCourse = () => {
  if (!newCourse.value) {
    alert('请输入课程名称')
    return
  }

  courses.value.push({
    id: Date.now(),
    name: newCourse.value
  })

  newCourse.value = ''
}

const removeCourse = (index) => {
  courses.value.splice(index, 1)
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
  border-radius: 6px;
  cursor: pointer;
}
</style>
