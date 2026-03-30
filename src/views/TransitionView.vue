<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Simulate loading / step transition
  setTimeout(() => {
    router.push('/machines');
  }, 1000);
});
</script>

<template>
  <div class="transition-container">
    <div class="dots">
      <span>·</span>
      <span>·</span>
      <span>·</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.transition-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
}

.dots {
  font-size: 64px;
  letter-spacing: 8px;
  color: $text-dark;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
}
</style>
