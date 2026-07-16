<template>
  <div class="dashboard-container">
    <h1>IT Helpdesk Dashboard</h1>

    <p>Welcome!</p>

    <button @click="goToCreateTicket">Create Ticket</button>
    <button @click="goToMyTickets">My Tickets</button>
    <button @click="goToProfile">Profile</button>
    <button @click="goToSettings">Settings</button>
  </div>
</template>
<script setup>
const router = useRouter()

function goToCreateTicket() {
  router.push('/create-ticket')
}
function goToMyTickets() {
  router.push('/my-tickets')
}

function goToProfile() {
  router.push('/profile')
}
function goToSettings() {
  router.push('/settings')
}
</script>

<style scoped>
.dashboard-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
  text-align: center;
}

button {
  padding: 12px 20px;
  background: #1a2c3f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>