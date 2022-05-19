<script setup>
import {onMounted} from 'vue'
import { getApodToday } from './services/apodApi'
import { getNeows } from './services/neowsApi'
import { getEarthImages } from './services/earthImagesApi'
import { getMarsRoverImages } from './services/marsImagesApi'
import Home from './views/Home.vue'

const fetchApodToday = async () => {
    try {
      const data = await getApodToday()
      console.log(data)
    } catch (error) {
      console.log(`[fetchAPodToday]: ${error}`)
    }
  }

const fetchNeows = async () => {
  try {
    const data = await getNeows()
    console.log(data)
  } catch (error) {
    console.log(`[fetchNeows]: ${error}`)
  }
}

const fetcEarthImages = async () => {
  try {
    const data = await getEarthImages()
    console.log(data)
  } catch (error) {
    console.log(`[fetcEarthImages]: ${error}`)
  }
}

const fetchMarsImages = async () => {
  try {
    const data = await getMarsRoverImages('curiosity')
    console.log(data)
  } catch (error) {
    console.log(`[fetchMarsImages]: ${error}`)
  }
}

onMounted(() => {
  fetchApodToday()
  fetchNeows()
  fetcEarthImages()
  fetchMarsImages()
})

</script>

<template>
 <Home/>
</template>

