<template>
  <div id="app">
    <the-header/>
    <the-header-link-list links="[{'name': 'link1'}]"/>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheHeaderLinkList from './components/TheHeaderLinkList';


export default {
  name: 'App',
  components: {TheHeader, TheHeaderLinkList}
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
