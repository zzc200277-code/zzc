<template>
  <div class="card">
    <h2>用户注册</h2>

    <input v-model="username" placeholder="账号" />
    <input v-model="password" type="password" placeholder="密码" />
    <input v-model="nickname" placeholder="昵称" />

    <button @click="register">注册</button>

    <div class="switch" @click="goLogin">
      已有账号？去登录
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const nickname = ref('')
const router = useRouter()

const register = () => {
  if (!username.value || !password.value) {
    alert('信息不能为空')
    return
  }

  localStorage.setItem(
    'user',
    JSON.stringify({
      username: username.value,
      password: password.value,
      nickname: nickname.value
    })
  )

  alert('注册成功，请登录')
  router.push('/login')
}

const goLogin = () => {
  router.push('/login')
}
</script>
