<template>
  <base-section id="experience" title="Experience" subtitle="Professional">
    <div class="experience">
      <div class="experience__list">
        <!-- @TODO export data to a json -->
        <professional-experience-item>
          <template v-slot:img><logo-icon/></template>
          <template v-slot:title>IT Consultant - Business Analyst</template>
          <template v-slot:subtitle>Actimage</template>
          <template v-slot:subtitle-2></template>
          <template v-slot:dates>Since Sept. 2019</template>
          <template v-slot:location>Colmar, France</template>
          <template v-slot:details></template>
        </professional-experience-item>
        <professional-experience-item>
          <template v-slot:img><logo-icon/></template>
          <template v-slot:title>IT Consultant - Business Analyst</template>
          <template v-slot:subtitle>Actimage</template>
          <template v-slot:subtitle-2></template>
          <template v-slot:dates>Since Sept. 2019</template>
          <template v-slot:location>Colmar, France</template>
          <template v-slot:details></template>
        </professional-experience-item>
        <professional-experience-item>
          <template v-slot:img><logo-icon/></template>
          <template v-slot:title>IT Consultant - Business Analyst</template>
          <template v-slot:subtitle>Actimage</template>
          <template v-slot:subtitle-2></template>
          <template v-slot:dates>Since Sept. 2019</template>
          <template v-slot:location>Colmar, France</template>
          <template v-slot:details></template>
        </professional-experience-item>
        <professional-experience-item>
          <template v-slot:img><logo-icon/></template>
          <template v-slot:title>IT Consultant - Business Analyst</template>
          <template v-slot:subtitle>Actimage</template>
          <template v-slot:subtitle-2></template>
          <template v-slot:dates>Since Sept. 2019</template>
          <template v-slot:location>Colmar, France</template>
          <template v-slot:details></template>
        </professional-experience-item>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from 'Components/BaseSection';
import ProfessionalExperienceItem from 'Components/ProfessionalExperienceItem';
import LogoIcon from 'Icons/LogoIcon';


export default {
  name: 'TheSkillsSection',
  components: {BaseSection, ProfessionalExperienceItem,LogoIcon,},
}
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
    }
  }
 
</style>
