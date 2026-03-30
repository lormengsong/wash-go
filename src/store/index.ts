import { reactive } from 'vue';

type ServiceType = 'washer' | 'dryer' | null;

interface AppState {
  serviceType: ServiceType;
  machineId: string | null;
  programmeId: string | null;
  language: 'KH' | 'EN' | 'CH';
}

export const store = reactive<AppState>({
  serviceType: null,
  machineId: null,
  programmeId: null,
  language: 'KH',
});

export const resetStore = () => {
  store.serviceType = null;
  store.machineId = null;
  store.programmeId = null;
};
