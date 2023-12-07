<template>
  <div class="navigation-bar-container">
    <div class="navigation-bar">
      <NuxtLink to="/" class="home-button">Where in the world?</NuxtLink>
      <ColorModePicker />
    </div>
  </div>
</template>

<style scoped>
.navigation-bar-container {
  display: flex;
  justify-content: center;
}
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  height: 80px;
  margin-left: 30px;
  margin-right: 30px;
}
.home-button {
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
}

@media only screen and (max-width: 480px) {
  .navigation-bar {
    margin-left: 15px;
    margin-right: 15px;
  }
  .home-button {
    font-size: 14px;
  }
}
</style>
