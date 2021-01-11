<template>
  <div id="landing-page">
    <div id="top-anchor-pixel" style="position: absolute; top: 70px"></div>
    <the-header />
    <the-social-network-bar />
    <the-home-section :content="content.home" />
    <the-about-section :content="content.about" />
    <the-hobbies-section :content="content.hobbies" />
    <the-skills-section :content="content.skills" />
    <the-experience-section :content="content.experience" />
    <the-education-section :content="content.education" />
    <the-contact-section :content="content.contact" />
    <the-footer />
    <the-go-to-top-button querySelectorThatTriggersShowButton="#home" />
  </div>
</template>

<script>
import TheHeader from "Layout/Header";
import TheSocialNetworkBar from "Layout/TheSocialNetworkBar";
import TheGoToTopButton from "Layout/ScrollToSectionButton";
import TheHomeSection from "./sections/TheHomeSection";
import TheAboutSection from "./sections/TheAboutSection";
import TheHobbiesSection from "./sections/TheHobbiesSection";
import TheSkillsSection from "./sections/TheSkillsSection";
import TheExperienceSection from "./sections/TheExperienceSection";
import TheEducationSection from "./sections/TheEducationSection";
import TheContactSection from "./sections/TheContactSection";
import TheFooter from "Layout/TheFooter";
import LANGS from "Lang";

export default {
  name: "TheLandingPage",
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
    TheContactSection,
    TheFooter,
  },
  data() {
    return {
      content: LANGS.en,
    };
  },
};
</script>

<style lang="scss">
@use 'global';

body {
  height: 100vh;
  max-width: 100%;
  padding: 0;
  margin: 0;

  #landing-page {
    position: relative;
    height: 100%;
    max-width: 100%;
  }
}
</style>
