<template>
  <header class="header col-12">
    <div class="header__container col-12">

      <div class="col-xl-2">
        <the-header-logo/>
      </div>

      <div class="col-xl-8">
        <the-header-link-list>
          <span v-for="(link, index) in links" 
                :key="link+index"
                :class="link === activeLink? 'active': ''">{{ link}}</span>
        </the-header-link-list>       
      </div>

    </div>

  </header>
</template>

<script>
import TheHeaderLogo from 'Components/TheHeaderLogo';
import TheHeaderLinkList from 'Components/TheHeaderLinkList';

export default {
  name: 'TheHeader',
  data() {
    return {
      links: ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'],
      activeLink: 'Home',
    }
  },
  components: {
    TheHeaderLogo,
    TheHeaderLinkList,
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
      -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.2);
      background: global.$primary-white;
    }

    &__container {
      display: flex;
      height: 100%;
      padding: 25px 0;
      @include global.border-box;
    }  
    
    
  }

// @include global.adapt-to-screen('xl') {

// }
</style>
