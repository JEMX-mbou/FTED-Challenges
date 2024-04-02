<template>
  <div class="movie-list" v-if="movieStore.movies.length > 0">
    <h2>Movies</h2>
    <div class="movie-block" v-for="movie in movieStore.movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <span class="year">{{ movie.year }}</span>
      <p>{{ movie.director }}</p>
      <p>{{ movie.genre }}</p>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()
</script>

<style lang="scss" scoped>
.movie-block {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: aliceblue;
  color: #333;
  border-radius: 0.5rem;

  h3 {
    float: left;
  }
  .year {
    float: right;
  }
}
</style>
