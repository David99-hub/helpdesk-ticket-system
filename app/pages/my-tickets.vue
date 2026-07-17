<template>
  <div class="tickets-container">
    <h1>My Tickets</h1>

    <p>Total tickets: {{ tickets.length }}</p>

    <div v-if="tickets.length === 0">
      <p>No tickets have been created yet.</p>
    </div>

    <div v-else>
      <div v-for="ticket in tickets" :key="ticket.id">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.description }}</p>
        <p>Issue Type: {{ ticket.issueType }}</p>
        <p>Priority: {{ ticket.priority }}</p>
        <p>Status: {{ ticket.status }}</p>
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