<template>
  <base-section id="education" title="Education" subtitle="The path I've Traveled">
    <div class="education">
      <div class="education__list">
        <!-- @TODO export data to a json -->
        <education-experience-item
          degreeTitle="Master's in Computer Science"
          rank="Valedictorian"
          schoolName="Ecole Nationale Supérieure d'Ingénieurs de Caen"
          dates="2016 - 2019"
          location="Caen, Normandy, France"
        >
          <template #img>
            <img :src="ensicaenLogo" alt="Ensicaen" />
          </template>
          <template #details>
            <p>
              <b>Specialty: &nbsp;</b>
              <span class="bold-primary tabbed">E-Paiement and Cybersecurity</span>
            </p>
            <p>
              <b>Internships: &nbsp;</b>
            </p>
            <ul>
              <li class="bold-primary">Apr. - Aug. 2018 &mdash; Canal+ &mdash; Devops Intern</li>
              <li
                class="bold-primary"
              >Oct. 2018 - Mar. 2019 &mdash; Société Générale &mdash; Product Owner</li>
            </ul>
            <p>
              <b>Professional Collaborations: &nbsp;</b>
              <span
                class="bold-primary tabbed"
              >Oct. 2018 - Mar. 2019 &mdash; Société Générale &mdash; E-Banking Analyst</span>
            </p>
            <p>
              Technical courses in software engineering, network configuration, E-Banking and Security, embedded progamming, computer architecture, artificial intelligence
              as well as general courses in math and communication.
              <br />
              <b>Programing Languages:</b> Java/Java EE/Java FX/Android, C/C++, PHP, Python, GIT, SQL
              <br />
              <b>Concepts:</b> Agility, Project Management, Gang of Four Design Patterns
            </p>
          </template>
        </education-experience-item>
        <education-experience-item
          degreeTitle="Undergrad Degree in Computer Science"
          rank="Valedictorian"
          schoolName="Université de Caen Normandie"
          dates="2014 - 2016"
          location="Caen, Normandy, France"
        >
          <template #img>
            <img :src="unicaenLogo" alt="Unicaen" />
          </template>
          <template #details>
            <p>
              <b>Internships: &nbsp;</b>
              <span
                class="bold-primary tabbed"
              >Mar. - Apr. 2016 &mdash; SoyHuce &mdash; Full-Stack Web Developer</span>
            </p>
            <p>
              Technical courses in database design and administration, software engineering, network configuration, computer achitecture,
              as well as general courses in math and communication.
              <br />
              <b>Programing Languages and Tools:</b> Java/Java EE, C, PHP, GIT, SQL, PSQL
              <br />
              <b>Concepts:</b> Agility, Merize, Gang of Four Design Patterns
            </p>
          </template>
        </education-experience-item>
        <education-experience-item
          degreeTitle="Bachelor's of Arts in English Literature"
          rank="Magna Cum Laude"
          schoolName="Indiana State University"
          dates="2008 - 2012"
          location="Terre Haute, Indiana, USA"
        >
          <template #img>
            <img :src="isuLogo" alt="ISU" />
          </template>
          <template #details>
            <p>
              <b>Minor: &nbsp;</b>
              <span class="bold-primary tabbed">Language Studies</span>
            </p>
            <p>
              <b>Certifications: &nbsp;</b>
              <span
                class="bold-primary tabbed"
              >Teaching English as a Second/Foreign Language (TESL/TEFL)</span>
            </p>
            <p>
              <b>Semesters Abroad: &nbsp;</b>
            </p>
            <ul>
              <li
                class="bold-primary"
              >Jan. - May 2010 &mdash; Edge Hill University, Ormskirk, England, U.K.</li>
              <li
                class="bold-primary"
              >Jan. - June 2012 &mdash; Université Paul Valéry, Montpellier III, Montpellier, France</li>
            </ul>
            <p>
              <b>Scholarship Student Athelete &mdash; Football</b>
            </p>
            <p>Courses in literature and communication, as well general education.</p>
          </template>
        </education-experience-item>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import EducationExperienceItem from "./EducationExperienceItem";
import EnsiLogo from "Assets/ensicaen_logo.png";
import UnicaenLogo from "Assets/unicaen_logo.png";
import ISULogo from "Assets/isu_logo.png";

export default {
  name: "TheEducationSection",
  components: { BaseSection, EducationExperienceItem },
  data() {
    return {
      ensicaenLogo: EnsiLogo,
      unicaenLogo: UnicaenLogo,
      isuLogo: ISULogo
    };
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.tabbed {
  display: block;
  padding-left: 2em;
}

#education {
  background-color: global.$primary-white;
  ::v-deep .section__title {
    color: global.$primary-color;
    text-align: left;

    &:before {
      color: global.$primary-black;
    }
  }

  ::v-deep .section__subtitle {
    text-align: left;
    color: global.$primary-black;
  }

  .experience {
    &__list {
      margin-top: 50px;
    }
  }
}
</style>
