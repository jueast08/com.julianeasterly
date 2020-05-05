<template>
  <div id="app">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header/>
    <the-social-network-bar/>
    <the-go-to-top-button/>
    <the-home-section/>
    <the-about-section/>
    <the-hobbies-section/>
    <the-skills-section/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheSocialNetworkBar from './components/TheSocialNetworkBar';
import TheGoToTopButton from './components/TheGoToTopButton';
import TheHomeSection from './components/TheHomeSection';
import TheAboutSection from './components/TheAboutSection';
import TheHobbiesSection from './components/TheHobbiesSection';
import TheSkillsSection from './components/TheSkillsSection';
import TheFooter from './components/TheFooter';

export default {
  name: 'App',
  components: {
    TheHeader, 
    TheSocialNetworkBar, 
    TheGoToTopButton, 
    TheHomeSection, 
    TheAboutSection,
    TheHobbiesSection,
    TheSkillsSection,
    TheFooter}
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
