import { ref } from "vue";

export function useFetchData<T>(url: string, options?: RequestInit) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const isLoading = ref<boolean>(false);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      data.value = json;
    } catch (err: any) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  // Immediately invoke the fetch on composable use
  fetchData();

  return { data, error, isLoading, refetch: fetchData };
}
// usage

// import { useFetchData } from '@/composables/useFetchData';

// const { data, error, isLoading, refetch } = useFetchData<MovieDataTypes[]>(
//   'https://api.example.com/movies'
// );
