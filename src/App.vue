<template>
  <div class="app-container">
    <figure class="logo">
      <img src="/vueschool-logo.png" alt="VueSchool Logo" />
    </figure>
    <h1>Real-Time Clock Challenge</h1>
    <p class="description">Can you make this clock tick?</p>
    <DigitalClock />
  </div>
</template>

<script setup>
import DigitalClock from './components/DigitalClock.vue';
</script>

<style>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  height: 45px;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  overflow: hidden;
  margin: 0 auto;
}

.logo img {
  width: 100%;
}

h1 {
  color: #fc6c94;
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
</style>