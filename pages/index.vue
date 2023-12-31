<script setup lang="ts">
const countriesStore = useCountriesStore()

const countries = ref()
const originalCountries = ref()
const filteredCountries = ref()
const searchInput = ref("")

const isSearching = ref(false)
const isRegionSelected = ref(false)
const filteredCountriesByRegion = ref([])

watchEffect(() => {
  countries.value = countriesStore.countriesData
  originalCountries.value = countries.value
  filteredCountries.value = originalCountries.value
})

// Access store properties or methods

const handleSearch = (searchQuery: string) => {
  searchInput.value = searchQuery
  // Filter countries based on the search query
  if (searchQuery && !isRegionSelected.value) {
    filteredCountries.value = originalCountries.value.filter((country: Country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    isSearching.value = true
    console.log("vyhladavam, select na ALL")
  } else if (!searchQuery && !isRegionSelected.value) {
    filteredCountries.value = originalCountries.value
    isSearching.value = false
    console.log("NEvyhladavam, select na ALL")
  } else if (searchQuery && isRegionSelected.value) {
    filteredCountries.value = filteredCountriesByRegion.value.filter((country: Country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    isSearching.value = true
    console.log("vyhladavam, select je CUSTOM")
  } else if (!searchQuery && isRegionSelected.value) {
    filteredCountries.value = filteredCountriesByRegion.value
    isSearching.value = false
    console.log("NEvyhladavam, select je CUSTOM")
  }
}

const handleRegionSelected = (selectedRegion: { value: string; text: string }) => {
  // Filter countries based on the selected region
  if (selectedRegion.value === "All" && !isSearching.value) {
    filteredCountries.value = originalCountries.value
    filteredCountriesByRegion.value.splice(0)
    isRegionSelected.value = false
    console.log("Select na ALL, NEvyhladavam")
  } else if (selectedRegion.value !== "All" && !isSearching.value) {
    filteredCountries.value = originalCountries.value.filter(
      (country: Country) => country.region == selectedRegion.value
    )
    filteredCountriesByRegion.value = filteredCountries.value
    isRegionSelected.value = true
    console.log("Select na CUSTOM, NEvyhladavam")
  } else if (selectedRegion.value === "All" && isSearching.value) {
    filteredCountries.value = originalCountries.value
    filteredCountriesByRegion.value.splice(0)
    isRegionSelected.value = false
    handleSearch(searchInput.value)
    console.log("Select na ALL, vyhladavam")
  } else if (selectedRegion.value !== "All" && isSearching.value) {
    filteredCountries.value = originalCountries.value.filter(
      (country: Country) => country.region == selectedRegion.value
    )
    filteredCountriesByRegion.value = filteredCountries.value
    isRegionSelected.value = true
    handleSearch(searchInput.value)
    console.log("Select na CUSTOM, vyhladavam")
  }
}
</script>

<template>
  <main>
    <div class="container-main">
      <div class="filters-container">
        <SearchFilterInput @search="handleSearch" />
        <SelectFilterInput @region-selected="handleRegionSelected" />
      </div>
      <div class="countries-list-container">
        <CountryCard
          v-for="country in filteredCountries"
          :key="country.name.common"
          :flag="country.flags.svg"
          :name="country.name.common"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.filters-container {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 48px;
}
.countries-list-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 74px;
  row-gap: 75px;
}

.countries-list-container::after {
  content: "";
  flex: auto;
}

@media (max-width: 750px) {
  .filters-container {
    flex-direction: column;
    margin-top: 48px;
    margin-bottom: 64px;
  }
}
</style>
