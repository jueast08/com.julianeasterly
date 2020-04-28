<template>
  <div>
    <header class="header col-12">
      <div class="header__container col-12">
        <div class="col-xl-2">
          <the-header-logo/>
        </div>
        <div class="col-xl-8">
            <div class="header__container__menu">
                <span v-for="(link, index) in links" 
                  :key="link+index"
                  :class="link === activeLink? 'active': ''">{{ link }}</span>
            </div>
          <div class="header__container__burger">
            <base-burger :open="mobileMenuOpen" @onBurgerClick="onBurgerClick()"/>
          </div>
        </div>
      </div>
    </header>
    <div class="mobile-menu"
          :class="this.mobileMenuOpen ? 'mobile-menu--open' :''">
      <div v-for="(link, index) in links" 
            :key="link+index">{{ link }}</div>    
    </div>
  </div>
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
    width: 100%; // possibly not a mobile attribute
    height: 70px; //must be moved to desktop
    margin-top: 30px;
    padding: 0 30px;
    overflow: hidden;
    @include global.border-box;
  
    background: global.$primary-black; // @todo remove. First The background should be transparent by default

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
        
        &__button {  
          display: inline-block;
          width: 20px;

          div {
            height: 2px;
            width: 100%;
            margin: 6px 0;
            background: global.$primary-color;
            transform-origin: center;
            @include global.smooth-transition($duration: 0.4s);
          }

          &--open {
            div:nth-child(2){
              transform: translate(-25px);
              opacity: 0;
            }

            div:nth-child(1) {
              transform: translateY(8px) rotate(-45deg);
            }
            
            div:nth-child(3) {
              transform: translateY(-8px) rotate(45deg);
            }
          }
        }
      }
      

    }  
  }

  .mobile-menu {
    padding: 10px 0;
    background: global.$primary-color;
    transform: scaleY(0);
    transform-origin: left top;
    @include global.smooth-transition($duration: 0.25s);
  
    div {
      height: 35px;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      text-align: center;
      color: global.$primary-white;
    }

    &--open {
      transform: scaleY(1);
    }
  }

  @include global.adapt-to-screen('xl') {
    .header {
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
          span {
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
    .mobile-menu {
      display: none;
    }
  }
</style>
