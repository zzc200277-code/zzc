import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Students from '../views/Students.vue'
import AddStudent from '../views/AddStudent.vue'  // 添加的页面
import Courses from '../views/Courses.vue'  // 添加的页面
import Profile from '../views/Profile.vue'  // 添加的页面

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/students', name: 'students', component: Students },
  { path: '/add', name: 'add-student', component: AddStudent },  // 添加的页面路由
  { path: '/courses', name: 'courses', component: Courses },  // 添加的页面路由
  { path: '/profile', name: 'profile', component: Profile }  // 添加的页面路由
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
