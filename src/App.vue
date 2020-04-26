<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {Header}
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
