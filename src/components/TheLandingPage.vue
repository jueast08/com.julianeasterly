<template>
  <div id="app">
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
import TheHomeSection from 'Sections/landingPage/homeSection/TheHomeSection';
import TheAboutSection from 'Sections/landingPage/aboutSection/TheAboutSection';
import TheHobbiesSection from 'Sections/landingPage/hobbiesSection/TheHobbiesSection';
import TheSkillsSection from 'Sections/landingPage/skillsSection/TheSkillsSection';
import TheExperienceSection from 'Sections/landingPage/experienceSection/TheExperienceSection';
import TheEducationSection from 'Sections/landingPage/educationSection/TheEducationSection';
import TheContactSection from 'Sections/landingPage/contactSection/TheContactSection';
import TheFooter from 'Sections/general/footer/TheFooter';

export default {
  name: 'TheLandingPage',
  components: {
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
