<template>
  <div class="profile-container">

    <h1>Profile</h1>

    <p class="page-subtitle">
      Manage your account information.
    </p>

    <div class="profile-card">

      <div class="profile-avatar">
        👤
      </div>

      <div class="profile-info">
        <p><strong>Name</strong><br>David</p>

        <p><strong>Email</strong><br>david</p>

        <p><strong>Role</strong><br>Customer</p>
      </div>

      <button>Edit Profile</button>

    </div>

  </div>
</template>

<style scoped>
.profile-container {
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

.profile-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,0.12);

  border-radius: 18px;

  padding: 30px;

  text-align: center;
}

.profile-avatar {
  width: 90px;
  height: 90px;

  margin: auto;

  border-radius: 50%;

  background: #081f50;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 42px;

  margin-bottom: 20px;
}

.profile-info p {
  color: white;
  margin: 20px 0;
}

.profile-info strong {
  color: #60a5fa;
}

button {
  margin-top: 25px;

  padding: 12px 25px;

  background: #08225c;

  color: white;

  border: none;

  border-radius: 8px;

  cursor: pointer;

  transition: .3s;
}

button:hover {
  background: #1d4ed8;
}
.profile-container {
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

.profile-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,0.12);

  border-radius: 18px;

  padding: 30px;

  text-align: center;
}

.profile-avatar {
  width: 90px;
  height: 90px;

  margin: auto;

  border-radius: 50%;

  background: #2563eb;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 42px;

  margin-bottom: 20px;
}

.profile-info p {
  color: white;
  margin: 20px 0;
}

.profile-info strong {
  color: #60a5fa;
}

button {
  margin-top: 25px;

  padding: 12px 25px;

  background: #2563eb;

  color: white;

  border: none;

  border-radius: 8px;

  cursor: pointer;

  transition: .3s;
}

button:hover {
  background: #1d4ed8;
}

</style>