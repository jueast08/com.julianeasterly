<template>
  <div id="app">
    <div v-if="!loaded && !timeup" class="loader col-s-12">
      <div class="loader__wrapper col-s-2">
        <logo-icon />
        <div class="loader__wrapper__message">Loading</div>
      </div>
    </div>
    <!-- <the-under-construction-Page ref="constrution_page" v-if="!loaded" /> -->
    <the-Landing-Page ref="landing-page" v-else />
  </div>
</template>

<script>
import TheLandingPage from "Pages/TheLandingPage";
// import TheUnderConstructionPage from "Pages/TheUnderConstructionPage";
import LogoIcon from "UI/LogoIcon";

export default {
  name: "App",
  components: {
    TheLandingPage,
    // TheUnderConstructionPage,
    LogoIcon
  },
  data() {
    return {
      loaded: false,
      timeup: false
    };
  },
  computed: {
    isUnderConstruction() {
      return process.env.VUE_APP_UNDER_CONSTRUCTION === "true";
    }
  },
  async mounted() {
    window.addEventListener("load", () => {
      this.loaded = true;
      window.removeEventListener("load");
    });

    await new Promise(r => setTimeout(r, 4000)).then(
      () => (this.timeup = true)
    );
    window.addEventListener("load", () => {
      this.loaded = true;
      window.removeEventListener("load");
    });
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.hide {
  display: hidden;
}

.loader {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: global.$primary-black;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ::v-deep .logo-icon {
      width: 25%;
      &__secondary {
        fill: global.$primary-white;
      }
      &__main {
        fill: global.$primary-white;
        &__arrow {
          transform-origin: center;
          animation: arrow_rotate 3s infinite;
          @include global.keyframes(arrow_rotate) {
            0% {
              transform: rotate(-55deg);
              fill: global.$primary-white;
            }
            25% {
              transform: rotate(-60deg);
              fill: global.$primary-white;
            }
            50% {
              transform: rotate(-50deg);
              fill: global.$primary-white;
            }
            75% {
              transform: rotate(-55deg);
              fill: global.$primary-white;
            }
            100% {
              transform: rotate(0deg);
              fill: global.$primary-color;
            }
          }
        }
        &__direction {
          transform-origin: center;
          animation: to-green 2s infinite;
          @include global.keyframes(to-green) {
            0% {
            }
            25% {
            }
            50% {
              fill: global.$primary-white;
            }
            75% {
              fill: global.$primary-white;
            }
            100% {
              fill: global.$primary-color;
            }
          }
        }
      }
    }
    &__message {
      margin-top: 20px;
      color: global.$primary-white;
      @include global.p-font;
      animation: pulse 2s infinite alternate;
      @include global.keyframes(pulse) {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
}
</style>