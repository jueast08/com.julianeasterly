<template>
  <div id="app">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header/>
    <the-social-network-bar/>
    <the-home-section/>
    <!-- TODO delete -->
    <div style="width: 100%; height: 100000px"></div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheSocialNetworkBar from './components/TheSocialNetworkBar';
import TheHomeSection from './components/TheHomeSection';


export default {
  name: 'App',
  components: {TheHeader, TheSocialNetworkBar, TheHomeSection}
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
