<template>
  <header id="header" class="header col-12">
    <div id="header__bar" class="header__bar col-12">
      <div class="header__bar__container col-12">
        <div class="col-xl-2">
          <the-header-logo class="header__bar__container__logo"/>
        </div>
        <div class="col-l-8">
            <div class="header__bar__container__menu">
                <span class="header__bar__container__menu__link"
                  v-for="(link, index) in links" 
                  :key="link+index"
                  :class="(link === activeLink) && 'header__bar__container__menu__link--active'"
                  @click="goToSection(link)">{{ link }}</span>
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
            :key="link+index"
            @click="goToSection(link)">{{ link }}</div>    
    </div>
    
  </header>
</template>

<script>
import TheHeaderLogo from 'Components/TheHeaderLogo';
import BaseBurger from 'Components/BaseBurger';
import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheHeader',
  data() {
    return {
      activeLink: 'Home',
      elementsWithALightThemeByClassName: ['header__bar', 'header__bar__container__logo', 'header__bar__container__menu__link'],
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
    addLightTheme() {
      this.elementsWithALightThemeByClassName.forEach(className => {
        document.getElementsByClassName(className).forEach(element => element.classList.add(className+'--light'))
      });

    },
    removeLightTheme() {
      this.elementsWithALightThemeByClassName.forEach(className => {
        document.getElementsByClassName(className).forEach(element => element.classList.remove(className+'--light'))
      });

    },
    fixHeader() {
        document.getElementById('header').classList.add("header--fixed");
    },
    unfixHeader() {
        document.getElementById('header').classList.remove("header--fixed");
    },
    handleScroll(element) {
      if(this.isHeaderOutOfViewport(element)) {
        this.addLightTheme();
        this.fixHeader();
      }
      else {
        this.removeLightTheme();
        this.unfixHeader();
      }
    },
    isHeaderOutOfViewport(element) {
      return element.boundingClientRect.y < 0;
    },
    goToSection(idName) {
      let target = document.getElementById(idName.toLowerCase());
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        });
        this.activeLink = idName;
      }
      else {
        console.warn('There is no element with the id '+idName.toLowerCase());
      }   
    },
  },
  mounted() {
    if (isIntersectionObserverAvailable()) {
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

  @include global.adapt-to-screen('l') {
    
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
