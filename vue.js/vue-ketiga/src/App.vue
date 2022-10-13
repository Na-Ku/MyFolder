<script setup>
// import {createApp} from 'vue'
// import {reactive, ref} from 'vue'

import "./vue.css";
import { ref } from "vue";

// const app = createApp({})
const app = ref(0);
function increment() {
  app.value++;
}

const message = ref("Bagian Pertama");
const text = ref("");
</script>

<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <br />
    <button @click="increment">Mulai dari : {{ app }}</button> <br />
    <input type="text" v-model="text" placeholder="Tulis di sini" /> <br />
  </div>
</template>
