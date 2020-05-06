<template>
  <base-section id="skills" title="What I Offer" subtitle="My Skills">
    <div class="skills">
      <div class="skills__list">
        <base-content-icon class="skills__list__skill">
            <template v-slot:icon><logo-icon/></template>
            <template v-slot:title>Development and Tech</template>
            <template v-slot:description>
              I have educational with Java, C and C++, as
              well as professional experience in Git/Git-flow
              Python, PHP, and Javascript.
              I've worked with various tools such as Travis
              CI, Sonarqube, Docker and Kubernetes.
            </template>
        </base-content-icon>
        <base-content-icon class="skills__list__skill">
            <template v-slot:icon><logo-icon/></template>
            <template v-slot:title>Project and Product Management</template>
            <template v-slot:description>
              I have educational with Java, C and C++, as
              well as professional experience in Git/Git-flow
              Python, PHP, and Javascript.
              I've worked with various tools such as Travis
              CI, Sonarqube, Docker and Kubernetes.
            </template>          
        </base-content-icon>
        <base-content-icon class="skills__list__skill">
            <template v-slot:icon><logo-icon/></template>
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
      <div class="skills__contact-me">
        <div>Want to work together on a project or opportunity?</div>
        <div class="skills__contact-me__button"><base-round-button>contact me</base-round-button></div>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from 'Components/BaseSection';
import BaseContentIcon from 'Components/BaseContentIcon';
import LogoIcon from 'Icons/LogoIcon';
import BaseRoundButton from 'Components/BaseRoundButton';

export default {
  name: 'TheSkillsSection',
  components: {BaseSection, BaseContentIcon,LogoIcon, BaseRoundButton},
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
      &__list {
        
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

      &__contact-me {
        margin-top: 50px;
        text-align: center;
        @include global.subtitle-font;
        color: global.$primary-white;

        &__button{
          margin-top: 25px;
          button {
            color: global.$primary-white;
          }  
        }
      }
    }
  }
 
</style>
