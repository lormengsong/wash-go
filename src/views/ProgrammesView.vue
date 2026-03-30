<script setup lang="ts">
import { useRouter } from 'vue-router';
import { store } from '../store';
import { ArrowRight, Waves } from 'lucide-vue-next';

const router = useRouter();

const programmes = [
  {
    id: 'cold',
    name: 'កម្រិតត្រជាក់', // Cold level
    temp: '30°',
    price: '6កាក់ / 6,000 រ', // 6 credits / 6000 r
    time: '30 min',
    class: 'btn-cold'
  },
  {
    id: 'warm',
    name: 'កម្រិតក្តៅល្មម', // Warm level
    temp: '40°',
    price: '7កាក់ / 7,000 រ',
    time: '30 min',
    class: 'btn-warm'
  },
  {
    id: 'hot',
    name: 'កម្រិតក្តៅខ្លាំង', // Hot level
    temp: '50°',
    price: '8កាក់ / 8,000 រ',
    time: '30 min',
    class: 'btn-hot'
  }
];

const selectProgramme = (id: string) => {
  store.programmeId = id;
  // Final step in the provided design
  alert(`កម្មវិធីបានជ្រើសរើសជោគជ័យ! (Programme Selected successfully!)\nService: ${store.serviceType}\nMachine: ${store.machineId}\nTemp: ${id}`);
  
  // Go back to home to restart flow
  router.push('/');
};
</script>

<template>
  <div class="programmes-container">
    <div 
      v-for="prog in programmes" 
      :key="prog.id"
      class="programme-card"
      :class="prog.class"
      @click="selectProgramme(prog.id)"
    >
      <div class="waves-bg">
         <Waves :size="120" stroke-width="1" class="wave-icon" />
      </div>
      
      <div class="content flex-row">
        <div class="temp-display">
          <span>{{ prog.temp }}</span>
        </div>
        
        <div class="info-details">
          <h3>{{ prog.name }}</h3>
          <p class="price">{{ prog.price }}</p>
          <p class="time">⏱ {{ prog.time }}</p>
        </div>
        
        <div class="arrow-right">
          <ArrowRight :size="24" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/_variables.scss';

.programmes-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
  width: 100%;
}

.programme-card {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  
  &:active {
    opacity: 0.9;
  }
}

.btn-cold {
  background: linear-gradient(135deg, #24b8f0 0%, #0d83b6 100%);
}

.btn-warm {
  background: linear-gradient(135deg, #fcd250 0%, #e2a826 100%);
}

.btn-hot {
  background: linear-gradient(135deg, #f47f48 0%, #d84b1d 100%);
}

.waves-bg {
  position: absolute;
  top: 10%;
  left: 20px;
  opacity: 0.2;
  pointer-events: none;
  
  .wave-icon {
    color: white;
  }
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: white;
}

.temp-display {
  font-size: 48px;
  font-weight: 800;
  width: 120px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 700;
  }
  
  p {
    margin: 0 0 4px 0;
    font-size: 14px;
    opacity: 0.9;
    
    &.price {
      font-weight: bold;
    }
    
    &.time {
      font-size: 12px;
    }
  }
}

.arrow-right {
  opacity: 0.8;
}
</style>
