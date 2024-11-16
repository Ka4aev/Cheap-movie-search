import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import {api} from "@/shared/index.js";

export const useMovieStore = defineStore("movieStore", () => {
    const movie = ref(null)
    const movies = ref([]);
    const activeTab = ref(2);

    const moviesInLocaleStorage = localStorage.getItem("movies")
    if (moviesInLocaleStorage){
        movies.value = JSON.parse(moviesInLocaleStorage); // ._value(если объект массивов)
        console.log(JSON.parse(moviesInLocaleStorage));
    }


    const watchedMovies = computed(() =>
        movies.value.filter((el) => el.isWatched)
    );
    const totalCountMovies = computed(() => movies.value.length);

    const getMovie = async (id) => movie.value = (await api(`shows/${id}`)).data

    const setActiveTab = (id) => {
        activeTab.value = id;
    };
    const toggleWatched = (id) => {
        const idx = movies.value.findIndex((el) => el.id === id);
        movies.value[idx].isWatched = !movies.value[idx].isWatched;
    };
    const deleteMovie = (id) => {
        movies.value = movies.value.filter((el) => el.id !== id);
    };

    watch(
        () => movies,
        (state) => {
        localStorage.setItem('movies', JSON.stringify(state.value)) //без .value, если объект массивов
            //если что-то поменялось передаем новые значения(сам movies),
        // state-хранит новые, старые значения
    }, {deep: true}) //следим за массивом меняющимся внутри объекта

    return {
        movie,
        movies,
        activeTab,
        watchedMovies,
        totalCountMovies,
        getMovie,
        toggleWatched,
        deleteMovie,
        setActiveTab,
    };
});

/*
option

import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
    state: () => ({
        movies: [],
        activeTab: 2,
    }),
    getters: {
        watchedMovies(){
            return this.movies.filter((el) => el.isWatched);
        },
        totalCountMovies(){
            return this.movies.length;
        },
    },
    actions: {
        setActiveTab(id) {
            this.activeTab = id;
        },
        toggleWatched(id) {
            const idx = this.movies.findIndex(el => el.id === id);
            this.movies[idx].isWatched = !this.movies[idx].isWatched;
        },
        deleteMovie(id) {
            this.movies = this.movies.filter(el => el.id !==id);
        }
    }
});
 */
