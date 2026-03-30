<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { store } from '../../store';

const route = useRoute();
const currentStep = computed(() => Number(route.meta.step || 1));

const steps = [1, 2, 3, 4];

const stepText = computed(() => {
  if (currentStep.value === 1) return 'ជ្រើសរើសប្រភេទសេវាកម្ម';
  if (currentStep.value === 2) return `ម៉ាស៊ីន${store.serviceType === 'washer' ? 'បោក' : 'សម្ងួត'} > ជ្រើសរើសលេខម៉ាស៊ីន`;
  if (currentStep.value === 3) return `ម៉ាស៊ីន${store.serviceType === 'washer' ? 'បោក' : 'សម្ងួត'} > ម៉ាស៊ីនលេខ${store.machineId} > ជ្រើសរើសកម្រិតកម្ដៅ`;
  return '';
});

</script>

<template>
  <div class="stepper-wrapper">
    <div class="steps-container">
      <template v-for="(step, index) in steps" :key="step">
        <div 
          class="step-circle" 
          :class="{ active: currentStep === step, completed: currentStep > step }"
        >
          <span v-if="currentStep <= step">{{ step }}</span>
          <span v-else class="check">✓</span>
        </div>
        <div class="step-line" v-if="index < steps.length - 1"></div>
      </template>
    </div>
    <div class="step-text">{{ stepText }}</div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/_variables.scss';

.stepper-wrapper {
  padding: 20px;
  width: 100%;
  padding-bottom: 24px;
}

.steps-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.step-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #9E9E9E;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  
  &.active {
    background-color: #FFFFFF;
    color: Black;
  }
  
  &.completed {
    border: 2px solid #00C800;
    background: white;
    color: #00C800;
  }
}

.step-line {
  height: 1px;
  width: 22px;
  background-color: #FFFFFF;
  margin: 0 4px;
}

.step-text {
  font-family: 'Battambang';
  text-align: center;
  color: #616161;
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
