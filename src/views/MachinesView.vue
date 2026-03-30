<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { store } from '../store';
import { ArrowRight, Ban } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

// Mock machine data based on the screenshot where some are unavailable
const machines = computed(() => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    name: t('machines.machineNum', { n: i + 1 }), 
    available: i < 8, // Make the first 4 rows available, next ones unavailable
  }));
});

const machineRows = computed(() => {
  const rows = [];
  for (let i = 0; i < machines.value.length; i += 2) {
    rows.push(machines.value.slice(i, i + 2));
  }
  return rows;
});

const selectMachine = (machine: { id: string; available: boolean }) => {
  if (!machine.available) return;
  store.machineId = machine.id;
  router.push(`/${route.params.locale}/programmes`);
};
</script>

<template>
  <div class="machines-container">
    <div class="card-list">
      <div 
        v-for="(row, index) in machineRows" 
        :key="index"
        class="row-container"
      >
        <div 
          v-for="machine in row"
          :key="machine.id"
          class="card-wrapper"
        >
          <div 
            class="machine-card"
            :class="{ available: machine.available, unavailable: !machine.available }"
            @click="selectMachine(machine)"
          >
            <div class="machine-icon">
              <img src="@/assets/images/machine/icon_machine.svg" alt="">
            </div>
            <div class="machine-info">
              <span class="name">{{ machine.name }}</span>
              <img v-if="!machine.available" src="@/assets/images/arrow/arrow_left.svg" alt="" width="20px" height="20px">
              <img v-else src="@/assets/images/arrow/disable.svg" alt="" width="20px" height="20px">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as *;

.machines-container {
  padding: 0 16px 40px;
  height: calc(100vh - 160px);
  overflow-y: auto;

  @media (min-width: 380px) {
    padding: 0 20px 40px;
  }
}

.card-list {
  display: flex;
  flex-direction: column;
}

.row-container {
  display: grid;
  grid-template-columns: 1fr; /* 1 column on very small screens */
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px dashed #d1d5db; /* A gentle horizontal dashed line between rows */

  @media (min-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 480px) {
    padding: 24px 0;
  }

  &:last-child {
    border-bottom: none;
  }
}

.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.machine-card {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 6px; /* Slightly tighter on small screens */
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (min-width: 380px) {
    padding: 8px 12px 8px 8px;
    border-radius: 20px;
  }
  
  &:active {
    transform: scale(0.96);
  }

  &.available {
    background: #ffffff;
    border: 1px solid #b3d4f4; /* Light blue border */
    box-shadow: 0 4px 12px rgba(0, 100, 255, 0.08); /* Soft blueish shadow */

    .name {
      color: #333;
      font-family: 'Battambang';
    }
  }

  &.unavailable {
    background: #e5e5e5; /* Gray background for unavailable */
    border: 1px solid transparent;
    cursor: not-allowed;

    &:active {
      transform: none;
    }

    .name {
      color: #6b7280; /* Gray text color */
      font-family: 'Battambang';
    }
  }
}

.machine-icon {
  width: 44px;
  height: 44px;
  margin-right: 8px;
  flex-shrink: 0;

  @media (min-width: 380px) {
    width: 52px;
    height: 52px;
    margin-right: 12px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.machine-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-size: 13px;
  font-weight: 400;
  
  @media (min-width: 380px) {
    font-size: 15px;
  }
  
  .arrow-icon {
    color: #111;
  }
  
  .ban-icon {
    color: #ef4444; /* Solid red for the ban icon */
  }
}
</style>
