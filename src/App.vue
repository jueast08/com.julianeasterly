<template>
  <div id="app">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header/>
>
    <the-Landing-Page/>
  </div>
</template>

<script>
import TheHeader from 'Layout/Header/index';
import TheLandingPage from 'Pages/LandingPage/index';


export default {
  name: 'App',
  components: {
    TheHeader, 
    TheLandingPage,
  }
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
