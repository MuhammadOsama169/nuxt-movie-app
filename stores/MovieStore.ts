// stores/movie.ts
import { defineStore } from "pinia";
import { moviesInitialData } from "@/types/MoviesDataType";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies_data: moviesInitialData,
    isLoading: true,
    active_page: "Trending Movies",
  }),
  // actions
  actions: {
    setData(newMovies: typeof moviesInitialData) {
      this.movies_data = newMovies;
      this.isLoading = false;
    },

    setActivePage(newPage: string) {
      this.active_page = newPage;
    },
    //
    removeBillingInfoById(id: string) {
      this.movies_data = this.movies_data.filter((info) => info.id !== id);
    },
    editBillingInfoById(updatedBillingInfo: any) {
      const index = this.movies_data.findIndex(
        (info) => info.id === updatedBillingInfo.id
      );
      if (index !== -1) {
        this.movies_data[index] = updatedBillingInfo;
      }
    },
  },
});
