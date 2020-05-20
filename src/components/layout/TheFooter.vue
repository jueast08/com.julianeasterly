<template>
  <footer id="footer" class="footer col-12">
    <div class="footer__container col-12 col-s-10 col-m-10 col-l-8 col-xl-8">
      <div class="footer__container__logo-group col-12">
        <div class="footer__container__logo-group__logo">
          <logo-icon />
          <div class="footer__container__logo-group__logo__text">JULIAN EASTERLY</div>
        </div>
      </div>
      <div class="footer__container__link-group col-12">
        <div
          class="footer__container__link-group__link"
          v-for="(link, index) in links"
          :key="link + index"
          @click="scrollToId(link.toLowerCase())"
        >{{ link }}</div>
      </div>
    </div>
    <div class="footer__social-network-group col-12">
      <div class="footer__social-network-group__wrapper col-12 col-s-6 col-m-4">
        <social-network-button href="https://www.linkedin.com/in/julianeasterly/">
          <font-awesome-icon :icon="['fab', 'linkedin']" fixed-width />
        </social-network-button>
        <social-network-button href="https://github.com/jueast08">
          <font-awesome-icon :icon="['fab', 'github']" fixed-width />
        </social-network-button>
        <social-network-button href="https://twitter.com/jueast08">
          <font-awesome-icon :icon="['fab', 'twitter']" fixed-width />
        </social-network-button>
      </div>
    </div>
    <div class="footer__credits col-12 col-s-10 col-m-10 col-l-8 col-xl-8">
      <div class="footer__credits__credit col-12">
        Designed and Coded Julian EASTERLY with Gravit.io and VueJS
        <br />Made with
        <span>&#10084;</span> in Strasbourg, France during the
        2020 Coronavirus lockdown
      </div>
    </div>
  </footer>
</template>

<script>
import SocialNetworkButton from "Bases/BaseSocialNetworkButton";
import LogoIcon from "UI/LogoIcon";
import scrollToId from "Utility/ScrollHelper";

export default {
  name: "TheFooter",
  data() {
    return {
      links: ["About", "Skills", "Experience", "Education", "Contact"] //@TODO refactor. this data is repeated in the header
    };
  },
  components: { LogoIcon, SocialNetworkButton },
  methods: {
    scrollToId
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: global.$primary-black;
  &__container {
    padding: 0 25px;
    @include global.border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &__logo-group {
      padding-top: 50px;
      &__logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        ::v-deep .logo-icon {
          width: 50px;

          &__main {
            fill: global.$primary-color;
          }
          &__secondary {
            fill: global.$primary-white;
          }
        }

        &__text {
          margin-top: 10px;
          text-align: center;
          color: global.$primary-white;
          @include global.logo-font($size-s: 20px);
        }
      }
    }

    &__link-group {
      display: flex;
      flex-direction: column;

      &__link {
        text-align: center;
        margin: 15px 0;
        color: global.$primary-white;
        @include global.link-font($weight: 400);
        cursor: pointer;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  &__credits {
    &__credit {
      margin: 10px 0 75px 0;
      text-align: center;
      color: global.$primary-white;
      @include global.p-font(
        $size-s: 12px,
        $size-m: 12px,
        $size-l: 12px,
        $size-xl: 12px,
        $weight: 400
      );

      & span {
        color: global.$primary-color;
      }
    }
  }

  &__social-network-group {
    height: 60px;
    background: global.$primary-color;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 25px;
      margin: 0 auto;
      height: 100%;
      @include global.border-box;
      ::v-deep button {
        height: 30px;
        width: 30px;
        margin: 0 15px;
        font-size: 30px;
        color: global.$primary-black;
      }
    }
  }
}

@include global.adapt-to-screen("m") {
  .footer {
    &__container {
      flex-direction: row;
      justify-content: space-between;

      &__logo-group,
      &__link-group {
        margin-bottom: 50px;
      }

      &__logo-group {
        display: flex;
        align-items: flex-start;

        &__logo {
          flex-direction: row;
          ::v-deep .logo-icon {
            width: 50px;
          }
          &__text {
            margin: 0;
            margin-left: 10px;
          }
        }
      }

      &__link-group {
        padding-top: 50px;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        &:before {
          content: "Navigation";
          @include global.link-font($weight: 700);
          color: global.$primary-white;
          width: 100%;
          margin: 0 0 15px 0;
        }
        &__link {
          text-align: left;
          margin: 5px;
        }
      }
    }
    &__credits {
      &__credit {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
