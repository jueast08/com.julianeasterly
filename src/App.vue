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
    <the-experience-section/>
    <the-education-section/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from 'Components/TheHeader';
import TheSocialNetworkBar from 'Components/TheSocialNetworkBar';
import TheGoToTopButton from 'Components/TheGoToTopButton';
import TheHomeSection from 'Components/TheHomeSection';
import TheAboutSection from 'Components/TheAboutSection';
import TheHobbiesSection from 'Components/TheHobbiesSection';
import TheSkillsSection from 'Components/TheSkillsSection';
import TheExperienceSection from 'Components/TheExperienceSection';
import TheEducationSection from 'Components/TheEducationSection';
import TheFooter from 'Components/TheFooter';

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
    TheExperienceSection,
    TheEducationSection,
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
