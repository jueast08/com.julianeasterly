<template>
  <div id="home" class="home col-12">
    <div class="home__background" :style="background"></div>
    <div ref="container" class="home__container col-12 col-l-6">
      <section class="home__container__titles col-12">
        <h1 class="home__container__titles__title">{{ content.title }}</h1>
        <h1 class="home__container__titles__title">{{ content.title2 }}</h1>
      </section>
      <section class="home__container__subtitles col-12">
        <p class="home__container__subtitles__subtitle">
          {{ content.subtitle }}
        </p>
      </section>
    </div>
    <div class="home__portrait col-12 col-xl-6">
      <div class="home__portrait__image" :style="portrait"></div>
    </div>
    <div class="home__down-arrow"></div>
  </div>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheHomeSection",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      observerIterator: null,
    };
  },
  computed: {
    portrait() {
      if (!this.content.portrait) {
        return {};
      }

      return {
        opacity: this.content.portrait.opacity,
        backgroundImage:
          "url(" +
          process.env.VUE_APP_STRAPI_API_URL +
          this.content.portrait.image.url +
          ")",
      };
    },
    background() {
      if (!this.content.background_overlay) {
        return {};
      }

      return {
        opacity: this.content.background_overlay.opacity,
        backgroundImage:
          "url(" +
          process.env.VUE_APP_STRAPI_API_URL +
          this.content.background_overlay.image.url +
          ")",
      };
    },
  },
  mounted() {
    InViewportObserver.observe(
      this.$refs.container,
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

.home {
  position: relative;
  height: 100vh;
  background: global.$primary-black;
  overflow: hidden;

  &__background {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 50%;
    margin-bottom: 25px;
    padding: 0 30px;
    padding-top: calc(30px + #{global.$xs-header-height});
    @include global.border-box;
    opacity: 0;
    transition: opacity ease-in 0.6s;

    &__titles {
      text-align: left;

      &__title {
        margin: 0;
        transition: transform ease-in-out 0.5s;
        @include global.h1-font;

        &:nth-child(1) {
          transform: translateX(20px);
          color: global.$primary-white;
        }

        &:nth-child(2) {
          transform: translateX(40px);
          color: global.$primary-color;
        }
      }
    }

    &__subtitles {
      text-align: left;

      &__subtitle {
        @include global.subtitle-font;
        color: global.$primary-white;
      }
    }

    &--in-view {
      opacity: 1;
    }

    &--in-view & {
      &__titles {
        &__title {
          transform: translateX(0);
        }
      }
    }
  }

  &__portrait {
    position: relative;
    height: 50%;

    &__image {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }

  &__down-arrow {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);

    z-index: 99;
    height: 10px;
    width: 10px;
    border-width: 0px 5px 5px 0;
    border-style: solid;
    border-color: global.$primary-white;
    animation: moveArrow 0.7s infinite alternate;
    @include global.keyframes(moveArrow) {
      from {
        bottom: 50px;
      }
      to {
        bottom: 45px;
      }
    }
  }
}

@include global.adapt-to-screen("xs-rotated") {
  .home {
    &__container {
      display: flex;
      justify-content: center;
      height: 100%;
    }

    &__background {
      display: none;
    }
  }
}

@include global.adapt-to-screen("xl") {
  .home {
    display: flex;

    &__container {
      flex-direction: column;
      justify-content: center;
      height: 100%;

      &__titles {
        text-align: right;
        transition: transform ease-in-out 0.5s;
      }

      &__subtitles {
        text-align: right;
      }
    }

    &__portrait {
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
      height: 100vh;

      &__image {
        background-attachment: scroll;
        background-position: right;
      }
    }

    &__down-arrow {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
