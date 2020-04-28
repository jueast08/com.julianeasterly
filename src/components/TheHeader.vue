<template>
  <header id="header" class="header">
    <div class="header__bar col-12">
      <div class="header__bar__container col-12">
        <div class="col-xl-2">
          <the-header-logo/>
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
    <div class="header__mobile-menu"
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
  methods: {
    onBurgerClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  },
  components: {
    TheHeaderLogo,
    BaseBurger,
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  //@todo reorganize to take into account dark and light colors
  .header {
      position: fixed;
      top: 30px;
      left: 0;
      width: 100vw;
      
    &__bar {
      width: 100%; // possibly not a mobile attribute
      height: 70px; //must be moved to desktop
      padding: 0 30px;
      overflow: hidden;
      @include global.border-box;
    
      &--light {
        background: global.$primary-white;
      }

      &__container {
        display: flex;
        height: 100%;
        @include global.border-box;

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
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
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
        height: 80px; //must be moved to desktop
        margin-top: 0px;
        padding: 0 85px;
      
        background: global.$primary-black; // @todo remove. First The background should be transparent by default

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
              font-family: 'Poppins', sans-serif;
              font-size: 14px;
              font-weight: 700;
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
