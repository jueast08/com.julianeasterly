<template>
  <base-section
    id="education"
    title="Education"
    subtitle="The path I've Traveled"
  >
    <div class="education">
      <div class="education__list">
        <!-- @TODO export data to a json -->
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name
            >Ecole Nationale Supérieure d'Ingénieurs de Caen</template
          >
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
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
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name
            >Ecole Nationale Supérieure d'Ingénieurs de Caen</template
          >
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
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
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name
            >Ecole Nationale Supérieure d'Ingénieurs de Caen</template
          >
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
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
import LogoIcon from "UI/LogoIcon";

export default {
  name: "TheEducationSection",
  components: { BaseSection, EducationExperienceItem, LogoIcon },
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
