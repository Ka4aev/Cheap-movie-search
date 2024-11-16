<template>
  <form @submit.prevent="searchStore.getPeoples(searchPeople)">
    <input type="text" class="search-input" placeholder="Input person" v-model="searchPeople" />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <People v-for="person of searchStore.peoples" :key="person.id" :person="person" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/SearchStore";
import Loader from "@/components/Loader.vue";
import People from "@/components/People.vue";

const searchStore = useSearchStore();
const searchPeople = ref('');
</script>

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
