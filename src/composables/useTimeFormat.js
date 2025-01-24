import { computed, ref, onMounted, onUnmounted } from 'vue';

// Bug: This implementation won't update the time
// You need to fix this by implementing proper interval and reactivity

export function useTimeFormat() {
  const currentTime = ref(new Date());
  let intervalId = 0;

  const formattedTime = computed(() => {
    const hours = currentTime.value.getHours();
    const minutes = currentTime.value.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.value.getSeconds().toString().padStart(2, '0');
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes}:${seconds}`;
  });

  const period = computed(() => {
    const hours = currentTime.value.getHours();
    return hours >= 12 ? 'PM' : 'AM';
  });

  onMounted(() => {
    intervalId = setInterval(() => {
      currentTime.value = new Date();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  })

  return {
    formattedTime,
    period,
  };
}
