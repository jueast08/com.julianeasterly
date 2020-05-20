<template>
  <div class="loader col-s-12">
    <div class="loader__wrapper col-s-2">
      <logo-icon ref="logo-icon" />
      <div ref="message" class="loader__wrapper__message">Loading</div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "UI/LogoIcon";

export default {
  name: "LoaderOverlay",
  props: {
    animationDuration: {
      type: String,
      required: false,
      default: "2s"
    }
  },
  components: {
    LogoIcon
  },
  mounted() {
    this.$refs["logo-icon"].$el
      .querySelectorAll(".logo-icon__main__direction, .logo-icon__main__arrow")
      .forEach(
        element => (element.style.animationDuration = this.animationDuration)
      );

    this.$refs.message.style.animationDuration = this.animationDuration;
  }
};
</script>

<style lang="scss" scoped>
@use 'global';
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
          animation: arrow_rotate 2s infinite;
          @include global.keyframes(arrow_rotate) {
            0% {
              transform: rotate(-180deg);
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
