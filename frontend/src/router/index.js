import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Students from '../views/Students.vue'
import Courses from '../views/Courses.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  {
    path: '/',
    component: Home,
    redirect: '/students',
    children: [
      { path: 'students', component: Students },
      { path: 'courses', component: Courses },
      { path: 'profile', component: Profile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
