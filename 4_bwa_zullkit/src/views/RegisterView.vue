<script setup>
import RegisterForm from "@/components/authentication/RegisterForm.vue";

import FeatureLists from "../components/authentication/FeatureLists.vue";
</script>

<template>
  <main>
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
        >
          <div class="w-full p-5 mx-auto md:max-w-4xl">
            <h2 class="mb-10 text-5xl font-bold text-center">
              <span class="block lg:mb-2">Join & Get Our</span>
              <span class="block">Pro Benefits</span>
            </h2>
          </div>
          <div class="w-full p-5 mx-auto md:max-w-4xl">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="mx-auto md:mx-0">
                <FeatureLists />         
              </div>
              <div>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
