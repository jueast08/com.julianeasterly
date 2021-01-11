<template>
  <base-section id="skills">
    <template #title v-if="content.title">{{ content.title }}</template>
    <template #subtitle v-if="content.subtitle">{{
      content.subtitle
    }}</template>
    <div class="skills">
      <div class="skills__list">
        <skill-content-with-icon
          class="skills__list__skill"
          v-for="(skill, index) in content.skill_set"
          v-bind:key="index"
          :fontAwesomeCode="skill.font_awesome_code"
          :title="skill.title"
        >
          <template #description>
            <vue-markdown>{{ skill.desc }}</vue-markdown>
            <div class="skills__list__skill__gauge-wrapper">
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="100"
                  :goal-label="content.comfortable_skills_title"
                />
                <div class="skills__list__skill__gauge-wrapper__group__list">
                  <vue-markdown>{{ skill.comfortable_skills }}</vue-markdown>
                </div>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="60"
                  :goal-label="content.less_comfortable_skills_title"
                />
                <div class="skills__list__skill__gauge-wrapper__group__list">
                  <vue-markdown>{{
                    skill.less_comfortable_skills
                  }}</vue-markdown>
                </div>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="25"
                  :goal-label="content.need_practice_skills_title"
                />
                <div class="skills__list__skill__gauge-wrapper__group__list">
                  <vue-markdown>{{ skill.need_practice_skills }}</vue-markdown>
                </div>
              </div>
            </div>
          </template>
        </skill-content-with-icon>
      </div>
      <div ref="contact-me" class="skills__contact-me">
        <div>{{ content.work_with_me_title }}</div>
        <div class="skills__contact-me__button">
          <white-round-button @click="scrollToId('contact')">{{
            content.work_with_me_button
          }}</white-round-button>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import SkillContentWithIcon from "./SkillContentWithIcon";
import SkillGauge from "./SkillGauge";
import WhiteRoundButton from "UI/WhiteRoundButton";
import scrollToId from "Utility/ScrollHelper";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";
import VueMarkdown from "vue-markdown";

//import { injectStrapiMediaRoot } from "Utility/StrapiHelper";

export default {
  name: "TheSkillsSection",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageRoot: process.env.VUE_APP_STRAPI_API_URL,
      observerIterator: null,
    };
  },
  components: {
    BaseSection,
    SkillContentWithIcon,
    WhiteRoundButton,
    SkillGauge,
    VueMarkdown,
  },
  methods: {
    scrollToId,
  },
  mounted() {
    InViewportObserver.observe(
      this.$refs["contact-me"],
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

#skills {
  background-color: global.$primary-color;
  ::v-deep .section {
    &__title-box {
      &__subtitle,
      &__title {
        color: global.$primary-white;
      }
    }
  }
  ::v-deep .section__title,
  ::v-deep .section__subtitle {
    color: global.$primary-white;
  }
  @include global.fixed-background-overlay;

  .skills {
    &__list {
      &__skill {
        margin-top: 60px;
        &__title {
          font-weight: bold;
          margin: 25px 0;
        }

        &__gauge-wrapper {
          &__group {
            &__list {
              text-align: left;
            }
          }
        }
      }
    }

    &__contact-me {
      margin-top: 50px;
      text-align: center;
      @include global.subtitle-font;
      color: global.$primary-white;
      @include global.fade-in-class-modifier;

      &__button {
        margin-top: 25px;
      }
    }
  }
}

a {
  color: global.$primary-white;
  text-decoration: underline;
  transition: all 10s linear;
}

@include global.adapt-to-screen("m") {
  #skills {
    .skills {
      &__list {
        &__skill {
          &__gauge-wrapper {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            &__group {
              width: 30%;
              &__gauge {
                margin: 10px 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
