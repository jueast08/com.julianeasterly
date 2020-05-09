<template>
  <base-section id="experience" title="Experience" subtitle="Professional">
    <div class="experience">
      <div class="experience__list">
        <!-- @TODO export data to a json -->
        <professional-experience-item
          job-title="IT Consultant - Business Analyst"
          company-name="Actimage"
          work-dates="Since Sept. 2019"
          location="Colmar, Alsace, France"
        >
          <template #img>
            <img :src="actimageLogo" alt="Actimage" />
          </template>
          <template #details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            turpis leo. Praesent hendrerit commodo lorem eget imperdiet. Mauris
            consequat lacus justo, at volutpat libero blandit vitae. Mauris
            placerat quam a ultrices hendrerit. Fusce quis blandit arcu. Nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. Morbi suscipit tristique
            ornare. Aenean ac dictum sapien. Sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. Donec vel mollis nulla.
          </template>
        </professional-experience-item>
        <professional-experience-item
          job-title="Product Owner - Business Analyst"
          company-name="Société Générale"
          jobType="Internship and Student Project"
          workDates="Oct. 2018 - Sept. 2019"
          location="Schiltigheim, Alsace, France"
        >
          <template #img>
            <img :src="sgLogo" alt="Société Générale" />
          </template>
          <template #details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            turpis leo. Praesent hendrerit commodo lorem eget imperdiet. Mauris
            consequat lacus justo, at volutpat libero blandit vitae. Mauris
            placerat quam a ultrices hendrerit. Fusce quis blandit arcu. Nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. Morbi suscipit tristique
            ornare. Aenean ac dictum sapien. Sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. Donec vel mollis nulla.
          </template>
        </professional-experience-item>
        <professional-experience-item
          jobTitle="DevOps Engineer"
          companyName="Canal+"
          jobType="Internship"
          workDates="Apr. 2018 - Aug. 2018"
          location="Issy-les-Moulineaux, Ile-de-France, France"
        >
          <template #img>
            <img :src="canalPlusLogo" alt="Canal+" />
          </template>
          <template #details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            turpis leo. Praesent hendrerit commodo lorem eget imperdiet. Mauris
            consequat lacus justo, at volutpat libero blandit vitae. Mauris
            placerat quam a ultrices hendrerit. Fusce quis blandit arcu. Nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. Morbi suscipit tristique
            ornare. Aenean ac dictum sapien. Sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. Donec vel mollis nulla.
          </template>
        </professional-experience-item>
        <professional-experience-item
          jobTitle="Full-Stack Web Developer"
          companyName="SoyHuCe"
          workDates="Mar. 2016 - Jan. 2018"
          location="Colombelles, Lower-Normandy, France"
        >
          <template #img>
            <img :src="soyhuceLogo" alt="SoyHuCe" />
          </template>
          <template #details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            turpis leo. Praesent hendrerit commodo lorem eget imperdiet. Mauris
            consequat lacus justo, at volutpat libero blandit vitae. Mauris
            placerat quam a ultrices hendrerit. Fusce quis blandit arcu. Nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. Morbi suscipit tristique
            ornare. Aenean ac dictum sapien. Sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. Donec vel mollis nulla.
          </template>
        </professional-experience-item>
      </div>
      <div class="experience__others">
        <div class="experience__others__title">My Other Experiences</div>
        <section class="experience__others__description">
          <!-- @TODO remove this part and think of a cool way to show the 2012 - part -->
          <div class="experience__others__description__title">From 2008 to 2012</div>
          <p>
            I believe in working hard and from the age of 18, I've worked various jobs while in school. Between the moment
            that I started university classes and the moment I recieved my first
            degee, I've worked as a
            <span
              class="bold-primary"
            >tutor/mentor</span>, I've
            <span class="bold-primary">driven a forklift in a beer depot</span>,
            and
            <span
              class="bold-primary"
            >I've worked in a kitchen at the Detroit City Zoo</span>.
          </p>
        </section>
        <section class="experience__others__description">
          <div class="experience__others__description__title">From 2012 to 2014</div>
          <p>
            I have
            <span class="bold-primary">2 years of teaching</span>experience:
            <span class="bold-primary">
              1 year as a teaching assistant at the American Montessori Academy
              in Redford, Michigan
            </span>, and 1 year as an
            <span class="bold-primary">
              English assistant at the Lycée Professionnel Camille Claudel in
              Caen, France
            </span>. These jobs helped me earn money and a visa that would allow me to
            make France my home.
          </p>
          <p>
            While in school in France, I also worked as a
            <span
              class="bold-primary"
            >bilingual tour guide</span> with the
            <span class="bold-primary">Memorial de Caen</span>, a museum dedicated to WWII in Caen, France
          </p>
        </section>
      </div>
      <section class="experience__resume">
        <white-round-button>Download my Resume</white-round-button>
      </section>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import ProfessionalExperienceItem from "./ProfessionalExperienceItem";
import WhiteRoundButton from "UI/WhiteRoundButton";
import ActimageLogo from "Assets/actimage_logo.png";
import SocieteGenerale from "Assets/sg_logo.png";
import CanalPlusLogo from "Assets/canalplus_logo.png";
import SoyhuceLogo from "Assets/soyhuce_logo.png";

export default {
  name: "TheExperienceSection",
  data() {
    return {
      actimageLogo: ActimageLogo,
      sgLogo: SocieteGenerale,
      canalPlusLogo: CanalPlusLogo,
      soyhuceLogo: SoyhuceLogo
    };
  },
  components: { BaseSection, ProfessionalExperienceItem, WhiteRoundButton }
};
</script>

<style lang="scss" scoped>
@use 'global';

#experience {
  background-color: global.$primary-black;
  ::v-deep .section__title {
    color: global.$primary-color;
    text-align: left;
  }

  ::v-deep .section__subtitle {
    text-align: left;
    color: global.$primary-white;
  }

  .experience {
    &__list {
      margin-top: 50px;
    }

    &__others {
      //text-align: center;

      &__title {
        @include global.h3-font;
        color: global.$primary-color;
      }

      &__description {
        margin-top: 50px;
        &__title {
          @include global.subtitle-font;
          color: global.$primary-white;
        }
        p {
          @include global.p-font;
          color: global.$primary-white;
        }
      }
    }

    &__resume {
      text-align: center;
      margin-top: 50px;
    }
  }
}

@include global.adapt-to-screen("s") {
  #experience {
    .experience {
      &__others {
        text-align: center;
      }
    }
  }
}
</style>
