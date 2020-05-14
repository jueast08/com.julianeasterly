<template>
  <div id="app">
    <the-under-construction-Page v-if="isUnderConstruction" />
    <the-Landing-Page v-else />
  </div>
</template>

<script>
import TheLandingPage from "Pages/TheLandingPage";
import TheUnderConstructionPage from "Pages/TheUnderConstructionPage";

export default {
  name: "App",
  components: {
    TheLandingPage,
    TheUnderConstructionPage
  },
  computed: {
    isUnderConstruction() {
      return process.env.VUE_APP_UNDER_CONSTRUCTION === "true";
    }
  }
};
</script>
