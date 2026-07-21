<template>
  <div class="home-container">
    <h1>IT Helpdesk Portal</h1>

    <p>Welcome to the IT Helpdesk System.</p>

    <button @click="goToLogin">Login</button>
    <button @click="goToSignup">Sign Up</button>
  </div>
</template>

<script setup>
 definePageMeta({
    layout: false
  })
const router = useRouter()

function goToLogin() {
  router.push('/login')
}

function goToSignup() {
  router.push('/signup')
}
</script>

<style scoped>
.home-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
  text-align: center;
}

button {
  display: block;
  width: 200px;
  margin: 16px auto;
  padding: 12px;
  background: #1a2c3f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>