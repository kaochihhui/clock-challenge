<template>
  <div class="clock-container">
    <div class="clock-face">
      <span class="time">{{ formattedTime }}</span>
      <span class="period">{{ period }}</span>
    </div>
  </div>
</template>

<script setup>
import { useTimeFormat } from '../composables/useTimeFormat';

const { formattedTime, period } = useTimeFormat();
</script>

<style scoped>
.clock-container {
  background: linear-gradient(145deg, #2c3e50, #3498db);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.clock-face {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.time {
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: #ecf0f1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.period {
  font-size: 1.5rem;
  color: #ecf0f1;
  opacity: 0.8;
}
</style>
