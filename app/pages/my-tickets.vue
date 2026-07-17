<template>
  <div class="tickets-container">
    <h1>My Tickets</h1>

    <p>Total tickets: {{ tickets.length }}</p>

    <div v-if="tickets.length === 0">
      <p>No tickets have been created yet.</p>
    </div>

    <div v-else>
      <div v-for="ticket in tickets" :key="ticket.id">
        <h3>{{ ticket.ticketId }}</h3>

         <p><strong>Title:</strong> {{ ticket.title }}</p>

         <p><strong>Description:</strong> {{ ticket.description }}</p>

         <p><strong>Issue Type:</strong> {{ ticket.issueType }}</p>

         <p><strong>Priority:</strong> {{ ticket.priority }}</p>

         <p><strong>Status:</strong> {{ ticket.status }}</p>

         <p><strong>Created:</strong> {{ ticket.createdAt }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>
<script setup>
const tickets = useTickets()
</script>

<style scoped>
.tickets-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
}
</style>