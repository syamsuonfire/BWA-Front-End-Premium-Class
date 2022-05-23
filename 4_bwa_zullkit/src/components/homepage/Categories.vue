<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CategoryCard from './../CategoryCard.vue'

const categories = ref([])

async function getCategoriesData() {
    try {
        const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/categories?limit=4')
        categories.value = response.data.data.data
    } catch (error) {
        console.error(error)
    }   
}

onMounted(() => {
    getCategoriesData()
})

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoryCard 
                v-for="category in categories" 
                :id="category.id" 
                :key="category.id" 
                :title="category.name" 
                :count="category.products_count"
                :image="category.thumbnails" />
        </div>
    </div>
</template>