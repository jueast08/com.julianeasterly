<template>
  <div id="landing-page">
    <div id="top-anchor-pixel" style="position: absolute; top:70px;"></div>
    <the-header />
    <the-social-network-bar />
    <the-home-section :content="homeSection[lang] ? homeSection[lang] : {}" />
    <the-about-section :content="aboutSection[lang] ? aboutSection[lang] : {}" />
    <the-hobbies-section :content="hobbiesSection[lang] ? hobbiesSection[lang] : {}" />
    <the-skills-section />
    <the-experience-section :content="experienceSection[lang] ? experienceSection[lang] : {}" />
    <the-education-section :content="educationSection[lang] ? educationSection[lang] : {}" />
    <the-contact-section :content="contactSection[lang] ? contactSection[lang] : {}" />
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
import { queries } from "Store";

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
    TheFooter
  },
  data() {
    return {
      lang: "en",
      homeSection: {},
      aboutSection: {},
      hobbiesSection: {},
      experienceSection: {},
      educationSection: {},
      contactSection: {}
    };
  },
  apollo: {
    lang: {
      query: queries.lang
    },
    homeSection: {
      query: queries.home
    },
    aboutSection: {
      query: queries.about
    },
    hobbiesSection: {
      query: queries.hobbies
    },
    experienceSection: {
      query: queries.experiences
    },
    educationSection: {
      query: queries.education
    },
    contactSection: {
      query: queries.contact
    }
  }
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
