<template>
  <div class="tickets-container">
    <h1>My Tickets</h1>

<p class="page-subtitle">
  View, search and manage all your submitted support tickets.
</p>

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
  <div
  v-for="ticket in filteredTickets"
  :key="ticket.id"
  class="ticket-card"
>
    <div class="ticket-header">

  <NuxtLink :to="`/tickets/${ticket.ticketId}`">
    <h3>{{ ticket.ticketId }}</h3>
  </NuxtLink>

  <span
    class="badge"
    :class="ticket.priority.toLowerCase()"
  >
    {{ ticket.priority }}
  </span>

</div>
    <p><strong>Title:</strong> {{ ticket.title }}</p>
    <p><strong>Description:</strong> {{ ticket.description }}</p>
    <p><strong>Issue Type:</strong> {{ ticket.issueType }}</p>
    <p><strong>Customer:</strong> {{ ticket.customerName }}</p>
    <p><strong>Email:</strong> {{ ticket.customerEmail }}</p>
   
  <span
    class="badge"
    :class="ticket.status.toLowerCase()"
  >
    {{ ticket.status }}
  </span>


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

h1 {
  color: white;
  font-size: 34px;
  margin-bottom: 5px;
}

.page-subtitle {
  color: #cbd5e1;
  margin-bottom: 30px;
}
.search-box {
  margin: 20px 0;
}

.search-box input {
  width: 100%;
  padding: 14px;

  background: rgba(255,255,255,0.08);

  color: white;

  border: 1px solid rgba(255,255,255,0.12);

  border-radius: 10px;

  outline: none;

  box-sizing: border-box;
}

.search-box input::placeholder {
  color: #d6dfec;
}

.search-box input:focus {
  border-color: #3b82f6;
}
.filter-box {
  margin: 20px 0;
}
.filter-box select {
  padding: 8px;
  margin-left: 10px;
}

.ticket-card {
  background: rgba(255,255,255,0.08);

  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,.12);

  border-radius: 18px;

  padding: 25px;

  margin-bottom: 25px;

  transition: .3s;
}

.ticket-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 15px 25px rgba(0,0,0,.35);
}

.badge {

  display:inline-block;

  padding:5px 12px;

  border-radius:20px;

  font-size:13px;

  font-weight:bold;

  color:white;
}

.low{
  background:#043316;
}

.medium{
  background:#eab308;
}

.high{
  background:#f97316;
}

.critical{
  background:#dc2626;
}

.open{
  background:#2563eb;
}

.resolved{
  background:#16a34a;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.ticket-header h3 {
  margin: 0;
  color: #60a5fa;
}

</style>