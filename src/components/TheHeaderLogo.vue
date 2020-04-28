<template>
  
  <div class="the-header-logo">
    <span>JULIAN</span>
    <base-logo/>
    <span>EASTERLY</span>
  </div>

</template>

<script>
import BaseLogo from 'Icons/BaseLogo';

export default {
  name: 'TheHeaderLogo',
  components: {
    BaseLogo
  }
}
</script>

<style lang="scss" scoped>
  @use 'global';
   
  .the-header-logo {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      @include global.logo-font;
    }

    svg {
      height: 25px;
      min-width: 25px;
      margin: 0 2px;
    }
  } 

  @include global.adapt-to-screen('xl') {
    .the-header-logo {

      span {
        @include global.logo-font;
      }

      svg {
        height: 100%;
        margin: 0 5px;
      }
    } 
  }  
</style>
