<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
const route = useRoute();
const router = useRouter();
const movieStore = useMovieStore();
const config = useRuntimeConfig();

const trailerData = ref<any>([]);

const selectedMovie: any = movieStore.movies_data.find(
  (movie) => movie.id === Number(route.params.id)
);

const { data } = await useAsyncData("movies", async () => {
  const trailerDataResponse: any = await $fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=${config.public.NUXT_TMBD_KEY}`
  );
  trailerData.value = trailerDataResponse;

  return trailerDataResponse;
});

const findTrailer: any = trailerData?.value.results.find(
  (trailer: any) => trailer.type === "Trailer"
);
const youtubeUrl = `https://www.youtube.com/watch?v=${findTrailer?.key}`;
function handleNavigateHome() {
  router.push("/");
}
</script>

<template>
  <main class="min-h-screen text-white py-6 px-4">
    <!-- Back to Home Button -->
    <button
      @click="handleNavigateHome"
      class="flex items-center text-white hover:text-gray-300 transition-colors mb-6"
    >
      <Icon icon="tabler:arrow-back-up" width="24" class="mr-2" />
      Back to Home
    </button>

    <!-- YouTube Video Player -->
    <div class="w-full mb-8 grid grid-cols-2 items-center">
      <LazyYoutube :src="youtubeUrl" class="w-full rounded-lg shadow-lg" />
      <!-- Poster Section -->
      <div class="flex">
        <div
          class="lg:w-1/3 w-full bg-cover bg-center rounded-lg shadow-xl overflow-hidden"
          :style="{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie?.backdrop_path})`,
          }"
        >
          <div
            class="h-full w-full bg-black bg-opacity-50 flex items-center justify-center"
          >
            <img
              :src="`https://image.tmdb.org/t/p/w500/${selectedMovie?.poster_path}`"
              :alt="`${selectedMovie?.title} Poster`"
              class="w-3/4 rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Basic Info Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      <div class="flex items-center">
        <Icon
          icon="material-symbols:kid-star"
          width="24"
          class="text-yellow-400 mr-2"
        />
        <span class="text-lg">
          IMDb Rating: <strong>{{ selectedMovie?.vote_average }}/10</strong>
        </span>
      </div>
      <div class="flex items-center">
        <Icon
          icon="material-symbols:calendar-month-sharp"
          width="24"
          class="text-blue-400 mr-2"
        />
        <span class="text-lg">
          Release Year: {{ selectedMovie?.release_date }}
        </span>
      </div>
    </div>

    <!-- Movie Overview -->
    <p class="text-xl my-4 leading-relaxed">
      {{ selectedMovie?.overview }}
    </p>
  </main>
</template>
