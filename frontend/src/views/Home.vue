<template>
  <div class="layout">
    <nav class="nav">
      <span class="logo">学生管理系统</span>
      <div class="menu">
        <router-link to="/students">学生管理</router-link>
        <router-link to="/courses">课程管理</router-link>
        <router-link to="/profile">个人中心</router-link>
      </div>
    </nav>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  height: 60px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.menu a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

.menu a.router-link-active {
  border-bottom: 2px solid white;
}

.content {
  flex: 1;
  padding: 20px;
  background: #f5f7fa;
}
</style>
