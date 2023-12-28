<script setup lang="ts">
const emit = defineEmits(["region-selected"])

const isActive = ref(false)
const selectedRegion = reactive({ text: "All", value: "All" }) // Use let for reactive primitive values
const regions = reactive([
  { text: "All", value: "All" },
  { text: "Africa", value: "Africa" },
  { text: "America", value: "Americas" },
  { text: "Asia", value: "Asia" },
  { text: "Europe", value: "Europe" },
  { text: "Oceania", value: "Oceania" },
])

const handleRegionSelected = (region: { value: string; text: string }) => {
  selectedRegion.value = region.value
  selectedRegion.text = region.text

  isActive.value = false
  emit("region-selected", selectedRegion)
}
</script>
<template>
  <div class="custom-select" :class="{ active: isActive }">
    <button
      @click="isActive = !isActive"
      class="select-button"
      role="combobox"
      aria-labelledby="select button"
      aria-haspopup="listbox"
      :aria-expanded="isActive"
      aria-controls="select-dropdown"
    >
      <span ref="selected" class="selected-value">{{
        selectedRegion.value == "All" ? "Filter by Region" : selectedRegion.text
      }}</span>
      <span class="arrow"></span>
    </button>
    <ul class="select-dropdown" role="listbox" id="select-dropdown">
      <li v-for="region in regions" @click="handleRegionSelected(region)" role="option">
        <input
          type="radio"
          :checked="selectedRegion.value == region.value ? true : false"
          :id="region.value"
        />
        <label :for="region.value">{{ region.text }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
select {
  width: 200px;
  text-indent: 23px;
  flex-shrink: 0;
  color: var(--text-color-search-filter-input);
  background-color: var(--background-secondary);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
}

.custom-select {
  position: relative;
  width: 200px;
  flex-shrink: 0;
  font-size: 14px;
}

.custom-select ul {
  color: var(--text-color-search-filter-input);
}

.select-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  font-size: 14px;
  color: var(--text-color-search-filter-input);
  background-color: var(--background-secondary);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
  cursor: pointer;
}

.selected-value {
  margin-left: 20px;
}

.arrow {
  margin-right: 19px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--text-color-search-filter-input);
  transition: transform ease-in-out 0.3s;
}

.custom-select.active .arrow {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  max-height: 164px;
  width: 100%;
  margin-top: 4px;
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  overflow-y: auto;
  list-style: none;
  transition: 0.5s ease;
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
}

.custom-select.active .select-dropdown {
  opacity: 1;
  visibility: visible;
  transform: scaleY(1);
}

.select-dropdown li {
  position: relative;
  cursor: pointer;
  display: flex;
  /* gap: 1rem; */
  align-items: center;
}

.select-dropdown li label {
  width: 100%;
  padding: 8px 10px;
  cursor: pointer;
}

.select-dropdown::-webkit-scrollbar {
  width: 7px;
}
.select-dropdown::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

.select-dropdown::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.select-dropdown li:hover,
.select-dropdown input:checked ~ label {
  background-color: #ccc;
}

.select-dropdown input[type="radio"] {
  position: absolute;
  left: 0;
  opacity: 0;
  pointer-events: none;
}
</style>
