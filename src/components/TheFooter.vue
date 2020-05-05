<template>
  <footer id="footer" class="footer col-12">
    <div class="footer__container col-12 col-m-10 col-l-6">
      <div class="footer__container__logo-group col-12">
        <div class="footer__container__logo-group__logo">
          <logo-icon/>
        </div>
        <div class="footer__container__logo-group__text">JULIAN EASTERLY</div>
      </div>
      <div class="footer__container__link-group col-12">
        <div class="footer__container__link-group__link" 
          v-for="(link, index) in links" 
          :key="link+index">{{ link }}</div>
      </div>
    </div>
    <div class="footer__social-network-group col-12">
      <base-social-network-button href="#contact">
        <email-icon/>
      </base-social-network-button>
      <base-social-network-button href="https://www.linkedin.com/in/julianeasterly/">
        <img :src="linkedinLogo" alt="linkedin">
      </base-social-network-button>
      <base-social-network-button href="https://github.com/jueast08">
        <img :src="gitHubImage" alt="github">
      </base-social-network-button>
    </div>
    <div class="footer__container--end  col-12 col-m-10 col-l-6">
      <div class="footer__container__credit col-12">
        Design by Julian EASTERLY
        <br/>
        Made with <span>&#10084;</span> in Strasbourg, France during the 2020 Coronavirus lockdown
     </div>
    </div>
  </footer>
</template>

<script>
import BaseSocialNetworkButton from 'Components/BaseSocialNetworkButton';
import LogoIcon from 'Icons/LogoIcon';
import EmailIcon from 'Icons/EmailIcon';
import github from 'Assets/GitHub-Mark-64px.png';
import linkedin from 'Assets/linkein-logo-64px.png';

export default {
  name: 'TheFooter',
  data() {
    return {
      links: ['Home', 'About', 'Skills', 'Experience', 'Education'], //@TODO refactor. this data is repeated in the header
      gitHubImage: github,
      linkedinLogo: linkedin,
    }
  },
  components: {LogoIcon, EmailIcon, BaseSocialNetworkButton},
  methods: {},
}
</script>

<style lang="scss" scoped>
  @use 'global';
  

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    background: global.$primary-black;
    
    &__container {
      padding: 0 25px; 
      @include global.border-box;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      &--end {
        margin-bottom: 25px;
      }

      &__logo-group {
        padding-top: 85px;
        &__logo {
          margin: 0 auto 10px;
          width: 75px;
          ::v-deep logo-icon {
            width: 100%;
          }
          
          ::v-deep .arrow-class, ::v-deep .direction-class {
          fill: global.$primary-color;
          }

          ::v-deep .compass-class {
            fill: global.$primary-white;
          }
        }

        &__text {
          text-align: center;
          color: global.$primary-white;
          @include global.logo-font($size-s: 25px);
        }
      }

      &__link-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-grow: 1;

        &__link {
          text-align: center;
          color: global.$primary-white;
          @include global.link-font($weight: 400);
        }
      }


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
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 25px; 
      @include global.border-box;
      height: 60px;
      background: global.$primary-color;
      
      ::v-deep button {
        height: 30px;
        width: 30px;
      }
    }
  
  }
 
</style>

