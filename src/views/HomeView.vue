<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { store } from '../store';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const selectService = (type: 'washer' | 'dryer') => {
  store.serviceType = type;
  // Route to the transition screen within the current locale
  router.push(`/${route.params.locale}/transition`);
};
</script>

<template>
  <div class="home-container">
    
    <!-- Washer Card -->
    <div 
      class="service-card washer-card" 
      @click="selectService('washer')"
    >
      <div class="machine-section">
        <div class="circle circle-blue"></div>
        <img src="@/assets/images/machine/machine01.svg" alt="Washer" class="machine-img" />
      </div>
      
      <div class="text-section">
        <h2 class="title">{{ t('home.washer') }}</h2>
        <div class="arrows">
          <span class="arrow a1"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
          <span class="arrow a2"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
          <span class="arrow a3"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
        </div>
      </div>
    </div>
    
    <!-- Dryer Card -->
    <div 
      class="service-card dryer-card" 
      @click="selectService('dryer')"
    >
      <div class="machine-section">
        <div class="circle circle-orange"></div>
        <img src="@/assets/images/machine/machine02.svg" alt="Dryer" class="machine-img" />
      </div>
      
      <div class="text-section">
        <h2 class="title">{{ t('home.dryer') }}</h2>
        <div class="arrows">
          <span class="arrow a1"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
          <span class="arrow a2"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
          <span class="arrow a3"><img src="@/assets/images/arrow/vector.svg" alt=""></span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px); /* Adjust based on topbar height */
}

.service-card {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:active {
    opacity: 0.9;
  }
}

.washer-card {
  background: linear-gradient(180deg, #3bbcf0 0%, #1579a1 100%);
}

.dryer-card {
  background: linear-gradient(180deg, #f29643 0%, #d86927 100%);
}

.machine-section {
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 1;
}

.circle-blue {
  background: linear-gradient(180deg, #2EAFE5 30.81%, rgba(46, 175, 229, 0.5) 138.56%);
  // opacity: 0.9;
}

.circle-orange {
  background: linear-gradient(360deg, #FFFFFF -10.19%, #ED7332 100%);
  // opacity: 0.9;
}

.machine-img {
  position: relative;
  z-index: 2;
  width: 85%; /* Make it fill nicely */
  max-width: 200px; /* Cap size on larger contexts */
  object-fit: contain;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.3));
}

.text-section {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  color: white;
}

.title {
  font-family: 'Battambang', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  white-space: nowrap;
  text-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.arrows {
  display: flex;
  gap: 12px;
  font-size: 1.5rem;
  margin-left: 2%;
}

.arrow {
  color: white;
  img{
    width: 22px;
    height: 22px;
  }
  &.a1 { opacity: 1; }
  &.a2 { opacity: 0.6; }
  &.a3 { opacity: 0.3; }
}

@media (max-width: 380px) {
  .title {
    font-size: 1.8rem;
  }
  .circle {
    width: 160px;
    height: 160px;
  }
  .machine-img {
    max-width: 172px;
  }
}
</style>
