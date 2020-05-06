<template>
  <div id="landing-page">
    <the-social-network-bar/>
    <the-go-to-top-button/>
    <the-home-section/>
    <the-about-section/>
    <the-hobbies-section/>
    <the-skills-section/>
    <the-experience-section/>
    <the-education-section/>
    <the-contact-section/>
    <the-footer/>
  </div>
</template>

<script>
import TheSocialNetworkBar from 'Layout/TheSocialNetworkBar';
import TheGoToTopButton from './TheGoToTopButton';
import TheHomeSection from './sections/TheHomeSection';
import TheAboutSection from './sections/TheAboutSection';
import TheHobbiesSection from './sections/hobbies/index';
import TheSkillsSection from './sections/skills/index';
import TheExperienceSection from './sections/experience/index';
import TheEducationSection from './sections/education/index';
import TheContactSection from './sections/TheContactSection';
import TheFooter from 'Layout/TheFooter';

export default {
  name: 'TheLandingPage',
  components: {
    TheSocialNetworkBar, 
    TheGoToTopButton, 
    TheHomeSection, 
    TheAboutSection,
    TheHobbiesSection,
    TheSkillsSection,
    TheExperienceSection,
    TheEducationSection,
    TheContactSection,
    TheFooter}
}
</script>

<style lang="scss"></style>
