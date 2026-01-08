<template>
  <div class="card">
    <h2>个人中心</h2>
    <p>当前登录用户：{{ username }}</p>

    <button class="logout" @click="handleLogout">
      退出登录
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// ✅ 和登录时保存的字段一致
const username = localStorage.getItem('currentUser') || '未登录'

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('currentUser')

  router.replace('/login')
}
</script>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
}
.logout {
  margin-top: 20px;
  padding: 8px 16px;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 6px;
}
</style>
