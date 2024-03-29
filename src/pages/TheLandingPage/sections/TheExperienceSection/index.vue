<template>
  <base-section id="experience">
    <template #title v-if="content.title">{{ content.title }}</template>
    <template #subtitle v-if="content.subtitle">{{
      content.subtitle
    }}</template>
    <div class="experience">
      <div class="experience__list" v-if="content.experiences">
        <professional-experience-item
          v-for="(exp, index) in content.experiences"
          v-bind:key="index"
        >
          <template #job-title>{{ exp.title }}</template>
          <template #company-name>{{ exp.establishment }}</template>
          <template #job-type>{{ exp.subtitle }}</template>

          <template #work-dates>
            {{ getDates(exp.start_date_v2, exp.end_date_v2) }}
            <br />
            {{ getDuration(exp.start_date_v2, exp.end_date_v2) }}
          </template>
          <template #location>{{ exp.location }}</template>
          <template #img>
            <img v-if="exp.logo" :src="exp.logo.url" :alt="exp.establishment" />
          </template>
          <template #details>
            <vue-markdown>{{ exp.content }}</vue-markdown>
          </template>
        </professional-experience-item>
      </div>
      <other-experience v-if="content.other_experiences">
        <template #content>
          <vue-markdown>{{ content.other_experiences }}</vue-markdown>
        </template>
      </other-experience>
      <section
        ref="experience__resume"
        class="experience__resume"
        v-if="content"
      >
        <white-round-button @click="openResume()">{{
          content.resume_button_text
        }}</white-round-button>
      </section>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import ProfessionalExperienceItem from "./ProfessionalExperienceItem";
import OtherExperience from "./OtherExperience";
import WhiteRoundButton from "UI/WhiteRoundButton";
import VueMarkdown from "vue-markdown";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheExperienceSection",
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      observerIterator: null,
    };
  },
  components: {
    BaseSection,
    ProfessionalExperienceItem,
    WhiteRoundButton,
    VueMarkdown,
    OtherExperience,
  },
  methods: {
    openResume() {
      window.open(
        process.env.BASE_URL + this.content.resume.url,
        "_blank"
      );
    },
    getDates(startDate, endDate) {
      if (!endDate) {
        return "Since " + this.getMonthYear(new Date(startDate));
      }

      return (
        this.getMonthYear(new Date(startDate)) +
        " - " +
        this.getMonthYear(new Date(endDate))
      );
    },
    getDuration(startDate, endDate) {
      if (!endDate) {
        return "(" + this.monthYearDiff(new Date(startDate), new Date()) + ")";
      }

      return (
        "(" + this.monthYearDiff(new Date(startDate), new Date(endDate)) + ")"
      );
    },
    getMonthYear(date) {
      const MONTHS = [
        //@TODO translate
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return MONTHS[date.getMonth()] + ". " + date.getFullYear();
    },
    monthYearDiff(endDate, startDate) {
      let months = this.getNbMonthsBetweenTwoDates(endDate, startDate);
      let years = Math.floor(months / 12);
      months -= years * 12;

      return this.createMonthYearDiffString(years, months);
    },
    createMonthYearDiffString(years, months) {
      let returnString = "";
      if (years >= 1) {
        returnString = years + " years";
        if (months > 0) {
          returnString += ", " + months + " month";
        }
      } else {
        returnString = months + " month";
      }

      return returnString + (months > 1 ? "s" : "");
    },
    getNbMonthsBetweenTwoDates(endDate, startDate) {
      return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (startDate.getFullYear() - endDate.getFullYear())
      );
    },
  },
  mounted() {
    InViewportObserver.observe(
      [this.$refs["experience__resume"]],
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

#experience {
  background-color: global.$primary-black;
  @include global.fixed-background-overlay;

  ::v-deep .section {
    &__title-box {
      &__subtitle {
        text-align: left;
        color: global.$primary-white;
      }
      &__title {
        color: global.$primary-color;
        text-align: left;
      }
    }
  }

  .experience {
    &__list {
      margin-top: 50px;
    }

    &__others {
      &__title {
        @include global.h3-font;
        color: global.$primary-color;
        @include global.fade-in-class-modifier;
      }

      &__description {
        margin-top: 50px;
        @include global.fade-in-class-modifier;

        &__title {
          @include global.subtitle-font;
          color: global.$primary-white;
        }
        p {
          @include global.p-font;
          color: global.$primary-white;
        }

        &__content {
          margin-top: 25px;

          &__company {
            margin: 5px 0;
            color: global.$primary-color;
            @include global.xp-subtitle-font($weight: 400);
          }
          &__job-title {
            margin: 5px 0;
            color: global.$primary-white;
            @include global.xp-title-font($weight: 400);
          }
          &__dates {
            color: global.$primary-white;
            @include global.p-font;
          }
        }
      }
    }

    &__resume {
      @include global.fade-in-class-modifier;

      text-align: center;
      margin-top: 50px;
    }
  }
}

a {
  color: global.$primary-color;
  text-decoration: underline;
  transition: all 10s linear;
}

@include global.adapt-to-screen("s") {
  #experience {
    .experience {
      &__others {
        text-align: center;
      }
    }
  }
}
</style>
