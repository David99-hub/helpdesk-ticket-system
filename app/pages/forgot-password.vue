<template>
  <div class="forgot-container">
    <h1>Reset Password</h1>

    <p>Enter your email address to receive a password reset link.</p>

    <form @submit.prevent="handleReset">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>

      <button type="submit">Send Reset Link</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
definePageMeta({
    layout: false
  })
const email = ref('')
const message = ref('')

function handleReset() {
  message.value = 'A password reset link has been sent to ' + email.value + '.'
  email.value = ''
}
</script>
<style scoped>
.forgot-container {
  max-width: 500px;
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