<template>
  <section id="about" class="about col-12">
    <div class="about__animation-trigger"></div>
    <div class="about__container col-12 col-m-10 col-l-6">
      <div class="about__container__titles">
        <h3 class="about__container__titles__subtitle">
          ESTABLISHED 1990 IN THE USA • CURRENTLY ENJOYING LIFE IN STRASBOURG, FRANCE
        </h3>
        <h2 class="about__container__titles__title">
          Code & Consulting
        </h2>
      </div>
      <div class="about__container__content">
        <p>
          Born in Paducah, Kentucky, USA, I moved to France in 2013 with  B.A. in English. I have yet to look back.
        </p>
        <p>
          Since embarking in IT back in 2014, I've sought to help companies, first as as a developer and then as an IT 
          consultant and Business Analyst. While I no longer code at work, I develop personal projects in my freetime in 
          order to ensure that I stay up-to-date.
        </p>
        <!-- @TODO program button-->
        <base-round-button class="about__container__content__skills-button">
          SEE MORE
        </base-round-button>
      </div>
      
      <div class="about__hobbies col-12">
        <div class="about__hobbies__title">WHAT I DO IN MY FREE TIME</div>
        <div class="about__hobbies__hobby">
          <base-content-icon class="about__slider__item">
                <template v-slot:icon><img :src="devDesignIcon"/></template>
                <template v-slot:title>Code and Design</template>
          </base-content-icon>
        </div>
        <div class="about__hobbies__hobby">
          <base-content-icon class="about__slider__item">
                <template v-slot:icon><img :src="sportsIcon"/></template>
                <template v-slot:title>Sports</template>
          </base-content-icon>
        </div>
        <div class="about__hobbies__hobby">
          <base-content-icon class="about__slider__item">
                <template v-slot:icon><img :src="toolsIcon"/></template>
                <template v-slot:title>DIY & Gardening</template>
          </base-content-icon>
        </div>
        <div class="about__hobbies__hobby">
          <base-content-icon class="about__slider__item">
                <template v-slot:icon><img :src="cookingIcon"/></template>
                <template v-slot:title>Cooking</template>
          </base-content-icon>
        </div>
         
      </div>
    </div>
  </section>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton'
import BaseContentIcon from 'Components/BaseContentIcon';
import cookingIcon from 'Assets/cooking.png';
import sportsIcon from 'Assets/sport.png';
import toolsIcon from 'Assets/tools.png';
import devDesignIcon from 'Assets/dev-design.png';


import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheAboutSection',
  data() {
    return {
      elementsToAnimateByClassName: ['about__container',],
      sportsIcon: sportsIcon,
      cookingIcon: cookingIcon,
      toolsIcon: toolsIcon,
      devDesignIcon: devDesignIcon,
    }
  },
  components: {
    BaseRoundButton, BaseContentIcon, 
  },
  methods: {
    //@TODO this ode is repeated in multiple sections. This should be refactored. Maybe a BaseSection class
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
  
      this.scrollObserver.observe(document.querySelector('.about__animation-trigger'));
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
  
  .about {
    position: relative;
    display: flex;
    justify-content: center;
    background: global.$background-gray url('~Assets/background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    
    &__animation-trigger {
      position: absolute; 
      top:70px;
      height: 100%;
    }
    &__container {
      min-height: 100%;
      padding: 100px 25px;
      opacity: 0;
      transform: translateY(300px);
      transition: opacity ease-in 0.75s, transform ease-in 0.6s;
      


      &--in-view {
        display: inital;
        opacity: 1;
        transform: translateY(0px);

      }
      &__titles {
        text-align: center;
        &__title {
          @include global.h2-font;
          color: global.$primary-black;
        }
        &__subtitle {
          @include global.subtitle-font;
          color: global.$primary-gray;
        }
      }

      &__content {
        p {
          @include global.p-font;
          text-align: center;
          color: global.$primary-black;
        }

        &__skills-button {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          border-color: global.$primary-color;
          color: global.$primary-color;
        }
      }
    }

    &__slider {
      margin: 0 auto;
      &__title {
        text-align: center;
        margin: 25px 0;
        @include global.subtitle-font;
      }

      &__item {
        @include global.subtitle-font($weight: 300);

        svg {
          fill: global.$primary-color;
        }
      }
    }

    &__hobbies {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 25px auto;
      &__title {
        width: 100%; 
        margin: 25px auto 50px auto;
        text-align: center;
        @include global.subtitle-font;
      }
      &__hobby {
        margin: 10px;
        width: 200px;
        * {
            @include global.p-font($size-s: 14px, $size-m: 14px, $size-l: 14px, $size-xl: 14px);
          }
        //
      }
    }
  }
 
</style>
