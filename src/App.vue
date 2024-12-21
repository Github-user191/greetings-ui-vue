<template>
  <section class="greetings-page">
    <div class="greetings-container">
      <h1 class="greetings-title">Welcome to the Greetings App!</h1>
      <p class="greetings-description">Explore greetings from different cultures and languages.</p>
      <div class="greetings-grid" v-if="greetings?.length>0">
        <GreetingCard
          v-for="(item, index) in greetings"
          :key="index"
          :language="item.Language"
          :greeting="item.Greeting"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import GreetingCard from './components/GreetingCard.vue'
import { get } from '../src/utils/api/makeApiCall.js'


const greetings = ref([]);


onBeforeMount(async () => {
  const hostname = import.meta.envVITE_HOSTNAME ?? "localhost:3000";
  greetings.value = await get(`http://${hostname}/api/greetings`);
})


</script>

<style scoped>
.greetings-page {
  background: #f4f7fc;
  color: #333;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.greetings-container {
  text-align: center;
  padding: 3rem;
}

.greetings-title {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a202c;
}

.greetings-description {
  font-size: 1.2rem;
  font-weight: 300;
  color: #4a5568;
  margin-bottom: 2rem;
}

.greetings-grid {
  margin-top: 5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}
</style>
