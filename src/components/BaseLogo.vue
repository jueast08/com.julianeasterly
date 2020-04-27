<template>
  
  <div class="base-logo">
    <span>JULIAN</span>
    <main-logo/>
    <span>EASTERLY</span>
  </div>

</template>

<script>
import MainLogo from 'Icons/MainLogo';

export default {
  name: 'BaseLogo',
  data() {
    return {
      logoClassName: 'base'
    }
  },
  components: {
    MainLogo
  }
}
</script>

<style lang="scss" scoped>
  @use 'global';
   
  .base-logo {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 25px; 
      line-height: 25px; 
      color: global.$primary-white;  
    }

    svg {
      height: 100%;
      margin: 0 5px;
      fill: global.$primary-white;
    }
  } 
  
</style>
