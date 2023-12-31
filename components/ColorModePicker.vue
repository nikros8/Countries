<script setup lang="ts">
const colorMode = useColorMode()

const colorModeLabel = computed(() => {
  if (colorMode.value == "dark") {
    return "Light"
  } else if (colorMode.value == "light") {
    return "Dark"
  } else return ""
})

const changeColorMode = () => {
  if (colorMode.value == "dark") {
    colorMode.preference = "light"
  } else {
    colorMode.preference = "dark"
  }
}
</script>

<template>
  <div>
    <ColorScheme tag="span">
      <a @click="changeColorMode()" class="color-mode-container">
        <span class="color-mode-icon material-symbols-outlined"> brightness_2 </span>
        <span class="color-mode-text">{{ colorModeLabel }} Mode</span>
      </a>
    </ColorScheme>
  </div>
</template>

<style scoped>
.color-mode-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.color-mode-container .color-mode-text {
  font-size: 16px;
  font-weight: 600;
}
.color-mode-container .color-mode-icon {
  font-size: 22px;
  margin-right: 9px;
  transform: rotate(135deg);
}

@media (max-width: 750px) {
  .color-mode-container .color-mode-text {
    font-size: 23px;
  }
}

@media (max-width: 550px) {
  .color-mode-container .color-mode-text {
    font-size: 20px;
  }
}
@media (max-width: 500px) {
  .color-mode-container .color-mode-text {
    font-size: 17px;
  }
}
</style>
