<template>
  <base-section id="hobbies">
    <template #title v-if="content.title">{{ content.title }}</template>
    <div class="hobbies" v-if="content.hobbies">
      <hobby-content-with-icon
        v-for="(hobby, index) in content.hobbies"
        v-bind:key="index"
        class="hobbies__hobby"
        :fontAwesomeCode="hobby.font_awesome_code"
      >
        <template #title>{{ hobby.title }}</template>
      </hobby-content-with-icon>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import HobbyContentWithIcon from "./HobbyContentWithIcon";

export default {
  name: "TheHobbiesSection",
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: { BaseSection, HobbyContentWithIcon }
};
</script>

<style lang="scss" scoped>
@use 'global';

#hobbies {
  padding-top: 50px;
  background-color: global.$primary-white;
  ::v-deep .section {
    &__title-box {
      &__title {
        color: global.$primary-color;
        @include global.subtitle-font($weight: 700);
        text-transform: uppercase;
        text-align: center;
        &:before {
          content: "";
        }
      }
    }
  }
  ::v-deep .section__title {
    color: global.$primary-color;
    @include global.subtitle-font($weight: 700);
    text-transform: uppercase;
    &:before {
      content: "";
    }
  }

  .hobbies {
    &__hobby {
      margin-top: 30px;
    }
  }
}

@include global.adapt-to-screen("s") {
  #hobbies {
    .hobbies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__hobby {
        margin-top: 30px;
        width: calc(100% / 3);
      }
    }
  }
}

@include global.adapt-to-screen("xl") {
  #hobbies {
    .hobbies {
      display: flex;
      justify-content: space-between;

      &__hobby {
        margin-top: 10px;
        width: auto;
      }
    }
  }
}
</style>
