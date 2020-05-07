<template>
  <footer id="footer" class="footer col-12">
    <div class="footer__container col-12 col-s-10 col-m-10 col-l-8 col-xl-8">
      <div class="footer__container__logo-group col-12">
        <div class="footer__container__logo-group__logo">
          <logo-icon/>
          <div class="footer__container__logo-group__logo__text">JULIAN EASTERLY</div>
        </div>
      </div>
      <div class="footer__container__link-group col-12">
        <div class="footer__container__link-group__link" 
          v-for="(link, index) in links" 
          :key="link+index">{{ link }}</div>
      </div>
    </div>
    <div class="footer__social-network-group col-12">
      <div class="footer__social-network-group__wrapper col-12 col-s-6 col-m-4 ">
        <social-network-button href="#contact">
          <email-icon/>
        </social-network-button>
        <social-network-button href="https://www.linkedin.com/in/julianeasterly/">
          <img :src="linkedinLogo" alt="linkedin">
        </social-network-button>
        <social-network-button href="https://github.com/jueast08">
          <img :src="gitHubImage" alt="github">
        </social-network-button>
      </div>
    </div>
    <div class="footer__credits col-12 col-s-10 col-m-10 col-l-8 col-xl-8">
      <div class="footer__credits__credit col-12">
        Design by Julian EASTERLY
        <br/>
        Made with <span>&#10084;</span> in Strasbourg, France during the 2020 Coronavirus lockdown
     </div>
    </div>
  </footer>
</template>

<script>
import SocialNetworkButton from 'Bases/BaseSocialNetworkButton';
import LogoIcon from 'Icons/LogoIcon';
import EmailIcon from 'Icons/EmailIcon';
import github from 'Assets/GitHub-Mark-64px.png';
import linkedin from 'Assets/linkein-logo-64px.png';

export default {
  name: 'TheFooter',
  data() {
    return {
      links: ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'], //@TODO refactor. this data is repeated in the header
      gitHubImage: github,
      linkedinLogo: linkedin,
    }
  },
  components: {LogoIcon, EmailIcon, SocialNetworkButton},
  methods: {},
}
</script>

<style lang="scss" scoped>
  @use 'global';

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: global.$primary-black;
    &__container {
      padding: 0 25px; 
      @include global.border-box;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      &__logo-group {
        padding-top: 50px;
        &__logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          
          ::v-deep .logo-icon {
            width: 50px;
          }
          
          ::v-deep .arrow-class, ::v-deep .direction-class {
          fill: global.$primary-color;
          }

          ::v-deep .compass-class {
            fill: global.$primary-white;
          }
          &__text {
            margin-top: 10px;
            text-align: center;
            color: global.$primary-white;
            @include global.logo-font($size-s: 20px);
          }
        }

  
      }

      &__link-group {
        display: flex;
        flex-direction: column;

        &__link {
          text-align: center;
          margin: 15px 0;
          color: global.$primary-white;
          @include global.link-font($weight: 400);
        }
      }

    }

    &__credits {
      margin-bottom: 25px;
      &__credit {
        margin: 10px 0 50px 0; 
        text-align: center;
        color: global.$primary-white;
        @include global.p-font($size-s: 12px, $weight: 400);

        & span {
          color: global.$primary-color;
        }
      }
    }

    &__social-network-group {
      height: 60px;
      background: global.$primary-color;
      
      &__wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 25px;
        margin: 0 auto;
        height: 100%;
        @include global.border-box;
       ::v-deep button {
          height: 30px;
          width: 30px;
        }
      }
      
    }
  
  }

  @include global.adapt-to-screen('m') {
    .footer {
      &__container {
        flex-direction: row;
        justify-content: space-between;
        &__logo-group, &__link-group {
          padding-top: 85px;
        }

        &__logo-group {
          &__logo {
            flex-direction: row;
            ::v-deep .logo-icon {
              width: 50px;
            }
            &__text {
              margin: 0;
              margin-left: 10px;
            }
          }
        }

        &__link-group {
          justify-content: flex-start;
          &:before {
            content: 'Navigation';
            @include global.link-font($weight: 700);
            color: global.$primary-white;
          }
          &__link {
            text-align: left;
            margin: 20px 0;
          }
        }
        
      }
    }
  }
 
</style>

