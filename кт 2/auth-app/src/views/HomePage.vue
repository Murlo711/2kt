<template>
  <div class="home-container">
    <h1 class="home-title">Welcome to Our App</h1>
    <p class="home-description">This is the home page where you can find the latest updates and news.</p>
    <router-link to="/about" class="home-link">Learn more about us</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.home-title {
  font-size: 32px;
  color: #333;
}

.home-description {
  font-size: 18px;
  color: #666;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>