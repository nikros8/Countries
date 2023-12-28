<script setup lang="ts">
const countries = ref<Country[]>([])
const getCountryNameByCca3Key = ref<Record<string, string>>({})
const mainLanguage = ref()
const countriesStore = useCountriesStore()

const route = useRoute()
const router = useRouter()
const selectedCountry = ref<Country>()

function goBack() {
  router.go(-1)
}

// Use fetchCountries only if loading is still true
watchEffect(() => {
  countries.value = countriesStore.countriesData
  getCountryNameByCca3Key.value = countriesStore.getCountryNameByCca3Key
  selectedCountry.value =
    countries.value.find((country) => country.name.common === route.params.countryName) || undefined

  mainLanguage.value = Object.keys(selectedCountry.value?.languages || "")[0]
  console.log("Data is added")
})

const selectedCountryCurrencies = computed(() => {
  const currencies = selectedCountry.value?.currencies
  return currencies
    ? Object.keys(currencies)
        .map((key) => currencies[key].name)
        .join(", ")
    : []
})

const selectedCountryLanguages = computed(() => {
  const languages = selectedCountry.value?.languages
  return languages
    ? Object.keys(languages)
        .map((key) => languages[key])
        .join(", ")
    : []
})
// if (!loading && !selectedCountry.value) {
//   // Country not found, throw a 404 error
//   throw createError({
//     statusCode: 404,
//     statusMessage: "Page Not Found",
//   })
// }
</script>

<template>
  <main>
    <div class="container-main">
      <NuxtLink @click="goBack" class="back-button">← Back</NuxtLink>
      <div v-if="selectedCountry" class="product-detail-container">
        <div class="country-flag-image">
          <img :src="selectedCountry.flags.svg" />
        </div>
        <div class="product-detail-description-container">
          <span class="country-name">{{ selectedCountry.name.common }}</span>
          <div class="product-detail-description">
            <div>
              <div>
                <span class="title">Native Name: </span>
                <span>{{ selectedCountry.name.nativeName[mainLanguage].common }}</span>
              </div>
              <div>
                <span class="title">Population: </span>
                <span>{{ formatNumber(selectedCountry?.population || 0) }}</span>
              </div>
              <div>
                <span class="title">Region: </span>
                <span>{{ selectedCountry.region }}</span>
              </div>
              <div>
                <span class="title">Sub Region: </span>
                <span>{{ selectedCountry.subregion }}</span>
              </div>
              <div v-if="selectedCountry.capital">
                {{ console.log(selectedCountry.capital) }}
                <span class="title">Capital: </span>
                <span>{{ selectedCountry.capital[0] }}</span>
              </div>
            </div>
            <div style="margin-left: auto">
              <div v-if="selectedCountry.tld">
                <span class="title">Top Level Domain: </span>
                <span>{{ selectedCountry.tld[0] }}</span>
              </div>
              <div v-if="selectedCountryCurrencies">
                <span class="title">Currencies: </span>
                <span>{{ selectedCountryCurrencies }}</span>
              </div>
              <div v-if="selectedCountryLanguages">
                <span class="title">Languages: </span>
                <span>{{ selectedCountryLanguages }}</span>
              </div>
            </div>
          </div>
          <div v-if="selectedCountry.borders" class="border-countries-container">
            <span class="title">Border Countries:</span>
            <div class="wrapper">
              <div
                class="border-country"
                v-if="selectedCountry.borders"
                v-for="borderKey in selectedCountry.borders"
                :key="borderKey"
              >
                {{ getCountryNameByCca3Key[borderKey] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

img {
  width: 100%;
  height: auto;
}

.country-flag-image {
  max-width: 560px;
  width: 100%;
  height: auto;
}

.back-button {
  cursor: pointer;
  display: inline-block;
  background-color: var(--background-secondary);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
  border-radius: var(--border-radius);
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 39px;
  padding-left: 45px;
}

.product-detail-container {
  display: flex;
  margin-top: 80px;
}
.product-detail-description-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 38px;
  margin-left: 147px;
}
.product-detail-description {
  display: flex;
  line-height: 2.1;
  font-size: 15px;
  margin-top: 25px;
}

.title {
  font-weight: 600;
  font-size: 15px;
}

.country-name {
  font-size: 31px;
  font-weight: 800;
}

.border-countries-container {
  display: flex;
  align-items: baseline;
  font-size: 13px;
  margin-top: 68px;
}

.border-countries-container .title {
  flex-shrink: 0;
}

.border-country {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 18px;
  margin-bottom: 10px;
  height: 28px;
  width: 96px;
  background-color: var(--background-secondary);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
