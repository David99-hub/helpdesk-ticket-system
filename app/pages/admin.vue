<template>
  <div class="admin-container">
    <h1>Customers</h1>

    <div
      v-for="customer in customers"
      :key="customer.id"
      class="customer-card"
    >
      <h3>{{ customer.name }}</h3>
      <p>{{ customer.email }}</p>
      <p>{{ customer.role }}</p>
    </div>
  </div>
</template>

<script setup>
const customers = ref([
  {
    id: 1,
    name: "David",
    email: "david@example.com",
    role: "Customer"
  },
  {
    id: 2,
    name: "Sarah",
    email: "sarah@gmail.com",
    role: "Customer"
  },
  {
    id: 3,
    name: "John",
    email: "john@yahoo.com",
    role: "Customer"
  }
])
</script>

<style scoped>
.admin-container{
  max-width:900px;
  margin:auto;
}

.customer-card{
  background:rgba(255,255,255,.05);
  padding:20px;
  margin-bottom:15px;
  border-radius:12px;
}
</style>