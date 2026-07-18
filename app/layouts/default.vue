<template>
  <div class="layout">

    <aside
  class="sidebar"
  :class="{ collapsed: isCollapsed }"
> 
   <button class="menu-btn" @click="toggleSidebar">
  ☰
   </button>
     
     <div class="logo">
        <span>🛠️</span>
         <h2>Helpdesk</h2>
     </div>

      <NuxtLink to="/dashboard">
  🏠 <span>Dashboard</span>
       </NuxtLink>

      <NuxtLink to="/create-ticket">
  ➕ <span>Create Ticket</span>
      </NuxtLink>

     <NuxtLink to="/my-tickets">
     🎫 <span>My Tickets</span>
   </NuxtLink>

     <NuxtLink to="/profile">
      👤 <span>Profile</span>
      </NuxtLink>

      <NuxtLink to="/settings">
      ⚙️ <span>Settings</span>
     </NuxtLink>

     <hr>

       <button class="logout-btn" @click="logout">
         🚪 <span>Logout</span>
       </button>

    </aside>

    <main class="content">
      <slot />
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isCollapsed = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}

const router = useRouter()

function logout() {
  router.push("/")
}

</script>

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

.menu-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 50px;
  text-align: left;
}

.sidebar {
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 50px;
}

.sidebar.collapsed span,
.sidebar.collapsed .logo h2 {
  display: none;
}

.sidebar.collapsed a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.sidebar.collapsed .logo {
  justify-content: center;
}
 .logout-btn {
  margin-top: auto;

  padding: 12px;

  background: #dc2626;

  color: white;

  border: none;

  border-radius: 10px;

  cursor: pointer;

  transition: .3s;
}

.logout-btn:hover {
  background: #b91c1c;
} 

</style>