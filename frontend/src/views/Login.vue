<template>
  <div class="card">
    <h2>账号登录</h2>

    <input v-model="username" placeholder="账号" />
    <input v-model="password" type="password" placeholder="密码" />

    <button @click="login">登录</button>

    <div class="switch" @click="goRegister">
      没有账号？注册
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    alert('请先注册')
    return
  }

  if (
    username.value === user.username &&
    password.value === user.password
  ) {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('currentUser', user.username)
    router.push('/')
  } else {
    alert('账号或密码错误')
  }
}

const goRegister = () => {
  router.push('/register')
}
</script>
