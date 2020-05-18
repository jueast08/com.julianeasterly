<template>
  <div class="under-construction-page col-12">
    <div class="under-construction-page__wrapper col-12 col-s-6">
      <div class="under-construction-page__wrapper__title">
        <div class="under-construction-page__wrapper__title__logo">
          <logo-icon />
        </div>
        <h1 class="col-12">
          JULIAN
          <span class="primary-font-color">EASTERLY</span>
        </h1>
      </div>
      <div class="under-construction-page__wrapper__links col-s-4">
        <social-network-button href="mailto: contact@julianeasterly.com">
          <font-awesome-icon :icon="['fas', 'envelope']" fixed-width />
        </social-network-button>
        <social-network-button href="https://github.com/jueast08">
          <font-awesome-icon :icon="['fab', 'github']" fixed-width />
        </social-network-button>
        <social-network-button href="https://www.linkedin.com/in/julianeasterly/">
          <font-awesome-icon :icon="['fab', 'linkedin']" fixed-width />
        </social-network-button>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "UI/LogoIcon";
import SocialNetworkButton from "Bases/BaseSocialNetworkButton";

export default {
  name: "TheUnderConstructionPage",
  components: { LogoIcon, SocialNetworkButton }
};
</script>

<style lang="scss">
@use 'global';

body {
  height: 100vh;
  max-width: 100%;
  padding: 0;
  margin: 0;

  .under-construction-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @include global.border-box;
    background: global.$primary-black;
    &__wrapper {
      padding: 0 50px;

      &__title {
        &__logo {
          width: 75px;
          margin: 0 auto;
          .logo-icon {
            &__secondary {
              fill: global.$primary-white;
            }
            &__main {
              fill: global.$primary-color;
            }
          }
        }
        h1 {
          text-align: center;
          margin-top: 10px;
          margin-left: auto;
          margin-right: auto;
          color: global.$primary-white;
          @include global.h1-font(
            $size-s: 20px,
            $size-m: 25px,
            $size-l: 30px,
            $size-xl: 35px,
            $weight: 400
          );
        }
      }
      &__links {
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        button {
          color: global.$primary-color;
        }
      }
    }
  }

  @include global.adapt-to-screen("m") {
    .under-construction-page {
      &__wrapper {
        padding: 0;
      }
    }
  }
}
</style>
