import { ref, onMounted } from "vue";

export function useLang() {
  const lang = ref<string | null>(null);

  onMounted(() => {
    lang.value = localStorage.getItem("lang");
  });

  return { lang };
}
// usage

// import { useLang } from '@/composables/useLang';

// const { lang } = useLang();
