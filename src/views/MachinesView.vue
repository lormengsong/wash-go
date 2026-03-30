<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';
import { ArrowRight, Ban } from 'lucide-vue-next';

const router = useRouter();

// Mock machine data based on the screenshot where some are unavailable
const machines = ref(
  Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    name: `ម៉ាស៊ីនលេខ${i + 1}`, // Machine Number x
    available: i !== 9 && i !== 11, // Make some unavailable like in the design
  }))
);

const selectMachine = (machine: { id: string; available: boolean }) => {
  if (!machine.available) return;
  store.machineId = machine.id;
  router.push('/programmes');
};
</script>

<template>
  <div class="machines-container">
    <div class="grid">
      <div 
        v-for="machine in machines" 
        :key="machine.id"
        class="machine-card"
        :class="{ unavailable: !machine.available }"
        @click="selectMachine(machine)"
      >
        <div class="machine-icon">
          <img src="https://ui-avatars.com/api/?name=M&background=random" alt="Machine" />
        </div>
        <div class="machine-info">
          <span class="name">{{ machine.name }}</span>
          <ArrowRight v-if="machine.available" :size="16" class="arrow-icon" />
          <Ban v-else :size="16" class="ban-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.machines-container {
  padding: 0 20px 40px;
  height: calc(100vh - 160px);
  overflow-y: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.machine-card {
  background: white;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  cursor: pointer;
  border: 1px solid #f0f0f0;
  transition: transform 0.1s, box-shadow 0.1s;
  
  &:active {
    transform: scale(0.98);
  }
  
  &.unavailable {
    background: #f5f5f5;
    opacity: 0.7;
    cursor: not-allowed;
    
    .name {
      color: #999;
    }
    
    .machine-icon img {
      filter: grayscale(100%);
      opacity: 0.5;
    }
  }
}

.machine-icon {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
}

.machine-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  
  .arrow-icon {
    color: #666;
  }
  
  .ban-icon {
    color: #e53935;
  }
}
</style>
