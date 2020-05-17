<template>
  <base-section id="experience" title="Experience" subtitle="Professional">
    <div class="experience">
      <div class="experience__list">
        <!-- @TODO export data to a json -->
        <professional-experience-item
          job-title="IT Consultant"
          company-name="Actimage"
          work-dates="Since Sept. 2019"
          location="Colmar, Alsace, France"
        >
          <template #img>
            <img :src="actimageLogo" alt="Actimage" />
          </template>
          <template #details>
            <p>
              As a consultant, I am currently Product Owner for the "Luxury
              Services" aspects of the Bentley Network Application, a private
              social networkk for Bentley Vehicle owners. I work on the
              functional conception of new products and services, orchestrate
              the development of these services and products, and carry out
              testing. I also carry out market studies and propose innovative IT
              ideas for the company.
              <br />
              <b>Programing Languages and Tools:</b> Javascript, NightwatchJS,
              Sonarqube
              <br />
              <b>Project and Client Management, Response to calls for tenders</b>
            </p>
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
            <p>
              <span class="bold-primary">Internship &mdash; Product Owner - E-Payment Expert</span>
              <br />
              <span class="primary-font-color">Mar. - Sept. 2019</span>
              <br />With the Front Office ATM team at Société Générales
              E-Payment Center in Schiltigheim, France, I worked on the NAC2020
              project &mdash; a project to assure that the entirety of the
              bank's ATMs were in compliance with the new NAC2020 IT security
              norms. This project required precise understanding of aquiring
              banks and ATMS, as well as the ability to read and understand
              complex technical documents.
              <br />
              <b>
                Risk Assessment, Specification Drafting, Meeting Hosting, EMV,
                TR-34
              </b>
            </p>
            <p>
              <span class="bold-primary">Student Project &mdash; E-Payment Analyst</span>
              <br />
              <span class="primary-font-color">Oct. 2018 - Mar. 2019</span>
              <br />My collobration with the Société Générale Bank started with
              a student project the restrictions that can be deduced from ATM
              legislation. This project required understanding EMV
              specfifications, as well as French standards like the the Manuel
              de Retraits sur Automate (Manual on ATM Withrawals in English) and
              the Manuel de Paiements Electroniques (Manaul on Electronique
              Payments)
              <br />
              <b>Specification Drafting, EMV, MPE, MRA</b>
            </p>
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
            <p>
              As a DevOps engineer, I put created a testing tool combining
              Python 2.7 and Kubernetes in order to boost end-to-end test
              execution time. Thanks to this tool, end-to-end tests say a 83%
              decrease in runtime.
              <br />
              <b>Programing Languages and Tools:</b> Python, Javascript, Docker,
              Kubernetes
            </p>
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
            <p>
              <span class="bold-primary">Full-Stack Developer</span>
              <br />As a developer, I worked on projects heavily reliant on web
              technology such as ReactJs and Laravel. I also had the opportunity
              to work occasionally as Product Owner. My bigget challenge was
              seting up and suervising a system of tests (unit, integration, and
              end-to-end tests) for iStoryPath using Jest, Enzyme, Nockk and
              Nightwatch.
              <br />
              <b>Programing Languages and Tools:</b> ReactJs, PHP, Golang, Java,
              Git & Git-Flow, Docker
            </p>
            <p>
              <span class="bold-primary">Internship &mdash; Full-Stack Developer</span>
              <br />Development of a React and Laravel application that
              facilitates the utilization of Wiremock, an API HTTP simulator
              written in Java.
              <br />
              <b>Programing Languages and Tools:</b> ReactJs, Laravel
            </p>
          </template>
        </professional-experience-item>
      </div>
      <div ref="other-experience" class="experience__others">
        <div class="experience__others__title">My Other Experiences</div>
        <section class="experience__others__description">
          <div class="experience__others__description__title">From 2012</div>
          <div class="experience__others__description__content">
            <div
              class="experience__others__description__content__job-title"
            >Bilingual (French/English) Tour Guide &mdash; D-Day and WWII</div>
            <div
              class="experience__others__description__content__company"
            >Mémorial de Caen &mdash; Caen, Normandy, France</div>
            <div class="experience__others__description__content__dates">May 2014 - Dec. 2017</div>
          </div>
          <div class="experience__others__description__content">
            <div
              class="experience__others__description__content__job-title"
            >Exchange Teacher &mdash; English as a Second Language (TESL)</div>
            <div
              class="experience__others__description__content__company"
            >Lycée Camille Claudel &mdash; Caen, Normandy, France</div>
            <div class="experience__others__description__content__dates">Oct. 2013 - May 2014</div>
          </div>
          <div class="experience__others__description__content">
            <div class="experience__others__description__content__job-title">Teaching Assistant</div>
            <div
              class="experience__others__description__content__company"
            >American Montessori Academy &mdash; Redford, Michigan, USA</div>
            <div class="experience__others__description__content__dates">Oct. 2012 - July. 2013</div>
          </div>
        </section>
        <section class="experience__others__description">
          <div class="experience__others__description__title">From 2008 to 2012</div>
          <p>
            I believe in working hard and from the age of 18, I've worked
            various jobs while in school. Between the moment that I started
            university classes and the moment I recieved my first degee, I've
            worked as a
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
      </div>
      <section ref="experience__resume" class="experience__resume">
        <white-round-button @click="openResume()">Download my Resume</white-round-button>
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
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheExperienceSection",
  data() {
    return {
      actimageLogo: ActimageLogo,
      sgLogo: SocieteGenerale,
      canalPlusLogo: CanalPlusLogo,
      soyhuceLogo: SoyhuceLogo,
      observerIterator: null
    };
  },
  components: {
    BaseSection,
    ProfessionalExperienceItem,
    WhiteRoundButton
  },
  methods: {
    openResume() {
      window.open(
        process.env.BASE_URL + "julian_easterly_resume.pdf",
        "_blank"
      );
    }
  },
  mounted() {
    InViewportObserver.observe(
      [
        this.$refs["experience__resume"],
        this.$refs["other-experience"].childNodes
      ],
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

#experience {
  background-color: global.$primary-black;
  @include global.fixed-background-overlay;

  ::v-deep .section {
    &__title-box {
      &__subtitle {
        text-align: left;
        color: global.$primary-white;
      }
      &__title {
        color: global.$primary-color;
        text-align: left;
      }
    }
  }

  .experience {
    &__list {
      margin-top: 50px;
    }

    &__others {
      &__title {
        @include global.h3-font;
        color: global.$primary-color;
        @include global.fade-in-class-modifier;
      }

      &__description {
        margin-top: 50px;
        @include global.fade-in-class-modifier;

        &__title {
          @include global.subtitle-font;
          color: global.$primary-white;
        }
        p {
          @include global.p-font;
          color: global.$primary-white;
        }

        &__content {
          margin-top: 25px;

          &__company {
            margin: 5px 0;
            color: global.$primary-color;
            @include global.xp-subtitle-font($weight: 400);
          }
          &__job-title {
            margin: 5px 0;
            color: global.$primary-white;
            @include global.xp-title-font($weight: 400);
          }
          &__dates {
            color: global.$primary-white;
            @include global.p-font;
          }
        }
      }
    }

    &__resume {
      @include global.fade-in-class-modifier;

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
