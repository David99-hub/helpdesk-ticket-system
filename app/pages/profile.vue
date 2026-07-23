<template>
  <div class="profile-container">

    <h1>My Profile</h1>

    <div class="profile-info">

      <label>Name</label>
      <input
        v-model="name"
        :disabled="!isEditing"
      />

      <label>Email</label>
      <input
        v-model="email"
        :disabled="!isEditing"
      />

      <label>Role</label>
      <input
        v-model="role"
        disabled
      />

    </div>

    <button
      v-if="!isEditing"
      @click="isEditing = true"
    >
      Edit Profile
    </button>

    <button
      v-else
      @click="saveProfile"
    >
      Save Changes
    </button>

    <p
      v-if="message"
      class="success"
    >
      {{ message }}
    </p>

  </div>
</template>

<script setup>
const name = ref("David")
const email = ref("david@example.com")
const role = ref("Customer")

const message = ref("")
const isEditing = ref(false)

onMounted(() => {
  const saved = localStorage.getItem("profile")

  if (saved) {
    const profile = JSON.parse(saved)

    name.value = profile.name
    email.value = profile.email
    role.value = profile.role
  }
})

function saveProfile() {
  localStorage.setItem(
    "profile",
    JSON.stringify({
      name: name.value,
      email: email.value,
      role: role.value
    })
  )

  message.value = "✅ Profile updated successfully!"
  isEditing.value = false
}
</script>

<style scoped>

.profile-container {
  width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.profile-container h1 {
  color: white;
  margin-bottom: 25px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.profile-info label {
  color: #60a5fa;
  font-weight: bold;
}

.profile-info input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #334155;
  background: #1e293b;
  color: white;
}

.profile-info input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.success {
  margin-top: 15px;
  color: #22c55e;
  font-weight: bold;
}

</style>