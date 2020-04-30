<template>
  <section class="about col-12">
    <div class="about__container col-12">
      <div class="about__container__titles">
        <h3 class="about__container__titles__subtitle">
          ESTABLISHED 1990 • MADEINU.S.A • EXPORTED TO FRANCE
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
        <base-round-button class="about__container__content__skills-button">
          MY SKILLS
        </base-round-button>
      </div>
    </div>

  </section>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton.vue'
import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheAboutSection',
  data() {
    return {
      elementsToAnimateByClassName: ['about__container',],
    }
  },
  components: {
    BaseRoundButton,
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
  
      this.scrollObserver.observe(document.querySelector('.about__container'));
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
    min-height: 100vh;
    background: global.$background-gray;

    
    &__container {
      min-height: 100%;
      padding: 100px 25px 25px 25px;
      opacity: 0;
      transition: opacity ease-in 0.6s;
      
      background-image: url('~Assets/background.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;

      &--in-view {
        opacity: 1;
      }
      &__titles {
        text-align: center;
        &__title {
          @include global.h2-font;
          color: global.$primary-black;
        }
        &__subtitle {
          @include global.h3-font;
          color: global.$primary-black;
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


  }
 
</style>
