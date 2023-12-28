import { defineStore } from "pinia"
import { ref, computed, onBeforeMount } from "vue"

export const useCountriesStore = defineStore("CountriesStore", () => {
  const countriesData = ref<Country[]>([])
  const loading = ref(true)

  function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        countriesData.value = data
        loading.value = false // Set loading to false once data is fetched
        console.log("Data is fetched from store. loading = " + loading.value)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        loading.value = false // Set loading to false in case of an error
      })
  }

  onMounted(() => {
    fetchCountries()
  })

  const getCountryNameByCca3Key = computed(() => {
    const borders: Record<string, string> = {}
    countriesData.value.forEach((country: Country) => {
      borders[country.cca3] = country.name.common
    })
    return borders
  })

  return {
    fetchCountries,
    countriesData,
    getCountryNameByCca3Key,
    loading,
  }
})
