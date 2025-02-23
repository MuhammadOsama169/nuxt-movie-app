<script setup lang="ts">
import { type CardComponentProps } from "@/types/MoviesDataType";
import { useMovieStore } from "@/stores/MovieStore";
import { Icon } from "@iconify/vue";

// const props = defineProps<{
//   movie: MovieDataTypes;
// }>();
defineProps<{
  movie: CardComponentProps;
}>();
</script>

<template>
  <NuxtLink
    :to="`/movie/${movie.id}`"
    class="group relative w-[250px] h-[350px] rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
  >
    <img
      v-if="movie.poster_path"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      alt="Movie poster"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <h1>{{ movie.title }}</h1>
    <div
      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-bg-opacity duration-300 flex flex-col justify-between p-4"
    >
      <div className="flex justify-center items-center h-[80%]">
        <Icon
          icon="material-symbols:eye-tracking-outline"
          class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-[50px]"
        />
      </div>

      <div className="flex justify-between items-center">
        <!-- {/* IMDb Rating */} -->
        <div className="flex items-center gap-1">
          <Icon icon="material-symbols:kid-star" class="text-[#FFBF00]" />
          <span className="text-white font-semibold">{{
            movie.vote_average
          }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
