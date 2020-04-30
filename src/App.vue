<template>
  <div id="app">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header/>
    <the-social-network-bar/>
    <the-go-to-top-button/>
    <the-home-section/>
    <the-about-section/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheSocialNetworkBar from './components/TheSocialNetworkBar';
import TheHomeSection from './components/TheHomeSection';
import TheAboutSection from './components/TheAboutSection';
import TheGoToTopButton from './components/TheGoToTopButton';



export default {
  name: 'App',
  components: {TheHeader, TheSocialNetworkBar, TheGoToTopButton, TheHomeSection, TheAboutSection}
}
</script>

<style lang="scss">
  body {
    height: 100vh;
    max-width: 100%;
    padding: 0;
    margin: 0;

    #app {
      position: relative;
      height: 100%;
      max-width: 100%;
    }
  }

</style>
