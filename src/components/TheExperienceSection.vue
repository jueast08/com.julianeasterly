<template>
  <base-section id="experience" title="Experience" subtitle="Professional">
    <div class="experience">
      <div class="experience__experience-list">
        <base-experience>
          <template v-slot:img><logo-icon/></template>
          <template v-slot:title>IT Consultant - Business Analyst</template>
          <template v-slot:subtitle>Actimage</template>
          <template v-slot:subtitle-2></template>
          <template v-slot:dates>Since Sept. 2019</template>
          <template v-slot:location>Colmar, France</template>
          <template v-slot:details></template>
        </base-experience>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from 'Components/BaseSection';
import BaseExperience from 'Components/BaseExperience';
import LogoIcon from 'Icons/LogoIcon';


export default {
  name: 'TheSkillsSection',
  components: {BaseSection, BaseExperience,LogoIcon,},
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
  }
 
</style>
