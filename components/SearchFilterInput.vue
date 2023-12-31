<script setup lang="ts">
const emit = defineEmits(["search"])

const searchQuery = ref("")

const handleSearch = () => {
  // Emit the 'search' event with the search query
  emit("search", searchQuery.value)
}
</script>

<template>
  <div class="search-input-container">
    <span class="search-input-icon material-symbols-outlined"> search </span>
    <input
      v-model="searchQuery"
      @input="handleSearch"
      type="search"
      placeholder="Search for a country..."
    />
  </div>
</template>

<style scoped>
.search-input-container {
  position: relative;
  height: 56px;
  flex-basis: 480px;
  margin-right: 20px;
}

input {
  max-width: 480px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-indent: 75px;
  background-color: var(--background-secondary);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
  border: none;
  border-radius: var(--border-radius);
}

.search-input-icon {
  position: absolute;
  color: var(--text-color-secondary);

  top: 50%;
  left: 31px;
  transform: translateY(-50%);
  font-size: 19px;
  pointer-events: none;
}

@media (max-width: 750px) {
  input {
    max-width: none;
  }
  .search-input-container {
    height: 96px;
    flex-basis: auto;
    margin-right: 0;
    margin-bottom: 80px;
  }
}
</style>
