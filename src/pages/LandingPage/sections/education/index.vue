<template>
  <base-section id="education" title="Education" subtitle="The path I've Traveled">
    <div class="education">
      <div class="education__list">
        <!-- @TODO export data to a json -->
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name>Ecole Nationale Supérieure d'Ingénieurs de Caen</template>
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
          <template #details></template>
        </education-experience-item>
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name>Ecole Nationale Supérieure d'Ingénieurs de Caen</template>
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
          <template #details></template>
        </education-experience-item>
        <education-experience-item>
          <template #img>
            <logo-icon />
          </template>
          <template #title>Master's in Computer Science</template>
          <template #rank>Valedictorian</template>
          <template #school-name>Ecole Nationale Supérieure d'Ingénieurs de Caen</template>
          <template #dates>2016 - 2019</template>
          <template #location>Caen, France</template>
          <template #details></template>
        </education-experience-item>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import EducationExperienceItem from "./EducationExperienceItem";
import LogoIcon from "Icons/LogoIcon";

export default {
  name: "TheEducationSection",
  components: { BaseSection, EducationExperienceItem, LogoIcon }
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
