<script setup lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { type CardComponentProps } from "@/types/MoviesDataType";
const config = useRuntimeConfig();
const movieStore = useMovieStore();
import { useDebounceFn } from "@vueuse/core";
import { ref, watch } from "vue";

definePageMeta({
  layout: "sidebar-layout",
});

const searchQuery = ref("");
const filteredMovies = ref<CardComponentProps[]>([]);

const { data, error, status } = await useAsyncData("movies", async () => {
  const moviesData: any = await $fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${config.public.NUXT_TMBD_KEY}&page=1`
    // {
    //   headers: {
    //     "X-Master-Key": config.public.NUXT_MASTER_X_KEY,
    //     "Content-Type": "application/json",
    //   },
    // }
  );

  //   return moviesData.record.map((movie: any) => ({
  //     id: movie.id,
  //     name: movie.title,
  //   }));

  filteredMovies.value = moviesData.results;
  movieStore.setData(moviesData.results);
  return moviesData.results;
});

// Remote search function
const fetchSearchMovie = async () => {
  const query = searchQuery.value.trim();

  if (!query) {
    filteredMovies.value = movieStore.movies_data;
    return;
  }
  try {
    const searchResults: any = await $fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery.value}&api_key=${config.public.NUXT_TMBD_KEY}`
    );
    filteredMovies.value = searchResults.results;
  } catch (err) {
    console.error("Error fetching search results", err);
  }
};

const debouncedFetchSearchMovie = useDebounceFn(fetchSearchMovie, 500);

watch(searchQuery, () => {
  debouncedFetchSearchMovie();
});
</script>

<template>
  <main class="w-full flex flex-col justify-center">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="xl:w-full mx-4 xl:mx-0 xl:max-w-md p-2 border rounded-md mb-4 text-black mt-4 focus:outline-none"
    />

    <section class="flex justify-center xl:justify-normal xl:grid">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 my-4"
        v-if="!error"
      >
        <MovieCard
          v-for="movie in filteredMovies"
          :movie="movie"
          :key="movie.id"
        />
      </div>
      <div v-else="">Loading</div>
    </section>
  </main>
</template>
