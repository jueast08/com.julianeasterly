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
   
   //@todo mobile first
  .the-header-logo {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 14px; 
      line-height: 14px; 
      color: global.$primary-white;  
    }

    svg {
      height: 25px;
      min-width: 25px;
      margin: 0 2px;
      fill: global.$primary-white;
    }
  } 

  @include global.adapt-to-screen('xl') {
    .the-header-logo {

      span {
        font-size: 25px; 
        line-height: 25px; 
      }

      svg {
        height: 100%;
        margin: 0 5px;
      }
    } 
  }  
</style>
