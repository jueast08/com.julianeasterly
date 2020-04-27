<template>
  <div id="app">
    <the-header/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {TheHeader}
}
</script>

<style lang="scss">
  body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;

    #app {
      height: 100%;
      width: 100%;
    }
  }

</style>
