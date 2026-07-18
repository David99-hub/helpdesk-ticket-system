<template>
  <div class="settings-container">

    <h1>Settings</h1>

    <p class="page-subtitle">
      Manage your application preferences.
    </p>

    <div class="settings-card">

      <div class="setting-item">
        <h3>🌙 Appearance</h3>
        <p>Dark Theme Enabled</p>
      </div>

      <div class="setting-item">
        <h3>🔔 Notifications</h3>
        <p>Email Notifications: ON</p>
      </div>

      <div class="setting-item">
        <h3>🔒 Account</h3>
        <button>Change Password</button>
      </div>

      <div class="setting-item">
        <h3>ℹ️ About</h3>
        <p>IT Helpdesk System v1.0</p>
      </div>

    </div>

  </div>
</template>

<style scoped>

.settings-container{
  max-width:700px;
  margin:50px auto;
  padding:24px;
}

h1{
  color:white;
  font-size:34px;
  margin-bottom:5px;
}

.page-subtitle{
  color:#cbd5e1;
  margin-bottom:30px;
}

.settings-card{
  background:rgba(255,255,255,.08);

  backdrop-filter:blur(10px);

  border:1px solid rgba(255,255,255,.12);

  border-radius:18px;

  padding:30px;
}

.setting-item{
  padding:20px 0;

  border-bottom:1px solid rgba(255,255,255,.1);
}

.setting-item:last-child{
  border-bottom:none;
}

.setting-item h3{
  color:#60a5fa;

  margin-bottom:8px;
}

.setting-item p{
  color:white;
}

button{
  margin-top:10px;

  padding:12px 20px;

  background:#2563eb;

  color:white;

  border:none;

  border-radius:8px;

  cursor:pointer;

  transition:.3s;
}

button:hover{
  background:#1d4ed8;
}

</style>