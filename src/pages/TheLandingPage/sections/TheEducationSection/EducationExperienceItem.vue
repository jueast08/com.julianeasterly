<template>
  <div>
    <base-experience
      :title="degreeTitle"
      :subtitle2="rank"
      :subtitle="schoolName"
      :dates="dates"
      :location="location"
    >
      <template #img>
        <slot name="img" />
      </template>
      <template #title>
        <slot name="degree-title" />
      </template>
      <template #subtitle>
        <slot name="rank" />
      </template>
      <template #subtitle-2>
        <slot name="school-name" />
      </template>
      <template #dates>
        <slot name="dates" />
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
  name: "EducationExperienceItem",
  props: {
    degreeTitle: {
      type: String
    },
    rank: {
      type: String
    },
    schoolName: {
      type: String
    },
    dates: {
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
}
</style>
