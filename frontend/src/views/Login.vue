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

    // ✅ 正确跳转方式
    router.replace('/')
  } else {
    alert('账号或密码错误')
  }
}

const goRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.card {
  width: 360px;
  margin: 100px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
}
button {
  width: 100%;
  padding: 8px;
}
.switch {
  margin-top: 10px;
  color: #409eff;
  cursor: pointer;
  text-align: center;
}
</style>
