<script setup lang="ts">
const country = defineProps({
  flag: String,
  name: String,
  population: Number,
  region: String,
  capital: Array,
})
</script>
<template>
  <NuxtLink :to="country.name" class="wrapper">
    <div class="country-card">
      <img :src="country.flag" />
      <div class="country-content-container">
        <h3>{{ country.name }}</h3>
        <div class="country-description-container">
          <div>
            <h5>Population: {{ " " }}</h5>
            <span>
              {{ country.population ? formatNumber(country.population) : "" }}
            </span>
          </div>
          <div>
            <h5>Region: {{ " " }}</h5>
            <span>{{ country.region }}</span>
          </div>
          <div>
            <h5>Capital:{{ " " }}</h5>
            <span>
              {{ country.capital !== undefined ? country.capital[0] : "No capital" }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.country-card {
  height: 336px;
  width: 264px;
  cursor: pointer;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--background-secondary);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
}

.country-card img {
  display: block;
  height: 160px;
  width: 264px;
  object-fit: cover;
}

.country-card .country-content-container {
  margin-top: 27px;
  margin-left: 25px;
}

.country-card h3 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 13px;
}
.country-card .country-description-container {
  line-height: 1.5;
}
.country-card .country-description-container h5 {
  display: inline;
  font-size: 13px;
  font-weight: 600;
}
.country-card .country-description-container span {
  color: var(--text-color-country-card-value);
  font-size: 14px;
}

@media (max-width: 750px) {
  .wrapper {
    max-width: 528px;
    width: 100%;
    align-self: center;
  }
  .country-card {
    height: 674px;
    width: 100%;
  }

  .country-card .country-content-container {
    margin-top: 53px;
    margin-left: 47px;
  }
  .country-card img {
    height: auto;
    width: 100%;
  }
  .country-card h3 {
    font-size: 35px;
    margin-bottom: 28px;
  }
  .country-card .country-description-container {
    line-height: 1.7;
  }
  .country-card .country-description-container h5 {
    font-size: 27px;
  }
  .country-card .country-description-container span {
    font-size: 28px;
  }
}

@media (max-width: 550px) {
  .country-card {
    height: 570px;
  }
}
@media (max-width: 480px) {
  .country-card {
    min-height: 460px;
    height: 100%;
  }
  .country-card .country-content-container {
    margin-top: 35px;
    margin-left: 30px;
  }
  .country-card .country-description-container {
    padding-bottom: 40px;
  }
  .country-card h3 {
    margin-bottom: 15px;
  }
}
</style>
