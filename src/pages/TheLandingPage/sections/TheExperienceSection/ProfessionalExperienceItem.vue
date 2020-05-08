<template>
  <div>
    <base-experience
      :title="jobTitle"
      :subtitle="companyName"
      :dates="workDates"
      :location="location"
    >
      <template #img>
        <slot name="img" />
      </template>
      <template #title>
        <slot name="job-title" />
      </template>
      <template #subtitle>
        <slot name="company-name" />
      </template>
      <template #dates>
        <slot name="work-dates" />
      </template>
      <template #location>
        <slot name="location" />
      </template>
      <template #details>
        <slot name="details" />
      </template>
    </base-experience>
  </div>
</template>

<script>
import BaseExperience from "Bases/BaseExperience";

export default {
  name: "ProfessionalExperienceItem",
  props: {
    jobTitle: {
      type: String
    },
    companyName: {
      type: String
    },
    workDates: {
      type: String
    },
    location: {
      type: String
    }
  },
  components: { BaseExperience }
};
</script>

<style lang="scss" scoped>
@use 'global';

::v-deep .base-exp {
  margin: 60px 0;

  &__vital-info {
    &__wrapper {
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

  &__details {
    color: global.$primary-white;
  }
}
</style>
