<template>
  <div id="app">
    <loader-overlay
      :animation-delay="'2s'"
      v-if="!loaded || !timeup || this.$apollo.loading"
    />
    <the-landing-page ref="landing-page" v-else />
  </div>
</template>

<script>
import TheLandingPage from "Pages/TheLandingPage";
import LoaderOverlay from "UI/LoaderOverlay";

export default {
  name: "App",
  components: {
    TheLandingPage,
    LoaderOverlay,
  },
  data() {
    return {
      loaded: false,
      timeup: false,
    };
  },
  async mounted() {
    const closeLoader = () => {
      if (process.env.NODE_ENV === "development") {
        console.log(
          "page fully loaded",
          this.timeup ? "" : "and awaiting animation timer."
        );
      }
      this.loaded = true;
      window.removeEventListener("load", closeLoader);
    };
    window.addEventListener("load", closeLoader);
    await new Promise((r) => setTimeout(r, 1000)).then(
      () => (this.timeup = true)
    );
  },
};
</script>
