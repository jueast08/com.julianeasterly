<template>
  <base-gauge :title="skillTitle" :goal-label="goalLabel" :percentage="percentage" />
</template>

<script>
import BaseGauge from "Bases/BaseGauge";

export default {
  name: "SkillGauge",
  props: {
    skillTitle: {
      type: String,
      required: false,
      default: ""
    },
    percentage: {
      type: String,
      required: true
    },
    goalLabel: {
      type: String,
      required: false,
      default: ""
    }
  },
  components: {
    BaseGauge
  }
};
</script>


<style lang="scss" scoped>
@use 'global';

::v-deep .base-gauge {
  &__title {
    font-weight: bold;
    text-align: left;
  }

  &__container {
    height: 5px;
    background: global.$primary-white;
    border: 2px solid global.$primary-white;

    &__fluid {
      background: global.$primary-color;
    }
  }
}
</style>
