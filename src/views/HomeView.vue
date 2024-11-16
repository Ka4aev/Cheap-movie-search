<template>
  <div class="tabs">
    <button
        :class="['btn', { btn_active: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
    >
      Favorite
    </button>
    <button
        :class="['btn', { btn_active: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
    >
      Search
    </button>
    <button
        :class="['btn', { btn_active: movieStore.activeTab === 3 }]"
        @click="setTab(3)"
    >
      Persons
    </button>
  </div>
  <div v-if="movieStore.activeTab === 1" class="movies">
    <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
    <Movie
        v-for="movie of movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie"
    />
    <h3>All Movies (count: {{ movieStore.totalCountMovies }})</h3>
    <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
  </div>
  <div v-else-if="movieStore.activeTab === 2" class="search">
    <Search />
  </div>
  <div v-else>
    <SearchPeople />
  </div>
</template>

<script setup>
import Movie from "../components/Movie.vue";
import Search from "../components/Search.vue";
import SearchPeople from "../components/SearchPeople.vue";
import { useMovieStore } from "../stores/MovieStore";

const movieStore = useMovieStore();
const setTab = (id) => movieStore.setActiveTab(id);
</script>

<style lang="css">
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.btn {
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: #424242;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #64b5f6;
}

.btn_active {
  background-color: #64b5f6;
  color: #ffffff;
}
</style>
