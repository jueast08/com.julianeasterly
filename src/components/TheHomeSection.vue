<template>
  <section id="home" class="home col-12">
    <div class="home__container col-12 col-l-6">
      <div class="home__container__titles col-12">
        <h1 class="home__container__titles__title">JULIAN</h1>
        <h1 class="home__container__titles__title">EASTERLY</h1>
      </div>
      <div class="home__container__subtitles col-12">
        <p class="home__container__subtitles__subtitle">
          FUNCTIONAL PROJECT LEADER - DEVELOPER
        </p>
      </div>
      <div class="home__container__button-group col-12">
        <base-round-button class="home__container__button-group__about">
          ABOUT ME
        </base-round-button>
      </div>   
    </div>
    <div class="home__background col-12 col-xl-6">
        <div class="home__background__stripe col-12">
          <base-round-button class="home__background__stripe__about">
            ABOUT ME
          </base-round-button>
      </div>        
    </div>
  </section>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton';
import ProfileImage from 'Assets/portrait_bridge_saint-entienne.jpg';
import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheHomeSection',
  data() {
    return {
      profileImage: ProfileImage,
      elementsToAnimateByClassName: ['home__container', 'home__container__titles__title'],
    }
  },
  components: {
    BaseRoundButton,
  },
  methods: {
    addAnimationClasses() {
      this.elementsToAnimateByClassName.forEach(className => {
        document.getElementsByClassName(className).forEach(element => element.classList.add(className+'--in-view'));
      });
    },
    removeAnimationClasses() {
      this.elementsToAnimateByClassName.forEach(className => {
        document.getElementsByClassName(className).forEach(element => element.classList.remove(className+'--in-view'));
      });
    },
    handleOnScroll(entry) {
      if(entry.isIntersecting) {
        this.addAnimationClasses();
      }else {
        this.removeAnimationClasses();
      }
    }
  },
  mounted() {
    if (isIntersectionObserverAvailable()) {
      this.scrollObserver = new IntersectionObserver(entries => {
        this.handleOnScroll(entries[0]);
      });
  
      this.scrollObserver.observe(document.querySelector('.home__container'));
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

  .home {
    position: relative;
    height: 100vh;
    background: global.$primary-black;
    overflow: hidden;
    
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 50%;
      padding: 0 30px;
      padding-top: calc(30px + #{global.$xs-header-height});
      @include global.border-box;
      opacity: 0;
      transition: opacity ease-in 0.6s;

      &--in-view {
        opacity: 1;
      }

      &__titles {
        text-align: left;        
        
        &__title {
          margin: 0;
          transition: transform ease-in-out 0.75s;
          @include global.h1-font;
          
          
          &:nth-child(1) {
            transform: translateX(200px);
            color: global.$primary-white;
          }

          &:nth-child(2) {
            transform: translateX(400px);
            color: global.$primary-color;
          }

          &--in-view {
            transform: translateX(0);
            &:nth-child(1) {
              transform: translateX(0px);
            }
            &:nth-child(2) {
              transform: translateX(0px);
            }
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

      &__button-group {
        display: none;  
      }
    }

    &__background {
      position: relative;
      height: 50%;

      &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.46;
        background-image: url('~Assets/portrait_bridge_saint-entienne.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      }
      
      &__stripe {
        position: relative;
        height: 105px;
        padding: 0 30px;
        z-index: 2;
        background-color: rgba(global.$primary-color, 0.6);
        
        &__about {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-color: global.$primary-white;
            color: global.$primary-white;
        }
      }
    }
  }

  @include global.adapt-to-screen('xl') {
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
        
        &__button-group {
          display: initial;
          &__about {
            float: right;
            border-color: global.$primary-white;
            color: global.$primary-white;
          }
        }
      }

      &__background {
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
        height: 100vh;
          
          &:before{
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0.46;
            background-image: url('~Assets/portrait_bridge_saint-entienne.jpg');
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover ;
            background-position: right;
          }
          
          &__stripe {
            width: 50%;
            height: 100%;
            clip-path: polygon(25% 0, 100% 0, 50% 100%, 0% 100%);
          
            &__about {
                display: none;
              }
          }
      
  
      }
    }

  }
</style>
