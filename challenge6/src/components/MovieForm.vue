<template>
  <form id="movie-form" @submit.prevent="addMovie">
    <label for="title">Title</label>
    <p class="error-message" v-if="errorMessages.title">{{ errorMessages.title }}</p>
    <input type="text" name="title" id="title" v-model="title" />

    <label for="year">Year</label>
    <p class="error-message" v-if="errorMessages.year">{{ errorMessages.year }}</p>
    <input type="number" name="year" id="year" v-model="year" />

    <label for="director">Director</label>
    <p class="error-message" v-if="errorMessages.director">{{ errorMessages.director }}</p>
    <input type="text" name="director" id="director" v-model="director" />

    <label for="genre">Genre</label>
    <p class="error-message" v-if="errorMessages.genre">{{ errorMessages.genre }}</p>
    <input type="text" name="genre" id="genre" v-model="genre" />

    <button type="submit">Add Movie</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()

const title = ref('')
const year = ref('')
const director = ref('')
const genre = ref('')

const errorMessages = reactive({
  title: '',
  year: '',
  director: '',
  genre: ''
})

function addMovie() {
  if (!title.value) {
    errorMessages.title = 'Title is required'
  } else {
    errorMessages.title = ''
  }

  if (!year.value) {
    errorMessages.year = 'Year is required'
  } else if (year.value < 1900 || year.value > new Date().getFullYear()) {
    errorMessages.year = 'Year is invalid, must be between 1900 and ' + new Date().getFullYear()
  } else {
    errorMessages.year = ''
  }

  if (!director.value) {
    errorMessages.director = 'Director is required'
  } else if (!isFullName(director.value)) {
    errorMessages.director = 'Director is invalid, add first and last name'
  } else {
    errorMessages.director = ''
  }

  if (!genre.value) {
    errorMessages.genre = 'Genre is required'
  } else if (genre.value.length < 5) {
    errorMessages.genre = 'Genre is invalid, must be at least 5 characters'
  } else {
    errorMessages.genre = ''
  }

  if (
    !errorMessages.title &&
    !errorMessages.year &&
    !errorMessages.director &&
    !errorMessages.genre
  ) {
    movieStore.addMovie({
      title: title.value,
      year: year.value,
      director: director.value,
      genre: genre.value
    })
  }
}

/**
 * Checks if a given value is a valid full name.
 *
 * @param {string} value - The value to be checked.
 * @return {boolean} Returns true if the value is a valid full name, false otherwise.
 */
function isFullName(value) {
  // Regular expression for a first and last name
  const fullNameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/
  return fullNameRegex.test(value)
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: fit-content;

  input {
    padding: 0.5rem;
    font-size: 1.1rem;
    font-family: monospace;
  }

  .error-message {
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid red;
    border-radius: 0.5rem;
    color: red;
    font-weight: bold;
  }

  button {
    align-self: flex-end;
    padding: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    background-color: #19e419;
    color: white;
    border: none;
    border-radius: 0.5rem;
  }
}
</style>
