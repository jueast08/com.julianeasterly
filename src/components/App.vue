<template>
  <div id="app">
    <the-loading-overlay />
    <the-Landing-Page />
  </div>
</template>

<script>
import TheLandingPage from "Pages/TheLandingPage";
import TheLoadingOverlay from "Layout/TheLoadingOverlay";

export default {
  name: "App",
  components: {
    TheLandingPage,
    TheLoadingOverlay
  }
};
</script>
