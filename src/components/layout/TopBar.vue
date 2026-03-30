<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goBack = () => {
  if (route.name === 'programmes') {
    router.push('/machines');
  } else if (route.name === 'machines') {
    router.push('/');
  } else {
    router.back();
  }
};
</script>

<template>
  <div class="top-bar">
    <div class="left-section">
      <button v-if="route.name !== 'home'" @click="goBack" class="back-btn">
          <img src="@/assets/images/arrow/arrow_right.svg" alt="">
      </button>
      <div v-else class="logo-placeholder"> <img src="@/assets/images/logo.svg" alt=""> </div>
    </div>
    
    <div class="language-selector">
      <div class="lang-item active"><span class="flag"><img src="@/assets/images/lang/cambodia.svg" alt=""></span> KH</div>
      <div class="lang-item"><span class="flag"><img src="@/assets/images/lang/english.svg" alt=""></span> EN</div>
      <div class="lang-item"><span class="flag"><img src="@/assets/images/lang/chinese.svg" alt=""></span> CH</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/_variables.scss';

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  height: 80px;
  width: 100%;
}

.left-section {
  width: 40px;
}

.back-btn {
  background: white;
  border: none;
  border-radius: 40%;
  height: 48px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  cursor: pointer;
  color: $text-dark;
  img{
    width: 20px;
    height: 20px;
  }
  &:active {
    background: #FFFFFF;
  }
}

.logo-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.language-selector {
  display: flex;
  // background: white;
  border-radius: 30px;
  height: 48px;
  padding: 0px;
  border: 1px solid #E0E0E0;
  // box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

@media (max-width: 380px) {
  .lang-item {
    padding: 6px 20px !important;
  }

}
.lang-item {
  padding: 6px 30px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #616161;
  cursor: pointer;
  
  &.active {
    background-color: #FFFFFF;
    color: #333;
    font-weight: 700;
  }
  
  .flag {
    display: inline-block;
    width: 16px;
    height: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
