<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Import components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped></style>
