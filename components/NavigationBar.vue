<template>
  <div class="navigation-bar-wrapper">
    <div class="navigation-bar container-main">
      <NuxtLink to="/" class="home-link">Where in the world?</NuxtLink>
      <ColorModePicker />
    </div>
  </div>
</template>

<style scoped>
.navigation-bar-wrapper {
  display: flex;
  justify-content: center;
  background-color: var(--background-secondary);
  box-shadow: 0 1px 10px 10px var(--box-shadow-color);
}
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.home-link {
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
}

@media only screen and (max-width: 480px) {
  .home-link {
    font-size: 14px;
  }
}

@media (max-width: 750px) {
  .navigation-bar {
    height: 160px;
  }
  .home-link {
    font-size: 28px;
  }
}
</style>
