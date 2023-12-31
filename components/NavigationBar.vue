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

@media (max-width: 750px) {
  .navigation-bar {
    height: 160px;
  }
  .home-link {
    font-size: 28px;
  }
}
@media (max-width: 550px) {
  .home-link {
    font-size: 25px;
  }
}
@media (max-width: 500px) {
  .home-link {
    font-size: 22px;
  }
}
@media (max-width: 480px) {
  .navigation-bar {
    height: 100px;
  }
}
</style>
