<template>
  <div id="app">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header/>
    <the-home-section/>
    <the-home-section/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheHomeSection from './components/TheHomeSection';


export default {
  name: 'App',
  components: {TheHeader, TheHomeSection}
}
</script>

<style lang="scss">
  body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;

    #app {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }

</style>
