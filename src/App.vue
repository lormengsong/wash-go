<script setup lang="ts">
import { useRoute } from 'vue-router';
import TopBar from './components/layout/TopBar.vue';
import Stepper from './components/layout/Stepper.vue';

const route = useRoute();
</script>

<template>
  <div class="app-wrapper">
    <!-- The layout shown in the designs is constrained like a mobile app running on a kiosk -->
    <div class="mobile-container">
      <TopBar />
      <Stepper v-if="route.name !== 'transition'" />
      
      <!-- Content Area -->
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/styles/variables.scss' as *;
.mobile-container {
  background-color: #EAEEF3;
}
// Global overrides

// Emulate a kiosk / mobile screen max-width container

</style>
