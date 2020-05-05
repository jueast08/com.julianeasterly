<template>
  <base-section id="skills" title="What I Offer" subtitle="My Skills">
      <div class="skills">
      <base-content-icon class="skills__skill">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Development and Tech</template>
          <template v-slot:description>
            I have educational with Java, C and C++, as
            well as professional experience in Git/Git-flow
            Python, PHP, and Javascript.
            I've worked with various tools such as Travis
            CI, Sonarqube, Docker and Kubernetes.
          </template>
      </base-content-icon>
      <base-content-icon class="skills__skill">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Project and Product Management</template>
          <template v-slot:description>
            I have educational with Java, C and C++, as
            well as professional experience in Git/Git-flow
            Python, PHP, and Javascript.
            I've worked with various tools such as Travis
            CI, Sonarqube, Docker and Kubernetes.
          </template>          
      </base-content-icon>
      <base-content-icon class="skills__skill">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Do-It-Yourself</template>
          <template v-slot:description>
            I have educational with Java, C and C++, as
            well as professional experience in Git/Git-flow
            Python, PHP, and Javascript.
            I've worked with various tools such as Travis
            CI, Sonarqube, Docker and Kubernetes.
          </template>   
      </base-content-icon>
    </div>
  </base-section>
</template>

<script>
import BaseSection from 'Components/BaseSection';
import BaseContentIcon from 'Components/BaseContentIcon';
import BaseLogo from 'Icons/BaseLogo';

export default {
  name: 'TheSkillsSection',
  components: {BaseSection, BaseContentIcon,BaseLogo,},

}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  #skills {
    background-color: global.$primary-color;
    ::v-deep .section__title, ::v-deep .section__subtitle {
      color: global.$primary-white;
    }
    .skills {
      margin-top: 40px;
      &__skill{
        margin-top: 60px;
        ::v-deep .base-content-icon {
          &__icon {
            fill: global.$primary-white;
          }
          &__title {
            @include global.h4-font;
            color: global.$primary-white;
          }
          &__description {
            @include global.p-font;
            color: global.$primary-white;
          }  
        }
      }
    
    }
  }
 
</style>
