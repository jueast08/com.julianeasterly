<template>
  <base-content-with-icon>
    <template #icon>
      <font-awesome-icon v-if="icon" :icon="icon" fixed-width />
      <!-- <slot name="icon" /> -->
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
  name: "HobbyContentWithIcon",
  props: {
    fontAwesomeCode: {
      type: String,
    },
  },
  data() {
    return {
      icon: null,
    };
  },
  components: { BaseContentWithIcon },
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
    color: global.$primary-color;
    svg,
    img {
      fill: global.$primary-color;
    }
  }

  &__title {
    @include global.p-font($weight: 300);
    color: global.$primary-black;
  }

  &__description {
    display: none;
  }
}
</style>
