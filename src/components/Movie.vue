<template>
  <div class="movie-card">
    <img
        :src="`${movie.image?.medium ?? '../../public/no-img.jpg'}`"
        :alt="movie.original_title"
        class="movie-img"
    />
    <div class="movie-details">
      <div class="movie-name">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }" class="movie-link">
          {{ movie.name }}
        </router-link>
        <span class="movie-dates">
          ({{ movie.premiered ?? 'No date' }}{{ movie.ended ? ` — ${movie.ended}` : '' }})
        </span>
      </div>
      <div class="movie-overview" v-html="movie.summary"></div>
      <div class="movie-buttons">
        <button
            v-if="!isSearch"
            :class="{'btn-watched btn': !movie.isWatched, 'btn-unwatched btn': movie.isWatched }"
            @click="movieStore.toggleWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
            v-if="!isSearch"
            class="btn btn-delete"
            @click="movieStore.deleteMovie(movie.id)"
        >
          Delete
        </button>
        <button
            v-if="isSearch"
            class="btn btn-add"
            @click="searchStore.addToUserMovies(movie)"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/MovieStore";
import { useSearchStore } from "@/stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: { type: Object, required: true },
  isSearch: { type: Boolean, default: false },
});
</script>

<style scoped lang="css">
.movie-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #232526, #414345);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
}

.movie-img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
}

.movie-card:hover .movie-img {
  transform: scale(1.05);
}

.movie-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #e0e0e0;
}

.movie-name {
  font-size: 26px;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.movie-link {
  color: #64ffda;
  text-decoration: none;
  transition: color 0.3s ease;
}

.movie-link:hover {
  color: #42a5f5;
}

.movie-dates {
  font-size: 16px;
  color: #b0bec5;
  margin-left: 10px;
}

.movie-overview {
  font-size: 15px;
  line-height: 1.6;
  color: #bdbdbd;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-buttons {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.btn {
  background-color: #424242;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}


.btn-watched {
  background-color: #1eb4c3;
}
.btn-watched:hover {
  background-color: #17a2b8;
}

.btn-unwatched {
  background-color: #6352ff;
}
.btn-unwatched:hover {
  background-color: #7635e5;
}

.btn-delete {
  background-color: #f44336;
}
.btn-delete:hover {
  background-color: #d32f2f;
}

.btn-add {
  background-color: #7e57c2;
}
.btn-add:hover {
  background-color: #5e35b1;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 10px #64ffda;
}
</style>
