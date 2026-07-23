<template>
  <div class="signup-container">
    <h1>Create Account</h1>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label>Full Name</label>
        <input v-model="name" type="text" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" required />
        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
 definePageMeta({
    layout: false
  })
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()
function handleSignup() {
 if (password.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }

  console.log('Signing up:', name.value, email.value, password.value)
  
  alert("Account created successfully!")

  const users = JSON.parse(localStorage.getItem("users") || "[]")

users.push({
  name: name.value,
  email: email.value,
  password: password.value,
  role: "Customer"
})

localStorage.setItem("users", JSON.stringify(users))

   router.push('/login') 
}
</script>

<style scoped>
.signup-container {
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
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>