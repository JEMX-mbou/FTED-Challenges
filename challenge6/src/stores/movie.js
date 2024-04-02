import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([])

  const getMovies = computed(() => movies.value)

  function addMovie(movie) {
    movies.value.push(movie)
  }

  return { movies, getMovies, addMovie }
})
