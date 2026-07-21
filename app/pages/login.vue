<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>

      <button type="submit">Login</button>
    </form>
    <p>
      <a href="#" @click.prevent="goToForgotPassword">
       Forgot Password?
      </a>
    </p>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false
  })
const email = ref('')
const password = ref('')

const router = useRouter()

function handleLogin() {
  console.log('Logging in:', email.value, password.value)

  alert("Login successful!")

  router.push('/dashboard')
}

function goToForgotPassword() {
  router.push('/forgot-password')
}
</script>
<style scoped>
.login-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>