<template>
  <header class="header">
    <div class="header-container">
      <img src="../../public/logo.svg" alt="logo" class="header-logo" />
      <h2 class="header-title">My Favorite Movies</h2>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #1c1c1e, #2c2c2e);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-logo {
  max-width: 60px;
  margin-right: 15px;
  transition: transform 0.3s ease-in-out;
}

.header-logo:hover {
  transform: scale(1.1);
}

.header-title {
  font-size: 28px;
  color: #64ffda;
  font-family: 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  transition: color 0.3s ease;
}

.header-title:hover {
  color: #42a5f5;
}
</style>
