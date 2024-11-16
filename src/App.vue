<template>
  <router-link to="/">
    <the-header/>
  </router-link>
  <main>
    <router-view/>
  </main>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>