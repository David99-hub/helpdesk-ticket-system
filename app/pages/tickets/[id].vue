<template>
  <div class="ticket-details">
    <h1>Ticket Details</h1>

    <div v-if="ticket">

      <h2>{{ ticket.ticketId }}</h2>

      <!-- View Mode -->
      <div v-if="!isEditing">
        <p><strong>Title:</strong> {{ ticket.title }}</p>
        <p><strong>Description:</strong> {{ ticket.description }}</p>
        <p><strong>Issue Type:</strong> {{ ticket.issueType }}</p>
        <p><strong>Priority:</strong> {{ ticket.priority }}</p>
        <p><strong>Status:</strong> {{ ticket.status }}</p>
        <p><strong>Created:</strong> {{ ticket.createdAt }}</p>

        <button @click="isEditing = true">
          Edit Ticket
        </button>
      </div>

      <!-- Edit Mode -->
      <div v-else>

        <p>
          <strong>Title</strong><br>
          <input v-model="ticket.title">
        </p>

        <p>
          <strong>Description</strong><br>
          <textarea v-model="ticket.description"></textarea>
        </p>

        <p>
          <strong>Issue Type</strong><br>
          <select v-model="ticket.issueType">
            <option>Financial</option>
            <option>IT</option>
            <option>Password Reset</option>
            <option>Network</option>
            <option>Hardware</option>
            <option>Software</option>
            <option>Email</option>
            <option>Mobile Device</option>
          </select>
        </p>

        <p>
          <strong>Priority</strong><br>
          <select v-model="ticket.priority">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </p>

        <button @click="saveChanges">
          Save Changes
        </button>
        <button class="delete-btn" @click="deleteTicket">
           Delete Ticket
         </button>

      </div>

    </div>

    <div v-else>
      <h2>Ticket not found.</h2>
    </div>

  </div>
</template>

<script setup>
const tickets = useTickets()

const route = useRoute()

const router = useRouter()

const ticket = computed(() =>
  tickets.value.find(t => t.ticketId === route.params.id)
)
const isEditing = ref(false)
function saveChanges() {
  isEditing.value = false
  alert("Ticket updated successfully!")
}
function deleteTicket() {
  const confirmed = confirm("Are you sure you want to delete this ticket?")
    if (!confirmed) return
const index = tickets.value.findIndex(t => t.ticketId === route.params.id)
  if (index !== -1) {
    tickets.value.splice(index, 1)
  }
  alert("Ticket deleted successfully!")
    router.push('/my-tickets')
}
</script>

<style scoped>
.ticket-details {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
}
.delete-btn {
  background: #dc2626;
  color: white;
  margin-left: 10px;
}

.delete-btn:hover {
  background: #b91c1c;
}
</style>