<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const goBack = () => {
  if (route.name === 'programmes') {
    router.push(`/${locale.value}/machines`);
  } else if (route.name === 'machines') {
    router.push(`/${locale.value}`);
  } else {
    router.back();
  }
};

const switchLanguage = (lang: string) => {
  const currentLocale = route.params.locale as string;
  if (currentLocale === lang) return;
  
  // Swap out the locale part of the path while keeping the rest exactly identical
  const newPath = route.fullPath.replace(new RegExp(`^/${currentLocale}`), `/${lang}`);
  router.push(newPath).catch(() => {});
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
      <!-- Order based on user's hint: en ch kh -->
      <div class="lang-item" :class="{ active: route.params.locale === 'kh' }" @click="switchLanguage('kh')">
        <span class="flag"><img src="@/assets/images/lang/cambodia.svg" alt=""></span> {{ t('topbar.lang_kh') }}
      </div>
      <div class="lang-item" :class="{ active: route.params.locale === 'en' }" @click="switchLanguage('en')">
        <span class="flag"><img src="@/assets/images/lang/english.svg" alt=""></span> {{ t('topbar.lang_en') }}
      </div>
      <div class="lang-item" :class="{ active: route.params.locale === 'ch' }" @click="switchLanguage('ch')">
        <span class="flag"><img src="@/assets/images/lang/chinese.svg" alt=""></span> {{ t('topbar.lang_zh') }}
      </div>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/variables.scss' as *;

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
