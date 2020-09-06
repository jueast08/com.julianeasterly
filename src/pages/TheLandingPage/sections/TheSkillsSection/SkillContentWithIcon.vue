<template>
  <base-content-with-icon>
    <template #icon>
      <font-awesome-icon v-if="icon" :icon="icon" fixed-width />
    </template>
    <template #title>
      <slot name="title" />
      {{title}}
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
  components: { BaseContentWithIcon },
  props: {
    fontAwesomeCode: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      icon: null,
    };
  },
  computed: {
    fontAwesomeLibraryCode() {
      return "fa-"
        .concat(this.fontAwesomeCode)
        .split("-")
        .reduce(
          (code, el) => code + el.substr(0, 1).toUpperCase() + el.substring(1)
        );
    },
  },
  mounted() {
    //@TODO refactor
    if (this.fontAwesomeCode) {
      import("@fortawesome/free-solid-svg-icons").then((obj) => {
        this.icon = obj[this.fontAwesomeLibraryCode];
      });
    }
  },
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
