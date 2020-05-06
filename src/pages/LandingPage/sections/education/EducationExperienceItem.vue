<template>
  <div>
    <base-experience>
      <template v-slot:img><slot name="img"/></template>
      <template v-slot:title><slot name="title"/></template>
      <template v-slot:subtitle><slot name="rank"/></template>
      <template v-slot:subtitle-2><slot name="school-name"/></template>
      <template v-slot:dates><slot name="dates"/></template>
      <template v-slot:location><slot name="location"/></template>
      <template v-slot:details></template>
    </base-experience>
  </div>
</template>

<script>
import BaseExperience from 'Bases/BaseExperience';

export default {
  name: 'EducationExperienceItem',
  components: {BaseExperience,},
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  ::v-deep .base-exp {
    display: flex;
    margin: 60px 0;
    
    &__vital-info {

      &__text {
        &__title {
          color: global.$primary-black;
        }

        &__subtitle {
          color: global.$primary-color;
        }

        &__subtitle-2 {
          color: global.$primary-black;
        }
        &__dates {
          color: global.$primary-black;
        }

        &__location {
          color: global.$primary-black;
          svg {
            fill: global.$primary-color;
          }
        }
      }
    }
  } 
</style>
