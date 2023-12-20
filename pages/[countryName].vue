<script setup>
const route = useRoute()

const { data: countryData } = await useFetch(
  `https://restcountries.com/v3.1/name/${route.params.countryName}?fullText=true`,
  {
    transform: (countryData) => {
      return countryData.map((country) => ({
        flag: country.flags.svg,
        name: country.name.common,
        nativeName: Object.values(country.name.nativeName)[0].common,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        tld: country.tld,
        currencies: country.currencies,
        languages: country.languages,
      }))
    },
    onRequestError({ request, options, error }) {
      console.log("REGUEST ERRORR " + error)
    },
    onResponseError({ request, response, options }) {
      console.log("RESPONSE ERRORR " + error)
    },
  }
)
if (!countryData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  })
}
const country = ref(countryData.value[0])
</script>

<template>
  <h2>{{ country.flag }}</h2>
  <h2>{{ country.name }}</h2>
  <h2>{{ country.nativeName }}</h2>
  <h2>{{ formatNumer(country.population) }}</h2>
  <h2>{{ country.region }}</h2>
  <h2>{{ country.subregion }}</h2>
  <h2>{{ country.capital }}</h2>
  <h2>{{ country.tld }}</h2>
  <h2>{{ country.currencies }}</h2>
  <h2>{{ country.languages }}</h2>
</template>

<style scoped></style>
