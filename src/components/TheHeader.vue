<template>
  <header class="header col-12">
    <!-- Refactor logo -->
    <div class="header__container col-12">

      <div class="header__container__logo col-xl-2">
        <base-logo/>
      </div>

        <!-- link components -->
      <div class="header__container__link-group col-xl-8">
        <span class="active">Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Experience</span>
        <span>Education</span>
        <span>Projects</span>
      </div>

    </div>

  </header>
</template>

<script>
import BaseLogo from 'Components/BaseLogo';

export default {
  name: 'TheHeader',
  data() {
    return {}
  },
  components: {
    BaseLogo
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  //@todo reorganize to take into account dark and light colors
  // @todo this should be Mobile first
  .header {
    width: 100%; // possibly not a mobile attribute
    height: 80px; //must be moved to desktop
    padding: 0 85px;
    @include global.border-box;
  
    background: global.$primary-black; // @todo remove. First The background should be transparent by default

    &--light {
      background: global.$primary-white;
    }

    &__container {
      display: flex;
      height: 100%;
      padding: 25px 0;
      @include global.border-box;

      &__link-group {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin: 0 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: global.$primary-white;
          
          &:hover {
            cursor: pointer;
          }
          
          &.active {
            font-size: 20px;
          }
        }
      }
    }  
    
    
  }

@include global.adapt-to-screen('xl') {

}
</style>
