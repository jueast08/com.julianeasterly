<template>
  <div id="home" class="home col-12">
    <div class="home__container col-12 col-l-6">
      <section class="home__container__titles col-12">
        <h1 class="home__container__titles__title">JULIAN</h1>
        <h1 class="home__container__titles__title">EASTERLY</h1>
      </section>
      <section class="home__container__subtitles col-12">
        <p class="home__container__subtitles__subtitle">
          COLLABORATE. LEARN. EVOLVE.
        </p>
      </section>
    </div>
    <div class="home__background col-12 col-xl-6"></div>
    <div class="home__down-arrow"
      @click="goToAbout"></div>
  </div>
</template>

<script>
import ProfileImage from 'Assets/portrait_bridge_saint-entienne.jpg';
import ScrollIntoViewObserver from 'Source/ScrollIntoViewObserver';

export default {
  name: 'TheHomeSection',
  data() {
    return {
      profileImage: ProfileImage,
      elementsToAnimateByClassName: ['home__container', 'home__container__titles__title'],
    }
  },
  methods: {
    goToAbout(){
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  },
  mounted() {
    this.scrollObserver = new ScrollIntoViewObserver(this.elementsToAnimateByClassName, '--in-view');
    this.scrollObserver.observe(document.querySelector('.home__container'));
  },
  beforeDestroy() {
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
      margin-bottom: 25px;
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
    }

    &__down-arrow {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);

      z-index: 100;
      height: 15px;
      width: 15px;
      border-width: 0px 10px 10px 0;
      border-style: solid;
      border-color: global.$primary-white;
      animation: moveArrow 1s infinite alternate;

    }
    @include global.keyframes(moveArrow) {
        from {bottom: 50px;}
        to {bottom: 40px;}
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
      }
      
      &__down-arrow {
        
        &:hover {
          cursor: pointer;
        }
      }
    }

  }
</style>
