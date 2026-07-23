<template>
  <div class="dashboard-container">
    <h1>IT Helpdesk Dashboard</h1>

  <p>Welcome!</p>

<div class="stats-grid">
  <div class="stat-card">
  <div class="icon">📋</div>
  <h3>Total Tickets</h3>
  <p>{{ totalTickets }}</p>
</div>

  <div class="stat-card">
  <div class="icon">🟢</div>
  <h3>Open Tickets</h3>
  <p>{{ openTickets }}</p>
</div>

 <div class="stat-card">
  <div class="icon">✅</div>
  <h3>Resolved Tickets</h3>
  <p>{{ resolvedTickets }}</p>
</div>

  <div class="stat-card">
    <div class="icon">⚠️</div>
    <h3>High Priority</h3>
    <p>{{ highPriorityTickets }}</p>
  </div>
  </div>
  </div>


</template>
<script setup>
const router = useRouter()

const tickets = useTickets()

const totalTickets = computed(() => tickets.value.length)

const openTickets = computed(() =>
  tickets.value.filter(ticket => ticket.status === 'Open').length
)

const resolvedTickets = computed(() =>
  tickets.value.filter(ticket => ticket.status === 'Resolved').length
)

const highPriorityTickets = computed(() =>
  tickets.value.filter(ticket =>
    ticket.priority === 'High' ||
    ticket.priority === 'Critical'
  ).length
)

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
  max-width: 1000px;
  margin: 40px auto;
  padding: 40px;
  text-align: center;
  border-radius: 20px;

  background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
  color: #f8fafc;

  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

button {
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  background: #03264d;
  color: rgb(218, 211, 211);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #27475d;
  transform: translateY(-2px);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
}

.stat-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,0.15);

  border-radius: 18px;
  padding: 25px;

  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 15px 25px rgba(0,0,0,0.35);
}
h1 {
  font-size: 40px;
  margin-bottom: 10px;
  color: white;
}

.dashboard-container > p {
  color: #cbd5e1;
  margin-bottom: 30px;
}

.stat-card h3 {
  color: #cbd5e1;
  margin-bottom: 15px;
  font-size: 18px;
}

.stat-card p {
  font-size: 42px;
  font-weight: bold;
  color: #38bdf8;
}

button {
  margin: 8px;
}
</style>