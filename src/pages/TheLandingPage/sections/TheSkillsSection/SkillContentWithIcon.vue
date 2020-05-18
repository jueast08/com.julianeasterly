<template>
  <base-content-with-icon>
    <template #icon>
      <slot name="icon" />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
  </base-content-with-icon>
</template>

<script>
import BaseContentWithIcon from "Bases/BaseContentWithIcon";

export default {
  name: "SkillContentWithIcon",
  components: { BaseContentWithIcon }
};
</script>

<style lang="scss" scoped>
@use 'global';

::v-deep .base-content-with-icon {
  &__icon {
    color: global.$primary-white;
    svg,
    img {
      fill: global.$primary-white;
    }
  }

  &__title {
    @include global.h4-font;
    color: global.$primary-white;
  }

  &__description {
    color: global.$primary-white;
  }
}
</style>
