<template>
  <header id="header" class="header col-12">
    <div id="header__bar" class="header__bar col-12">
      <div class="header__bar__container col-12">
        <div class="header__bar__container__logo col-xl-2">
          <the-header-logo/>
        </div>
        <div class="col-l-8">
            <nav class="header__bar__container__menu">
                <span class="header__bar__container__menu__link"
                  v-for="(link, index) in links" 
                  :key="link+index"
                  :class="(link === activeLink) && 'header__bar__container__menu__link--active'"
                  @click="goToSection(link)">{{ link }}</span>
            </nav>
          <div class="header__bar__container__burger">
            <the-header-burger :open="mobileMenuOpen" @onBurgerClick="onBurgerClick()"/>
          </div>
        </div>
      </div>
    </div>
    <nav class="header__mobile-menu col-12"
          :class="this.mobileMenuOpen ? 'header__mobile-menu--open' :''">
      <div class="header__mobile-menu__link"
            v-for="(link, index) in links" 
            :key="link+index"
            @click="goToSection(link)">{{ link }}</div>    
    </nav>
    
  </header>
</template>

<script>
import TheHeaderLogo from 'Components/TheHeaderLogo';
import TheHeaderBurger from 'Components/TheHeaderBurger';
import ScrollIntoViewObserver from 'Source/ScrollIntoViewObserver';

export default {
  name: 'TheHeader',
  data() {
    return {
      activeLink: 'Home',
      elementsWithALightThemeByClassName: ['header__bar',],
      links: ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'],
      mobileMenuOpen: false,
      themeObserver: null,
      fixedPositionObserver: null,
    }
  },
  components: {
    TheHeaderLogo,
    TheHeaderBurger,
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
    try {
      this.themeObserver = new ScrollIntoViewObserver(this.elementsWithALightThemeByClassName, '--light');
      this.themeObserver.triggerCritera = (entry) => { return entry.boundingClientRect.y < 0};
      this.themeObserver.observe(document.querySelector('#top-anchor-pixel'));
      this.fixedPositionObserver = new ScrollIntoViewObserver(['header'], '--fixed');
      this.fixedPositionObserver.triggerCritera = (entry) => {return entry.boundingClientRect.y < 0};
      this.fixedPositionObserver.observe(document.querySelector('#top-anchor-pixel'));
    }
    catch(error) {
      console.error(error);
      if(this.themeObserver) {
        this.themeObserver.disconnect();
      }

      if(this.fixedPositionObserver) {
        this.fixedPositionObserver.disconnect();
      }
      document.getElementById('header').classList.add("header--fixed");
      document.getElementById('header').classList.add("header__bar--light");

    }
  },
  beforeDestroy() {
    if(this.themeObserver) {
      this.themeObserver.disconnect();
    } 
    if(this.fixedPositionObserver) {
      this.fixedPositionObserver.disconnect();
    } 
  },
}
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
        background: global.$primary-white;
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

  @include global.adapt-to-screen('xs-rotated') {
    .header {
      &__bar {
        &__container {
          &__logo {
            display: none;
            }
           
        } 
      }
      &--fixed &{
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

  @include global.adapt-to-screen('l') {
    
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
        
        &--light {
          -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
          box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
        }

        &--light & {
          &__container {
            &__menu {
              &__link {
                color: global.$primary-black;
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
