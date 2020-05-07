<template>
   <div class="sn-bar">
     <div class="sn-bar__container">
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
</template>

<script>
import SocialNetworkButton from 'Bases/BaseSocialNetworkButton';
import EmailIcon from 'Icons/EmailIcon';
import github from 'Assets/GitHub-Mark-64px.png';
import linkedin from 'Assets/linkein-logo-64px.png';

export default {
  name: 'TheSocialNetworkBar',
  data() {
    return {
      gitHubImage: github,
      linkedinLogo: linkedin,
    }
  },
  components: {
    SocialNetworkButton, EmailIcon,
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';

  .sn-bar {
    display: none;
  }

  @include global.adapt-to-screen('m') {
    .sn-bar {
      display: initial;
      position: fixed;
      z-index: 100;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);

      &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        padding: 10px 0;
        
        border-radius: 3px;
        background: global.$primary-white;
        -webkit-box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.2);
        -moz-box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.2);
        box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.2);

        ::v-deep button {
          width: 50%;
        }
      }
    }
  }

  @include global.adapt-to-screen('l') {
    .sn-bar {
      right: 84px;
      &__container {
        width: 40px;
        padding: 10px 0;
      }
    }
  }

  @include global.adapt-to-screen('xl') {
    .sn-bar {
      &__container {
        width: 50px;
        padding: 10px 0;
      }
    }
  }
</style>
