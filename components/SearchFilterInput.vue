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
input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: var(--text-color-input);
  font-weight: 300;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: var(--text-color-input);
  font-weight: 300;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: var(--text-color-input);
  font-weight: 300;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: var(--text-color-input);
  font-weight: 300;
}

.search-input-icon {
  position: absolute;
  color: var(--text-color-input);
  top: 50%;
  left: 31px;
  transform: translateY(-50%);
  font-size: 19px;
  pointer-events: none;
}

@media (max-width: 750px) {
  input {
    max-width: none;
    font-size: 23px;
    text-indent: 150px;
  }
  .search-input-container {
    height: 96px;
    flex-basis: auto;
    margin-right: 0;
    margin-bottom: 80px;
  }
  .search-input-icon {
    font-size: 43px;
    left: 60px;
  }
  input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    text-indent: 150px;
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    text-indent: 150px;
  }
  input:-ms-input-placeholder {
    /* IE 10+ */
    text-indent: 150px;
  }
  input:-moz-placeholder {
    /* Firefox 18- */
    text-indent: 150px;
  }
}
@media (max-width: 480px) {
  input {
    text-indent: 100px;
    font-size: 20px;
  }
  .search-input-container {
    height: 70px;
  }

  .search-input-container {
    margin-bottom: 30px;
  }
  .search-input-icon {
    left: 35px;
    font-size: 35px;
  }
  input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    text-indent: 100px;
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    text-indent: 100px;
  }
  input:-ms-input-placeholder {
    /* IE 10+ */
    text-indent: 100px;
  }
  input:-moz-placeholder {
    /* Firefox 18- */
    text-indent: 100px;
  }
}
</style>
