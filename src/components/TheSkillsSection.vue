<template>
  <section id="skills" class="skills col-12">
    <div class="skills__animation-trigger"></div>
    <div class="skills__container ">
      <div class="skills__container__titles col-12 col-m-10 col-l-8">
        <h3 class="skills__container__titles__subtitle">
          SUPERPOWERS
        </h3>
        <h2 class="skills__container__titles__title">
          My Skills
        </h2>
      </div>
      <div class="skills__container__content">
        <div class="skills__container__content__my-skills">
          <base-content-icon class="skills__container__content__my-skills__skill">
              <template v-slot:icon><base-logo/></template>
              <template v-slot:title>Languages</template>
              <template v-slot:description>
                <skill-gauge percentage="100%" skill-title="English" goal-label="Native"/>
                <skill-gauge percentage="75%" skill-title="French" goal-label="Fluent"/>
              </template>
          </base-content-icon>
          <base-content-icon class="skills__container__content__my-skills__skill">
              <template v-slot:icon><base-logo/></template>
              <template v-slot:title>Product & Project Management</template>
              <template v-slot:description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras sodales consequat odio, et porttitor sapien sagittis sit amet. 
                Phasellus a feugiat dolor. 
              </template>
          </base-content-icon>
                    <base-content-icon class="skills__container__content__my-skills__skill">
              <template v-slot:icon><base-logo/></template>
              <template v-slot:title>Product & Project Management</template>
              <template v-slot:description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras sodales consequat odio, et porttitor sapien sagittis sit amet. 
                Phasellus a feugiat dolor. 
              </template>
          </base-content-icon>
                    <base-content-icon class="skills__container__content__my-skills__skill">
              <template v-slot:icon><base-logo/></template>
              <template v-slot:title>Product & Project Management</template>
              <template v-slot:description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras sodales consequat odio, et porttitor sapien sagittis sit amet. 
                Phasellus a feugiat dolor. 
              </template>
          </base-content-icon>
        </div>

      </div>
    </div>
    <div class="skills__wanted-skills">
      <base-content-icon class="skills__container__content__my-skills__skill">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras sodales consequat odio, et porttitor sapien sagittis sit amet. 
            Phasellus a feugiat dolor. 
          </template>
      </base-content-icon>
    </div>
  </section>
</template>

<script>
import BaseContentIcon from 'Components/BaseContentIcon';
import BaseLogo from 'Icons/BaseLogo';
import SkillGauge from 'Components/SkillGauge';

import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheSkillsSection',
  data() {
    return {
      elementsToAnimateByClassName: ['skills__container',],
    }
  },
  components: {BaseContentIcon,BaseLogo,SkillGauge},
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
  
      this.scrollObserver.observe(document.querySelector('.skills__animation-trigger'));
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
  
  $container-padding: 100px 25px 25px 25px;

  .skills {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: global.$primary-white;
    
    &__animation-trigger {
      position: absolute; 
      top:70px;
      height: 100%;
    }
    &__container {
      min-height: 100%;
      padding: $container-padding;
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
        display: flex;
        flex-direction: column;
        
        &__my-skills  {
          
          &__skill {
            margin: 25px 0;
            color: global.$primary-black;  
            
            svg {
              fill: global.$primary-color;
            }
            
          }
        }
      }
    }

    &__wanted-skills {
      background: global.$primary-color;
      height: 100vh;
      padding: $container-padding;

      color: global.$primary-white;
      
      svg {
        fill: global.$primary-white;
      }
    }

  }
 
</style>
