import { computed } from 'vue';

// Bug: This implementation won't update the time
// You need to fix this by implementing proper interval and reactivity

export function useTimeFormat() {
  const formattedTime = computed(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes}:${seconds}`;
  });

  const period = computed(() => {
    const hours = new Date().getHours();
    return hours >= 12 ? 'PM' : 'AM';
  });

  return {
    formattedTime,
    period,
  };
}
