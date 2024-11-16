<script setup>
  import {ref} from "vue";
  import {useSearchStore} from "@/stores/SearchStore.js";
  import Loader from "@/components/Loader.vue";
  import Movie from "@/components/Movie.vue";

  const searchStore = useSearchStore();
  const searchMovie = ref('')
</script>

<template>
<form @submit.prevent="searchStore.getMovies(searchMovie)">
  <input
      type="text"
      class="search-input"
      placeholder="Input movie"
      v-model="searchMovie" />
</form>
  <Loader v-if="searchStore.loader"/>
  <div v-else>
    <Movie
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
    />
  </div>
</template>

<style scoped lang="css">
.search-input {
  border: 1px solid #424242;
  background-color: #2c2c2c;
  color: #e0e0e0;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.search-input::placeholder {
  color: #9e9e9e;
}
</style>