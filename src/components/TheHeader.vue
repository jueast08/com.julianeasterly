<template>
  <header id="header" class="header">
    <div class="header__bar col-12">
      <div class="header__bar__container col-12">
        <div class="col-xl-2">
          <the-header-logo class="header__bar__container__logo"/>
        </div>
        <div class="col-xl-8">
            <div class="header__bar__container__menu">
                <span class="header__bar__container__menu__link"
                  v-for="(link, index) in links" 
                  :key="link+index"
                  :class="link === activeLink? 'active': ''">{{ link }}</span>
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
      links: ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'],
      activeLink: 'Home',
      mobileMenuOpen: false,
    }
  },

  components: {
    TheHeaderLogo,
    BaseBurger,
  },
  methods: {
    onBurgerClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    //handleScroll() {},
  }
  // ,
  // created () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // destroyed () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  //@todo reorganize to take into account dark and light colors
  .header {
      position: fixed;
      top: 30px;
      left: 0;
      z-index: 100;
      width: 100vw;
      
    &__bar {
      height: global.$xs-header-height;
      padding: 0 30px;
      overflow: hidden;
      @include global.border-box;
      background: green;
    
      &--light {
        background: global.$primary-white;
      }

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
              
              &.active {
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
