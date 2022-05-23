<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
      >
        <div class="w-full p-5 mx-auto sm:max-w-md">
          <img
            src="@/assets/img/success-illustration.svg"
            alt
            class="mb-10 w-4xl"
          />
          <h2 class="mb-2 text-2xl font-bold text-center">Payment Success</h2>
          <p class="mb-5 text-lg text-center text-gray-500">
            Ready to explore our high quality design?
          </p>
        </div>
        <RouterLink
          to="/"
          class="px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
          >Explore Now</RouterLink
        >
      </div>
    </div>
  </div>
</template>
