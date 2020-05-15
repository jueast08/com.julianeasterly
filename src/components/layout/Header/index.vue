<template>
  <header id="header" class="header col-12">
    <div ref="bar" id="header__bar" class="header__bar col-12">
      <div class="header__bar__container col-12">
        <div class="header__bar__container__logo col-xl-2">
          <the-header-logo />
        </div>
        <div class="col-l-8">
          <nav class="header__bar__container__menu">
            <span
              class="header__bar__container__menu__link"
              v-for="(link, index) in links"
              :class="(activeLink === link.toLowerCase()) && 'header__bar__container__menu__link--active'"
              :key="link.toLowerCase() + index"
              :ref="'menu_' + link.toLowerCase()"
              @click="scrollToId(link.toLowerCase())"
            >{{ link }}</span>
          </nav>
          <div ref="follower" class="header__bar__container__menu__follower"></div>
          <div class="header__bar__container__burger">
            <the-header-burger :open="mobileMenuOpen" @onBurgerClick="onBurgerClick()" />
          </div>
        </div>
      </div>
    </div>
    <nav
      class="header__mobile-menu col-12"
      :class="this.mobileMenuOpen ? 'header__mobile-menu--open' : ''"
    >
      <div
        class="header__mobile-menu__link"
        v-for="(link, index) in links"
        :key="link + index"
        @click="scrollToId(link.toLowerCase())"
      >{{ link }}</div>
    </nav>
  </header>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo";
import TheHeaderBurger from "./TheHeaderBurger";
import { ScrollIntoViewObserver } from "Utility/IntersectObserverHelpers";
import scrollToId from "Utility/ScrollHelper";

export default {
  name: "TheHeader",
  data() {
    return {
      links: ["About", "Skills", "Experience", "Education", "Contact"],
      mobileMenuOpen: false,
      themeObserver: null,
      fixedPositionObserver: null,
      linkObserver: null,
      activeLink: null
    };
  },
  components: {
    TheHeaderLogo,
    TheHeaderBurger
  },
  methods: {
    onBurgerClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        window.addEventListener("scroll", this.closeMobileMenu);
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      window.removeEventListener("scroll", this.closeMenuRemoveListener);
    },
    scrollToId,
    createThemeObserver() {
      try {
        this.themeObserver = new ScrollIntoViewObserver(
          this.$refs.bar,
          "header__bar--light"
        );
        this.themeObserver.triggerCritera = entry => {
          return entry.boundingClientRect.y < 0;
        };
        this.themeObserver.observe(document.querySelector("#top-anchor-pixel"));
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
        if (this.themeObserver) {
          this.themeObserver.disconnect();
        }
        this.$el.classList.add("header__bar--light");
      }
    },
    createFixedHeaderObserver() {
      try {
        this.fixedPositionObserver = new ScrollIntoViewObserver(
          this.$el,
          "header--fixed"
        );
        this.fixedPositionObserver.triggerCritera = entry => {
          return entry.boundingClientRect.y < 0;
        };
        this.fixedPositionObserver.observe(
          document.querySelector("#top-anchor-pixel")
        );
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
        if (this.fixedPositionObserver) {
          this.fixedPositionObserver.disconnect();
        }
        this.$refs.bar.classList.add("header__bar--light");
        this.$el.classList.add("header--fixed");
      }
    },
    createLinkObserver() {
      if (!this.shouldShowMobileHeader) {
        this.linkObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              let follower = this.$refs.follower;
              if (entry.intersectionRatio >= 0.2) {
                if (entry.target.id === "home") {
                  follower.classList.remove(
                    follower.classList[0] + "--in-view"
                  );
                  this.activeLink = null;
                  return;
                }
                let link = this.$refs["menu_" + entry.target.id][0];
                follower.classList.add(follower.classList[0] + "--in-view");
                follower.style.width =
                  link.getBoundingClientRect().width + "px";
                follower.style.left = link.getBoundingClientRect().left + "px";
                this.activeLink = entry.target.id;
              }
            });
          },
          {
            threshold: [0.2],
            root: document.querySelector(".body")
          }
        );

        this.links.forEach(link =>
          this.linkObserver.observe(
            document.querySelector("#" + link.toLowerCase())
          )
        );
        this.linkObserver.observe(document.querySelector("#home"));
      }
    }
  },
  computed: {
    shouldShowMobileHeader() {
      return this.$el.getBoundingClientRect().width < 992;
    }
  },
  mounted() {
    this.createThemeObserver();
    this.createFixedHeaderObserver();
    this.createLinkObserver();
  },
  beforeDestroy() {
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
    if (this.fixedPositionObserver) {
      this.fixedPositionObserver.disconnect();
    }
    if (this.linkObserver) {
      this.linkObserver.disconnect();
    }
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.header {
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 100;

  &__bar {
    height: global.$xs-header-height;
    padding: 0 30px;
    overflow: hidden;
    @include global.border-box;

    &__container {
      display: flex;
      height: 100%;
      @include global.border-box;

      &__logo {
        color: global.$primary-white;
        fill: global.$primary-white;
      }

      &__menu {
        display: none;
        cursor: pointer;
      }

      &__burger {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
      }
    }

    &--light {
      background: global.$primary-white;
    }

    &--light & {
      &__container {
        &__logo {
          color: global.$primary-black;
          fill: global.$primary-color;
        }
      }
    }
  }

  &__mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    background: global.$primary-color;

    &__link {
      height: 35px;
      margin: 10px 0;
      @include global.link-font($weight: 400);
      text-align: center;
      color: global.$primary-white;
      cursor: pointer;
    }

    &--open {
      transition: all 1s ease-in-out;
      max-height: 1000px;
    }
  }

  &--fixed {
    position: fixed;
    top: 0px;
  }
}

@include global.adapt-to-screen("xs-rotated") {
  .header {
    &__bar {
      &__container {
        &__logo {
          display: none;
        }
      }
    }
    &--fixed & {
      &__bar {
        &__container {
          &__logo {
            display: inherit;
          }
        }
      }
    }
  }
}

@include global.adapt-to-screen("l") {
  .header {
    &__bar {
      height: global.$xl-header-height;
      margin-top: 0px;
      padding: 0 85px;

      &__container {
        display: flex;
        height: 100%;
        padding: 25px 0;

        &__menu {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          &__follower {
            position: absolute;
            opacity: 0;
            height: 5px;
            border-radius: 1px;
            background: global.$primary-color;
            transition: width 0.25s ease-in-out, left 0.25s ease-in-out,
              opacity 1s ease-in-out;
            margin-top: 5px;
            &--in-view {
              opacity: 1;
            }
          }
          &__link {
            margin: 0 10px;
            @include global.link-font;
            color: global.$primary-white;
            cursor: pointer;
            transition: border 0.25s ease-in-out;
            &--active {
              transition: border 0.25s ease-in-out, color 0.25s ease-in-out;
              color: global.$primary-color;
            }
            &:hover {
              color: global.$primary-color;
            }

            &:active {
              color: lighten(global.$primary-color, 25%);
            }
          }
        }

        &__burger {
          display: none;
        }
      }

      &--light {
        -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
      }

      &--light & {
        &__container {
          &__menu {
            &__link {
              color: global.$primary-black;
              &--active {
                color: global.$primary-color;
              }
              &:hover {
                color: global.$primary-color;
              }

              &:active {
                color: lighten(global.$primary-color, 25%);
              }
            }
          }

          &__burger {
            display: none;
          }
        }
      }
    }

    &__mobile-menu {
      display: none;
    }
  }
}
</style>
