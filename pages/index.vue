<script setup lang="ts">
definePageMeta({
  layout: "default",
});

import { useMovieStore } from "@/stores/MovieStore";

import { type CardComponentProps } from "@/types/MoviesDataType";

const config = useRuntimeConfig();
const movieStore = useMovieStore();

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

  // if i only wanted to keep id and name
  //   return moviesData.record.map((movie: any) => ({
  //     id: movie.id,
  //     name: movie.title,
  //   }));

  //normally we had metaData Arr and record and i only want metaData
  movieStore.setData(moviesData.results);
  return moviesData.results;
});
</script>

<template>
  <main>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 my-4"
      v-if="!error"
    >
      <MovieCard
        v-for="movie in movieStore.movies_data"
        :movie="movie"
        :key="movie.id"
      />
    </div>
    <div v-else="">Loading</div>
  </main>
</template>
