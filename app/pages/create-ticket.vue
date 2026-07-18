<template>
  <div class="ticket-container">
    <h1>Create Ticket</h1>

    <p class="page-subtitle">
        Submit a support request and we'll help you resolve it as soon as poosible.
        </p>>


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
  max-width: 650px;
  margin: 50px auto;
  padding: 35px;

  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,0.12);

  border-radius: 18px;

  box-shadow: 0 15px 30px rgba(0,0,0,0.35);
} 

h1 {
  color: white;
  font-size: 34px;
  margin-bottom: 5px;
}

.page-subtitle {
  color: #cbd5e1;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  color: #e2e8f0;
  font-weight: bold;
  margin-bottom: 6px;
  display: block;
}
input,
textarea,
select {
  width: 100%;
  padding: 12px;

  background: rgba(255,255,255,0.08);

  color: white;

  border: 1px solid rgba(255,255,255,0.15);

  border-radius: 10px;

  box-sizing: border-box;

  outline: none;

  transition: .3s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #3b82f6;
}

button {
  width: 100%;
  padding: 14px;

  background: #2563eb;

  color: white;

  border: none;

  border-radius: 10px;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  transition: .3s;
}

button:hover {
  background: #1d4ed8;
}

option {
  background: #08225c;
  color: white;
}
</style>