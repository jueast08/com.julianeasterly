<template>
  <header id="header" class="header">
    <div id="header__bar" class="header__bar col-12" :class="headerBarClass">
      <div class="header__bar__container col-12">
        <div class="col-xl-2">
          <the-header-logo class="header__bar__container__logo" :class="headerLogoClass"/>
        </div>
        <div class="col-xl-8">
            <div class="header__bar__container__menu">
                <span class="header__bar__container__menu__link"
                  v-for="(link, index) in links" 
                  :key="link+index"
                  :class="desktopLinkClasses">{{ link }}</span>
            </div>
          <div class="header__bar__container__burger">
            <base-burger :open="mobileMenuOpen" @onBurgerClick="onBurgerClick()"/>
          </div>
        </div>
      </div>
    </div>
    <div class="header__mobile-menu col-12"
          :class="this.mobileMenuOpen ? 'header__mobile-menu--open' :''">
      <div class="header__mobile-menu__link"
            v-for="(link, index) in links" 
            :key="link+index">{{ link }}</div>    
    </div>
    
  </header>
</template>

<script>
import TheHeaderLogo from 'Components/TheHeaderLogo';
import BaseBurger from 'Components/BaseBurger';

export default {
  name: 'TheHeader',
  data() {
    return {
      activeLink: 'Home',
      classesWithLightTheme: ['header__bar', 'header__bar__container__logo'],
      lightThemeOn: false,
      links: ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'],
      mobileMenuOpen: false,
      scrollObserver: null,
    }
  },
  components: {
    TheHeaderLogo,
    BaseBurger,
  },
  methods: {
    onBurgerClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if(this.mobileMenuOpen) {
        window.addEventListener('scroll', this.closeMobileMenu);
      }
      
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      window.removeEventListener('scroll', this.closeMenuRemoveListener);
    },
    fixHeader() {
        document.getElementById('header').classList.add("header--fixed");
    },
    unfixHeader() {
        document.getElementById('header').classList.remove("header--fixed");
    },
    handleScroll(element) {
      if(this.isHeaderOutOfViewport(element)) {
        this.lightThemeOn = true;
        this.fixHeader();
      }
      else {
        this.lightThemeOn = false;
        this.unfixHeader();
      }
    },
    isHeaderOutOfViewport(element) {
      return element.boundingClientRect.y < 0;
    },
  },
  computed: {
    isIntersectionObserverAvailable() {
      return "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    },
    desktopLinkClasses(link) {
      let root = 'header__bar__container__menu__link';
      return [(link === this.activeLink) && root+'--active', this.lightThemeOn && root+'--light'];
    },
    headerBarClass(){
      return this.lightThemeOn && 'header__bar'+'--light';
    },
    headerLogoClass(){
      return this.lightThemeOn && 'header__bar__container__logo'+'--light';
    }
  },
  mounted() {
    if (this.isIntersectionObserverAvailable) {
      this.scrollObserver = new IntersectionObserver(entries => {
        this.handleScroll(entries[0]);
      });
  
      this.scrollObserver.observe(document.querySelector('#top-anchor-pixel'));
    }
    else {
      this.lightThemeOn = true;
      this.fixHeader();
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleMobileMenu);
    if(this.scrollObserver) {
      this.scrollObserver.disconnect();
    } 
  },
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  //@todo reorganize to take into account dark and light colors
  .header {
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 100;
    width: 100vw;
    
 

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

          &--light {
            color: global.$primary-black;
            fill: global.$primary-color;
          }
        }

        &__menu {
          display: none;
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

  @include global.adapt-to-screen('xl') {
    
    .header {

      &__bar {
        height: global.$xl-header-height;
        margin-top: 0px;
        padding: 0 85px;
        
        &--light {
          -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
          box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
        }

        &__container {
          display: flex;
          height: 100%;
          padding: 25px 0;
          
          &__menu {
            display: flex;
            align-items: center;
            justify-content: center;
            &__link {
              margin: 0 10px;
              @include global.link-font;
              color: global.$primary-white;
              cursor: pointer;
              
              &--light {
                color: global.$primary-black;
              }
              &--active {
                font-size: 20px;
              }
            }
          }

          &__burger {
            display: none;
          }
        }  
      }
    
      &__mobile-menu {
          display: none;
        }
      }

  }
</style>
