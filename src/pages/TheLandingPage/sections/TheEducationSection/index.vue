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
            lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi nec
            turpis leo. praesent hendrerit commodo lorem eget imperdiet. mauris
            consequat lacus justo, at volutpat libero blandit vitae. mauris
            placerat quam a ultrices hendrerit. fusce quis blandit arcu. nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. morbi suscipit tristique
            ornare. aenean ac dictum sapien. sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. donec vel mollis nulla.
          </template>
        </education-experience-item>
        <education-experience-item
          degreeTitle="Master's in Computer Science"
          rank="Valedictorian"
          schoolName="Ecole Nationale Supérieure d'Ingénieurs de Caen"
          dates="2016 - 2019"
          location="Caen, Normandy, France"
        >
          <template #img>
            <img :src="unicaenLogo" alt="Unicaen" />
          </template>
          <template #details>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi nec
            turpis leo. praesent hendrerit commodo lorem eget imperdiet. mauris
            consequat lacus justo, at volutpat libero blandit vitae. mauris
            placerat quam a ultrices hendrerit. fusce quis blandit arcu. nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. morbi suscipit tristique
            ornare. aenean ac dictum sapien. sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. donec vel mollis nulla.
          </template>
        </education-experience-item>
        <education-experience-item
          degreeTitle="Master's in Computer Science"
          rank="Valedictorian"
          schoolName="Ecole Nationale Supérieure d'Ingénieurs de Caen"
          dates="2016 - 2019"
          location="Caen, Normandy, France"
        >
          <template #img>
            <img :src="isuLogo" alt="ISU" />
          </template>
          <template #details>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi nec
            turpis leo. praesent hendrerit commodo lorem eget imperdiet. mauris
            consequat lacus justo, at volutpat libero blandit vitae. mauris
            placerat quam a ultrices hendrerit. fusce quis blandit arcu. nam
            pellentesque, dolor a tincidunt tincidunt, quam libero suscipit
            libero, eu accumsan ex sem laoreet est. morbi suscipit tristique
            ornare. aenean ac dictum sapien. sed purus nulla, luctus sed lorem
            quis, aliquet pellentesque nisl. donec vel mollis nulla.
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
