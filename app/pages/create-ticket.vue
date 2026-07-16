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
          <option value="financial">Financial</option>
          <option value="it">IT</option>
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
const submitted = ref(false)

function handleCreateTicket() {
  const newTicket = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    issueType: issueType.value,
    status: 'not resolved'
  }

  console.log('New ticket:', newTicket)
  submitted.value = true
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
input, textarea, select {
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