<template>
  <section id="about" class="about col-12">
    <div class="about__animation-trigger"></div>
    <div class="about__container col-12 col-m-10 col-l-8">
      <div class="about__container__titles">
        <h3 class="about__container__titles__subtitle">
          ESTABLISHED 1990 • ENJOYED IN FRANCE AND MADE IN THE U.S.A
        </h3>
        <h2 class="about__container__titles__title">
          Who am I?
        </h2>
      </div>
      <div class="about__container__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras sodales consequat odio, et porttitor sapien sagittis sit amet. 
          Phasellus a feugiat dolor. 
          Vivamus ligula tortor, maximus id bibendum sit amet, tincidunt a turpis. 
          Proin pulvinar dictum dolor, quis interdum orci porttitor ut. 
          Cras congue purus ante, nec ornare enim venenatis sit amet.
        </p>
        <!-- @TODO connect to skills sections -->
        <base-round-button class="about__container__content__skills-button">
          MY SKILLS
        </base-round-button>
      </div>
      
      <!-- @TODO another component -->
      <div class="about__slider">
        <div class="about__slider__title">WHAT I DO IN MY FREE TIME</div>
        <slide-show>
          <!-- @TODO finish creating component -->
          <slide-show-item><div style="background: rgba(0,0,0,0.2); height: 100%;">1</div></slide-show-item>
          <slide-show-item><div style="background: rgba(0,0,0,0.2); height: 100%;">2</div></slide-show-item>
          <slide-show-item><div style="background: rgba(0,0,0,0.2);  height: 100%;">3</div></slide-show-item>
          <slide-show-item><div style="background: rgba(0,0,0,0.2); height: 100%;">4</div></slide-show-item>
          <slide-show-item><div style="background: rgba(0,0,0,0.2); height: 100%;">5</div></slide-show-item>
        </slide-show>
      </div>
      
    </div>
  </section>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton'
import SlideShow from 'Components/SlideShow';
import SlideShowItem from 'Components/SlideShowItem';

import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheAboutSection',
  data() {
    return {
      elementsToAnimateByClassName: ['about__container',],
    }
  },
  components: {
    BaseRoundButton, SlideShow, SlideShowItem,
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
      padding: 100px 25px 25px 25px;
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
      
      &__title {
        text-align: center;
        margin: 25px 0;
        @include global.h3-font;
      }

      height: 250px;
      width: 100%;
      margin-top: 25px;

    }

  }
 
</style>
