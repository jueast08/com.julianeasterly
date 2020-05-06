<template>
  <div>
    <base-experience>
      <template v-slot:img><slot name="img"/></template>
      <template v-slot:title><slot name="title"/></template>
      <template v-slot:subtitle><slot name="subtitle"/></template>
      <template v-slot:subtitle-2><slot name="subtitle-2"/></template>
      <template v-slot:dates><slot name="dates"/></template>
      <template v-slot:location><slot name="location"/></template>
      <template v-slot:details></template>
    </base-experience>
  </div>
</template>

<script>
import BaseExperience from 'Components/BaseExperience';

export default {
  name: 'ProfessionalExperienceItem',
  components: {BaseExperience,},
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  ::v-deep .base-exp {
    display: flex;
    margin: 60px 0;
    
    &__vital-info {
    
      &__icon {

        svg, img {
          fill: global.$primary-color;
          filter: grayscale(1);
        }
      }

      &__text {
        &__title {
          color: global.$primary-white;
        }

        &__subtitle {
          color: global.$primary-color;
        }

        &__subtitle-2 {
          color: global.$primary-white;
        }
        &__dates {
          color: global.$primary-white;
        }

        &__location {
          color: global.$primary-color;
          svg {
            fill: global.$primary-color;
          }
        }
      }
    }
  } 
</style>
