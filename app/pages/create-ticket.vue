<template>
  <div class="ticket-container">
    <h1>Create Ticket</h1>

    <form @submit.prevent="handleCreateTicket">
      <div class="form-group">
        <label>Title</label>
        <input v-model="title" type="text" required />
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea v-model="description" required></textarea>
      </div>

      <div class="form-group">
        <label>Issue Type</label>
        <select v-model="issueType" required>
          <option value="">Select type</option>
         <option value="password-reset">Password Reset</option>
         <option value="account-access">Account Access</option>
         <option value="email">Email</option>
         <option value="hardware">Hardware</option>
         <option value="software">Software</option>
         <option value="network">Network</option>
         <option value="printer">Printer</option>
         <option value="security">Security</option>
         <option value="mobile-device">Mobile Device</option>
         <option value="finance-system">Finance System</option>
         <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
  <label>Priority</label>
  <select v-model="priority" required>
    <option value="">Select priority</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
    <option value="Critical">Critical</option>
  </select>
     </div>
      <button type="submit">Submit Ticket</button>
    </form>

    <p v-if="submitted">Ticket created successfully!</p>
  </div>
</template>

<script setup>
const title = ref('')
const description = ref('')
const issueType = ref('')    
const priority = ref('')
const submitted = ref(false)

const tickets = useTickets()
const router = useRouter()

function handleCreateTicket() {
  const newTicket = {
 id: Date.now(),
  ticketId: 'HD-' + Math.floor(1000 + Math.random() * 9000),
  title: title.value,
  description: description.value,
  issueType: issueType.value,
  priority: priority.value,
  status: 'Open',
  createdAt: new Date().toLocaleString()
}

  tickets.value.push(newTicket)

  console.log('New ticket:', newTicket)
  console.log('All tickets:', tickets.value)

  submitted.value = true

  // Clear the form
  title.value = ''
  description.value = ''
  issueType.value = ''
  priority.value = ''
  router.push('/my-tickets')
}
</script>

<style scoped>
.ticket-container {
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

input,
textarea,
select {
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