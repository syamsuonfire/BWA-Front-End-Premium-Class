<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";

import FeatureLists from "@/components/authentication/FeatureLists.vue";

async function checkout(price) {
  try {
    const response = await axios.post(
      "https://zullkit-backend.buildwithangga.id/api/checkout",
      {
        payment_total: price,
        payment_status: "PENDING",
      },
      {
        headers: {
          Authorization:
            localStorage.getItem("token_type") +
            " " +
            localStorage.getItem("access_token"),
        },
      }
    );
    window.location.href = response.data.data.payment_url;
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main>
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full sm:justify-center sm:pt-0"
        >
          <div class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
            <h2 class="mb-4 text-5xl font-bold text-center">
              <span class="block lg:mb-2">Friendly Pricing,</span>
              <span class="block">High Quality Design</span>
            </h2>
            <p class="mb-5 text-lg text-center text-gray-500">
              Working faster and better than before
            </p>
          </div>
          <div class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div class="p-8 border rounded-3xl">
                  <h1 class="text-5xl font-semibold">
                    IDR 2,000
                    <span class="text-xl font-light text-gray-500">/month</span>
                  </h1>
                  <h2 class="text-lg font-semibold mt-7">Basic Plan</h2>
                  <p class="mb-6 text-gray-500">Suitable for new team</p>
                  <ul class="mb-6 text-gray-700">
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Customizable layers
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Official documentation
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      SVG icons
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      SVG illustrations
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Pre-built design screen
                    </li>
                  </ul>
                  <button
                    @click="checkout(2000)"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
              <div>
                <div class="p-8 border rounded-3xl">
                  <h1 class="text-5xl font-semibold">
                    IDR 9,000
                    <span class="text-xl font-light text-gray-500">/month</span>
                  </h1>
                  <h2 class="text-lg font-semibold mt-7">Gold Plan</h2>
                  <p class="mb-6 text-gray-500">Suitable for big company</p>
                  <ul class="mb-6 text-gray-700">
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Customizable layers
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Official documentation
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      SVG icons
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      SVG illustrations
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Pre-built design screen
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Coded template
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Support 24/7
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Private designer group
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                        alt
                      />
                      Unlock cloning app
                    </li>
                  </ul>
                  <button
                    @click="checkout(9000)"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
            <div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0">
              <FeatureLists />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
