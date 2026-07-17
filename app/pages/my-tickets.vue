<template>
  <div class="tickets-container">
    <h1>My Tickets</h1>

    <div class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="Search by Ticket ID or Title..."
      />
    </div>

    <div class="filter-box">
      <label>Filter:</label>

      <select v-model="filter">
        <option>All</option>
        <option>Open</option>
        <option>Resolved</option>
        <option>Critical</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>

    <p>Total tickets: {{ tickets.length }}</p>

<div v-if="filteredTickets.length === 0">
  <p>No tickets have been created yet.</p>
</div>

<div v-else>
  <div v-for="ticket in filteredTickets" :key="ticket.id">
    <NuxtLink :to="`/tickets/${ticket.ticketId}`">
      <h3>{{ ticket.ticketId }}</h3>
    </NuxtLink>

    <p><strong>Title:</strong> {{ ticket.title }}</p>
    <p><strong>Description:</strong> {{ ticket.description }}</p>
    <p><strong>Issue Type:</strong> {{ ticket.issueType }}</p>
    <p><strong>Priority:</strong> {{ ticket.priority }}</p>
    <p><strong>Status:</strong> {{ ticket.status }}</p>
    <p><strong>Created:</strong> {{ ticket.createdAt }}</p>

    <button
      v-if="ticket.status === 'Open'"
      @click="resolveTicket(ticket.id)"
    >
      Mark as Resolved
    </button>

    <hr>
  </div>
 </div>
  </div>
</template>
<script setup>
const tickets = useTickets()

const search = ref('')

const filter = ref('All')

const filteredTickets = computed(() => {
  return tickets.value.filter(ticket => {
    const matchesSearch =
      ticket.ticketId.toLowerCase().includes(search.value.toLowerCase()) ||
      ticket.title.toLowerCase().includes(search.value.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.value.toLowerCase())

    const matchesFilter =
      filter.value === 'All' ||
      ticket.status === filter.value ||
      ticket.priority === filter.value

    return matchesSearch && matchesFilter
  })
})

function resolveTicket(ticketId) {
  const ticket = tickets.value.find(t => t.id === ticketId)
  if (ticket) {
    ticket.status = 'Resolved'
    console.log(`Ticket ${ticket.ticketId} marked as resolved.`)
  }
}
</script>

<style scoped>
.tickets-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 24px;
}
.search-box {
  margin: 20px 0;
}

.search-box input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
.filter-box {
  margin: 20px 0;
}
.filter-box select {
  padding: 8px;
  margin-left: 10px;
}

</style>