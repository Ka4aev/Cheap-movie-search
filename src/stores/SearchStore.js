import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";
import { api } from "@/shared";


export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);
  const peoples = ref([])

  const getMovies = async (search) => {
    loader.value = true;
    const response = (await api(`search/shows?q=${search}`)).data
    movies.value = response.map(item => item.show);
    console.log(movies.value)
    loader.value = false;
  };

  const getPeoples = async (search) => {
    loader.value = true;
    const data = (await api(`search/people?q=${search}`)).data;
    peoples.value = data.map(item => item.person);
    console.log(peoples.value)
    loader.value = false;
  };


  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    // movieStore.activeTab = 1;
  };

  return {
    loader,
    movies,
    peoples,
    getMovies,
    getPeoples,
    addToUserMovies,
  };
});


/*
option

import {defineStore} from "pinia";
import {useMovieStore} from "@/stores/MovieStore.js";


const url =
    "https://api.tvmaze.com/search/shows?q=";



export const useSearchStore = defineStore("searchStore",{
    state: () => ({
        loader: false,
        movies: [],
    }),
    actions: {
        async getMovies(search){
            this.loader = true;
            const res = await fetch(`${url}${search}`);
            const data = await res.json();

            this.movies = data.map(item => item.show);
            console.log(this.movies = data.map(item => item.show));
            this.loader = false;
        },
        addToUserMovies(object) {
            const movieStore = useMovieStore();
            movieStore.movies.push({...object, isWatched: false});
            // movieStore.activeTab = 1;
            // console.log(object)
        }
    }
})
 */
