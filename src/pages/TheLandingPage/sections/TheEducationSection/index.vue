<template>
  <base-section
    id="education"
    title="Education"
    subtitle="The path I've Traveled"
  >
    <template #title v-if="content.title">{{ content.title }}</template>
    <template #subtitle v-if="content.subtitle">{{
      content.subtitle
    }}</template>
    <div class="education">
      <div class="education__list" v-if="content.education">
        <education-experience-item
          v-for="(edu, index) in content.education"
          v-bind:key="index"
        >
          <template #degree-title>{{ edu.title }}</template>
          <template #school-name>{{ edu.establishment }}</template>
          <template #rank>{{ edu.subtitle }}</template>
          <template #work-dates
            >{{ edu.start_date }}
            {{ edu.end_date ? "&mdash; " + edu.end_date : "" }}</template
          >
          <template #location>{{ edu.location }}</template>
          <template #img>
            <img v-if="edu.logo" :src="edu.logo.url" :alt="edu.establishment" />
          </template>
          <template #details>
            <vue-markdown>{{ edu.content }}</vue-markdown>
          </template>
        </education-experience-item>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import VueMarkdown from "vue-markdown";

import EducationExperienceItem from "./EducationExperienceItem";

export default {
  name: "TheEducationSection",
  components: { BaseSection, EducationExperienceItem, VueMarkdown },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

.tabbed {
  display: block;
  padding-left: 2em;
}

#education {
  background-color: global.$primary-white;
  ::v-deep .section {
    &__title-box {
      &__subtitle {
        text-align: left;
        color: global.$primary-black;
      }
      &__title {
        color: global.$primary-color;
        text-align: left;

        &:before {
          color: global.$primary-black;
        }
      }
    }
  }

  ::v-deep .section__subtitle {
    text-align: left;
    color: global.$primary-black;
  }

  .experience {
    &__list {
      margin-top: 50px;
    }
  }
}
</style>
