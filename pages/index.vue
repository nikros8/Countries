<script setup>
const {
  data: countries,
  loading,
  error,
  refresh,
} = await useFetch("https://restcountries.com/v3.1/all", {
  transform: (countries) => {
    return countries.map((country) => ({
      flag: country.flags.svg,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    }))
  },
})
</script>

<template>
  <div>
    <ul>
      <li v-for="country in countries">
        <img :src="country.flag" width="30px" height="auto" alt="" />
        {{
          country.name +
          " " +
          country.population +
          " " +
          country.region +
          " " +
          country.capital
        }}
      </li>
    </ul>
  </div>
</template>
