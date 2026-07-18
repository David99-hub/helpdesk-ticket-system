<template>
  <div class="layout">

    <aside class="sidebar">

      <div class="logo">
        <span>🛠️</span>
         <h2>Helpdesk</h2>
     </div>

      <NuxtLink to="/dashboard">🏠 Dashboard</NuxtLink>

      <NuxtLink to="/create-ticket">
        ➕ Create Ticket
      </NuxtLink>

      <NuxtLink to="/my-tickets">
        🎫 My Tickets
      </NuxtLink>

      <NuxtLink to="/profile">
        👤 Profile
      </NuxtLink>

      <NuxtLink to="/settings">
        ⚙️ Settings
      </NuxtLink>

    </aside>

    <main class="content">
      <slot />
    </main>

  </div>
</template>

<style scoped>

.layout{
  display:flex;
  min-height:100vh;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}

.logo span {
  font-size: 28px;
}

.logo h2 {
  margin: 0;
  font-size: 22px;
}

.sidebar {
  width: 170px;
  background: #0f172a;
  color: white;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-right: 1px solid rgba(255,255,255,0.1);
}

.sidebar a {
  color: white;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.sidebar a:hover {
  background: #1e293b;
  transform: translateX(5px);
}

.sidebar a.router-link-active {
  background: #2563eb;
  color: white;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 40px;

  background:
    radial-gradient(circle at top right, rgba(59,130,246,.15), transparent 35%),
    radial-gradient(circle at bottom left, rgba(56,189,248,.15), transparent 35%),
    linear-gradient(135deg, #0f172a, #111827, #1e293b);

  color: white;
}

</style>