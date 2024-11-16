<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/MovieStore.js";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const route = useRoute();
const { movie } = storeToRefs(useMovieStore());
const { getMovie } = useMovieStore();

onMounted(() => getMovie(route.params.id));
</script>

<template>
  <div class="movie-container" v-if="movie">
    <div class="movie-header">
      <img
          :src="`${movie.image?.original ?? '../../public/no-img.jpg'}`"
          :alt="movie.original_title"
          class="movie-img"
      />
      <div class="movie-details">
        <h2>{{ movie.name }}</h2>
        <p class="movie-summary" v-html="movie.summary"></p>
        <div class="movie-meta">
          <span><b>Status:</b> {{ movie.status }}</span>
          <span><b>Language:</b> {{ movie.language }}</span>
          <span><b>Genres:</b> {{ movie.genres.join(' | ') }}</span>
        </div>
      </div>
    </div>

    <div class="movie-info">
      <h3>Show Info</h3>
      <ul class="movie-info-list">
        <li v-if="movie.webChannel">
          <b>Web channel:</b> {{ movie.webChannel.country.name }},
          <a
              target="_blank"
              :href="`${movie.webChannel.officialSite ?? movie.officialSite}`"
          >{{ movie.webChannel.name }}</a
          >
          ({{ movie.premiered.slice(0, 7) }} — {{ movie.ended.slice(0, 7) }})
        </li>
        <li><b>Schedule:</b> {{ movie.schedule?.days.join(', ') }} (~ {{ movie.averageRuntime }} min)</li>
        <li><b>Show Type:</b> {{ movie.type }}</li>
        <li v-if="movie.officialSite">
          <b>Official site:</b>
          <a :href="`${movie.officialSite}`" target="_blank">{{ movie.officialSite }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">
.movie-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
}

.movie-header {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.movie-img {
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.movie-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  font-size: 36px;
  color: #ffffff;
}

.movie-summary {
  font-size: 16px;
  line-height: 1.6;
  color: #bdbdbd;
}

.movie-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 14px;
}

.movie-info {
  margin-top: 40px;
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
}

h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffffff;
}

.movie-info-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movie-info-list li {
  font-size: 16px;
}

a {
  color: #64b5f6;
  transition: color 0.3s ease;
}
a:hover {
  color: #bbdefb;
}
</style>
