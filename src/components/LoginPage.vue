<script setup lang="ts">
const test = "test";
</script>

<template>
  <div class="h-screen">
    <img
      src="@/assets/login/illustration.png"
      class="w-full shadow-inner"
      alt=""
    />
    <div class="pt-8 font-bold">
      <p class="font-raleway text-3xl text-center">Ma P’tite Colette, pour</p>
      <p class="font-raleway text-3xl text-center">des séniors connectés</p>
    </div>
    <div class="flex justify-center items-center flex-col pt-8">
      <div>
        <button
          class="py-4 px-7 bg-primary-600 rounded-full text-white text-lg font-semibold mb-10 active:bg-primary-700"
        >
          Inscription
        </button>
      </div>
      <div>
        <button class="py-4 px-7 text-primary text-lg font-semibold">
          Connexion
        </button>
      </div>
    </div>
  </div>
</template>
