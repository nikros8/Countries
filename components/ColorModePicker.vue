<script setup>
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
        <font-awesome-icon class="color-mode-icon" icon="fa-regular fa-moon" />
        <span class="color-mode-text">{{ colorModeLabel }} Mode</span>
      </a>
    </ColorScheme>
  </div>
</template>

<style scoped>
.color-mode-container {
  display: flex;
  align-items: center;
}

.color-mode-container .color-mode-text {
  font-size: 16px;
  font-weight: 600px;
}
.color-mode-container .color-mode-icon {
  font-size: 18px;
  margin-right: 9px;
  transform: rotate(-20deg);
}

@media only screen and (max-width: 480px) {
  .color-mode-container .color-mode-text {
    font-size: 12px;
  }
}
</style>
