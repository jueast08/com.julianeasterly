<template>
  <div id="header">
    <div class="header__logo">
      <MainLogo></MainLogo>
    </div>
  </div>
</template>

<script>
import MainLogo from 'Icons/MainLogo';

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    MainLogo
  }
}
</script>


<style lang="scss" scoped>
@use 'global';

  #header {
    //background: black;
    width: 100%; //xl
    
    &__logo {
      background: bisque;
    }    
  }

@include global.adapt-to-screen('xl') {
  #header {
    width: 100%; //xl
    
    &__logo {
      background: bisque;
    }    
  }
}
</style>
