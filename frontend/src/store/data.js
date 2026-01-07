import { ref } from 'vue'

/* 课程数据 */
export const courses = ref([
  { id: 1, name: '高等数学' },
  { id: 2, name: '大学英语' },
  { id: 3, name: '计算机基础' }
])

/* 学生数据（重点：courses 是数组，存课程 id） */
export const students = ref([
  {
    id: 1,
    name: '张三',
    courses: [1, 2]
  },
  {
    id: 2,
    name: '李四',
    courses: [2]
  },
  {
    id: 3,
    name: '王五',
    courses: [1, 3]
  }
])
