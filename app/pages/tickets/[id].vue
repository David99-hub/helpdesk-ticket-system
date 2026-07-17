<template>
  <div class="ticket-details">
    <h1>Ticket Details</h1>

    <div v-if="ticket">
      <h2>{{ ticket.ticketId }}</h2>

      <p><strong>Title:</strong> {{ ticket.title }}</p>
      <p><strong>Description:</strong> {{ ticket.description }}</p>
      <p><strong>Issue Type:</strong> {{ ticket.issueType }}</p>
      <p><strong>Priority:</strong> {{ ticket.priority }}</p>
      <p><strong>Status:</strong> {{ ticket.status }}</p>
      <p><strong>Created:</strong> {{ ticket.createdAt }}</p>
    </div>

    <div v-else>
      <h2>Ticket not found.</h2>
    </div>
  </div>
</template>

<script setup>
const tickets = useTickets()

const route = useRoute()

const ticket = computed(() =>
  tickets.value.find(t => t.ticketId === route.params.id)
)
</script>

<style scoped>
.ticket-details {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
}
</style>