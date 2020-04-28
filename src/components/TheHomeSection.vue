<template>
  <section class="home col-12">
    <div class="home__container">
      <div class="home__container__titles col-12">
        <h1 class="home__container__titles__title">JULIAN</h1>
        <h1 class="home__container__titles__title">EASTERLY</h1>
      </div>
      <div class="home__container__subtitles col-12">
        <p class="home__container__subtitles__subtitle">
          FUNCTIONAL PROJECT LEADER - DEVELOPER
        </p>
      </div>
    </div>
    <div class="home__background col-12">
        <div class="home__background__buttons col-12">
          <base-round-button class="home__background__buttons__about">
            ABOUT ME
          </base-round-button>
      </div>        
    </div>
  </section>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton';
import ProfileImage from 'Assets/portrait_bridge_saint-entienne.jpg';

export default {
  name: 'TheHomeSection',
  data() {
    return {
      profileImage: ProfileImage,
    }
  },
  components: {
    BaseRoundButton,
  }
}
</script>

<style lang="scss" scoped>
  @use 'global';

  .home {
    position: relative;
    height: 100vh;
    width: 100vw;
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
      
      &__titles {
        text-align: left;        
        &__title {
          margin: 0;
          @include global.h1-font;

          &:nth-child(1) {
            color: global.$primary-white;
          }

          &:nth-child(2) {
            color: global.$primary-color;
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
      width: 100%;

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
      
      &__buttons {
        position: relative;
        height: 105px;
        width: 100%;
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

</style>
